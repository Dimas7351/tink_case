from flask import Blueprint, redirect, render_template, request, url_for, flash, jsonify
from flask_cors import cross_origin
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity, verify_jwt_in_request

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

    print('User logged in successfully')

    access_token = create_access_token(identity={'user_id': user.id})
    print(user.id, access_token)
    return jsonify(user_id = user.id, access_token=access_token), 201



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
    return jsonify(user_id=new_user.id,access_token=access_token), 201


@auth.route('/logout', methods=['POST'])
@cross_origin()
def logout():

    print("hahaah")

    return jsonify("message"),200

@auth.route('/takeinfo', methods=['GET'])
@jwt_required()
def take_user_info():
    # Получаем текущего пользователя
    #current_user = get_jwt_identity()
    user_id = request.args.get('user_id')
    user = User.query.filter_by(id=user_id).first()


    return jsonify(user_id = user.id,username=user.username), 200