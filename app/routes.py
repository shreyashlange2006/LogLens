from flask import Blueprint, render_template, request, jsonify

from app.services.upload_service import save_uploaded_file
from app.services.parser import parse_log_file
from app.services.detector import detect_attacks

main = Blueprint("main", __name__)


@main.route("/")
def home():
    return render_template("index.html")


@main.route("/upload", methods=["POST"])
def upload():

    # Check if file exists in request
    if "file" not in request.files:
        return jsonify({
            "success": False,
            "message": "No file uploaded."
        }), 400

    file = request.files["file"]

    # Check if filename is empty
    if file.filename == "":
        return jsonify({
            "success": False,
            "message": "No file selected."
        }), 400

    # Save uploaded file
    filepath = save_uploaded_file(file)

    # Parse log file
    logs = parse_log_file(filepath)

    # Detect attacks and generate summary
    result = detect_attacks(logs)

    # Return JSON response
    return jsonify({
        "success": result["success"],
        "filename": file.filename,
        "summary": result["summary"],
        "logs": result["logs"]
    })