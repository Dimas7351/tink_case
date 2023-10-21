from flask import Flask, render_template, jsonify
from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker
from sqlalchemy import create_engine, Integer, String, Column
from flask_sqlalchemy import SQLAlchemy
from flask import request

app = Flask(__name__, template_folder='../front', static_folder='../front/images')
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:12345@localhost:5432/octohackathon'
engine = create_engine(app.config['SQLALCHEMY_DATABASE_URI'])
Session = sessionmaker(bind=engine)
db = SQLAlchemy(app)

class Tournaments(db.Model):
    __tablename__ = 'tournaments'
    id = db.Column(db.Integer, primary_key=True)
    namem = db.Column(db.String(100))
    status = db.Column(db.String(100))
    teams = db.Column(db.String(100))

    def status_class(self):
        if self.status == 'OPENED':
            return 'badge-primary'
        elif self.status == 'ACTIVE':
            return 'badge-success'
        elif self.status == 'FINISHED':
            return 'badge-danger'
        else:
            return 'badge-secondary'

@app.route('/')
def index():
    session = Session()
    tournaments = session.query(Tournaments).all()
    session.close()
    return render_template('all_tournament.html', tournaments=tournaments)


if __name__ == '__main__':
    app.run(debug=True)

