from flask import Blueprint, redirect, render_template, request, url_for, flash, jsonify

from werkzeug.security import generate_password_hash, check_password_hash
from .models import User
from . import db

auth = Blueprint('auth', __name__)

@auth.route('/login')
def login():
    return render_template('login.html')


@auth.route('/signup')
def signup():
    return render_template('signup.html')

@auth.route('/signup', methods=['POST'])
def signup_post():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()

    if user:
        return jsonify({'message': 'Username already exists'}), 400

    new_user = User(username=username, password=generate_password_hash(password, method='pbkdf2:sha256'))

    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User registered successfully'}), 201


@auth.route('/logout')
def logout():
    return 'Logout'