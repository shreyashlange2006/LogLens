import os
from flask import current_app
from werkzeug.utils import secure_filename


def save_uploaded_file(file):
    upload_folder = current_app.config["UPLOAD_FOLDER"]

    # Create uploads folder if it doesn't exist
    os.makedirs(upload_folder, exist_ok=True)

    filename = secure_filename(file.filename)

    filepath = os.path.join(upload_folder, filename)

    file.save(filepath)

    return filepath