# from flask_login import UserMixin
# from . import db
#
# #
# teams_users = db.Table('teams_users',
#                        db.Column('team_id', db.Integer, db.ForeignKey('teams.id')),
#                        db.Column('user_id', db.Integer, db.ForeignKey('users.id'))
#                        )
#
# teams_matches = db.Table('teams_matches',
#                          db.Column('team_id', db.Integer, db.ForeignKey('teams.id')),
#                          db.Column('match_id', db.Integer, db.ForeignKey('matches.id'))
#                          )
#
#
# #
#
# class Tournament(db.Model):
#     __tablename__ = 'tournaments'
#     id = db.Column(db.Integer, primary_key=True)
#     tourney = db.Column(db.String(100))
#     status = db.Column(db.String(100))
#     teams = db.Column(db.String(100))
#     matches = db.relationship('Match', backref='tournament')
#
#
#
# class Match(db.Model):
#     __tablename__ = 'matches'
#     id = db.Column(db.Integer, primary_key=True)
#     tournament_id = db.Column(db.Integer(), db.ForeignKey('tournaments.id'))
#     teams = db.relationship('Team', secondary=teams_matches, backref='matches')
#     score = db.Column(db.String(100))
#
#
# class Team(db.Model):
#     __tablename__ = 'teams'
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(100))
#
#
# #  users = db.relationship('User', secondary=teams_users, backref='teams')
# #  matches = db.relationship('Match', secondary=teams_matches, backref='teams')
#
#
# class User(UserMixin, db.Model):
#     __tablename__ = 'users'
#     id = db.Column(db.Integer, primary_key=True)
#     username = db.Column(db.String(1000), unique=True)
#     password = db.Column(db.String(1000))
#     teams = db.relationship('Team', secondary=teams_users, backref='users')


from . import db


class User(db.Model):
    tablename = 'user'
    id = db.Column(db.Integer, primary_key=True)  # primary keys are required by SQLAlchemy)
    username = db.Column(db.String(1000), unique=True)
    password = db.Column(db.String(1000))