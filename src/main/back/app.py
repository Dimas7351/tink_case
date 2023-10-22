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
        return get_status_class(self.status)

def get_status_class(status):
    if status == 'OPENED':
        return 'badge-primary'
    elif status == 'ACTIVE':
        return 'badge-success'
    elif status == 'FINISHED':
        return 'badge-danger'
    else:
        return 'badge-secondary'


@app.route('/')
def index():
    session = Session()
    tournaments = session.query(Tournaments).all()
    session.close()
    return render_template('all_tournament.html', tournaments=tournaments)

@app.route('/api/refresh', methods=['GET'])
def refresh_api():
    session = Session()
    updated_tournaments = session.query(Tournaments).all()
    session.close()

    updated_tournaments_list = []
    for tournament in updated_tournaments:
        updated_tournaments_list.append({
            'namem': tournament.namem,
            'status': tournament.status
        })

    return jsonify(updated_tournaments_list)

@app.route('/tournament/<int:tournament_id>')
def tournament_page(tournament_id):
    session = Session()
    tournament = session.query(Tournaments).filter_by(id=tournament_id).first()
    session.close()
    return render_template('tournament_page.html', tournament=tournament)



if __name__ == '__main__':
    app.run(debug=True)

