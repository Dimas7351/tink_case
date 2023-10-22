from flask import Blueprint, redirect, render_template, request, url_for, flash, jsonify
from flask_cors import cross_origin
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

from werkzeug.security import generate_password_hash, check_password_hash
from .models import User
from . import db

auth = Blueprint('auth', __name__)


@auth.route('/signin', methods=['POST'])
@cross_origin()
def login_post():
    data = request.get_json()
    username = data.get('email')
    password = data.get('password')
    print(username, password)

    user = User.query.filter_by(username=username).first()

    if not user or not check_password_hash(user.password, password):
        print('Invalid credentials')
        return jsonify({'message': 'Invalid credentials'}), 401

    # В случае успешной аутентификации, можно создать access_token.
    #access_token = create_access_token(identity=username)

    print('User logged in successfully')
    access_token = create_access_token(identity={'user_id': user.id})
    return jsonify(access_token=access_token), 201
    #return jsonify({'message': 'User logged in successfully'}), 201


@auth.route('/signup', methods=['POST'])
@cross_origin()
def signup_post():
    data = request.get_json()
    username = data.get('email')
    password = data.get('password')
    print(username, password)

    user = User.query.filter_by(username=username).first()

    if user:
        print('Username already exists')
        return jsonify({'message': 'Username already exists'}), 400

    new_user = User(username=username, password=generate_password_hash(password, method='pbkdf2:sha256'))

    db.session.add(new_user)
    db.session.commit()
    print('User registered successfully')
    access_token = create_access_token(identity={'user_id': new_user.id})
    return jsonify(access_token=access_token), 201


@auth.route('/logout', methods=['POST'])

@cross_origin()
def logout():
    # Получаем текущего пользователя
    #current_user = get_jwt_identity()
    print("hahaah")

    # Можно добавить дополнительные операции перед выходом, если нужно

    #return jsonify(logged_in_as=current_user), 200
    return jsonify("message"  "sosi"),200
