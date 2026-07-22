from flask import Flask
from dotenv import load_dotenv
from flask_cors import CORS

from config import Config
from app.routes import main

load_dotenv()

def create_app():
    app = Flask(__name__)

    app.config.from_object(Config)

    CORS(
        app,
        resources={r"/*": {"origins": "*"}},
        supports_credentials=False,
    )

    app.register_blueprint(main)

    return app