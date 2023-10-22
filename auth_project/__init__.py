from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_jwt_extended import JWTManager

# init SQLAlchemy so we can use it later in our models
db = SQLAlchemy()


def create_app():
    app = Flask(__name__)
    CORS(app)
    cors = CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})
    app.config['SECRET_KEY'] = 'secret-key'
    jwt = JWTManager(app)
    username = "postgres"
    password = "password"
    dbname = "tinkoff"

    app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:password@localhost:5432/tinkoff"

    db.init_app(app)

    # blueprint for auth routes in our app
    from .auth import auth as auth_blueprint
    app.register_blueprint(auth_blueprint)

    # blueprint for non-auth parts of app
    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    return app
