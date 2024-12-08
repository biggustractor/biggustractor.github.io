import os
from flask import Flask

from .blueprints import index

def create_app():
    app = Flask(__name__, instance_relative_config=True)

    os.makedirs(app.instance_path, exist_ok=True)

    app.register_blueprint(index.bp)

    return app

    