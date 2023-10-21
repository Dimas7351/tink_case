from . import db


class User(db.Model):
    tablename = 'user'
    id = db.Column(db.Integer, primary_key=True)  # primary keys are required by SQLAlchemy)
    username = db.Column(db.String(1000), unique=True)
    password = db.Column(db.String(1000))
