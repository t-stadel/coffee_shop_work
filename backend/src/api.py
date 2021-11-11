import os
from flask import Flask, request, jsonify, abort
from sqlalchemy import exc
import json
from flask_cors import CORS

from .database.models import db_drop_and_create_all, setup_db, Drink
from .auth.auth import AuthError, requires_auth

app = Flask(__name__)
setup_db(app)
CORS(app)


@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Headers',
                         'Content-Type,Authorization,true')
    response.headers.add('Access-Control-Allow-Methods',
                         'GET,PATCH,POST,DELETE,OPTIONS')
    return response


''' Uncomment this line for initial setup. Your data will be lost !'''


# db_drop_and_create_all()

# ----------------------------------------------------------------------------#
# ROUTES
# ----------------------------------------------------------------------------#

# ----------------------------------------------------------------------------#
# Drink-Routes
# ----------------------------------------------------------------------------#
@app.route('/drinks', methods=['GET'])
def get_drinks():
    drinks = [drink.short() for drink in Drink.query.all()]
    return jsonify({
        'success': True,
        'drinks': drinks
    })


@app.route('/drinks-detail', methods=['GET'])
@requires_auth('get:drinks-detail')
def get_drinks_detail(payload):
    drinks = [drink.long() for drink in Drink.query.all()]
    return jsonify({
        'success': True,
        'drinks': drinks
    })


@app.route('/drinks', methods=['POST'])
@requires_auth('post:drinks')
def post_drink(payload):
    body = request.get_json()
    title = body.get('title')
    recipe = body.get('recipe')
    drink = Drink(title=title, recipe=json.dumps(recipe))
    drink.insert()

    return jsonify({
        'success': True,
        'drink': drink.long()
    })


@app.route('/drinks/<int:drink_id>', methods=['PATCH'])
@requires_auth('patch:drinks')
def patch_drink(payload, drink_id):
    drink = Drink.query.filter(Drink.id == drink_id).one_or_none()
    if drink is None:
        abort(404)
    body = request.get_json()

    title = body.get('title')
    recipe = drink.recipe if body.get('recipe') is None else json.dumps(
        body.get('recipe'))

    drink.title = title
    drink.recipe = recipe

    drink.update()

    return jsonify({
        'success': True,
        'drinks': [drink.long()]
    })


@app.route('/drinks/<int:drink_id>', methods=['DELETE'])
@requires_auth('delete:drinks')
def delete_drink(payload, drink_id):
    drink = Drink.query.get(drink_id)

    if drink is None:
        abort(404)

    drink.delete()

    return jsonify({
        'success': True,
        'deleted': drink.id
    })


# ----------------------------------------------------------------------------#
# User-Management-Routes
# ----------------------------------------------------------------------------#


# ------- Managers -------

@app.route('/managers', methods=['GET'])
@requires_auth('get:managers')
def get_managers(payload):
    managers = [{'id': '151515', 'email': 'manager1@email.com'},
                {'id': '262626', 'email': 'manager2@email.com'}]

    return jsonify({
        'success': True,
        'managers': managers
    })


@app.route('/managers/<string:manager_id>', methods=['GET'])
@requires_auth('get:managers-detail')
def get_manager(payload, manager_id):
    if manager_id is None:
        abort(404)

    manager = [{'id': manager_id, 'email': 'manager1@email.com'}, ]
    # method to get managers detail from auth0

    return jsonify({
        'success': True,
        'manager': manager,
    })


@app.route('/managers', methods=['POST'])
@requires_auth('post:managers')
def post_manager(payload):
    body = request.get_json()
    email = body.get('email')
    password = body.get('password')

    if email is None or password is None:
        abort(400)

    manager = [{'id': '989898', 'email': email}]
    # method to create manager

    return jsonify({
        'success': True,
        'manager': manager
    })


@app.route('/managers/<string:manager_id>', methods=['PATCH'])
@requires_auth('patch:managers')
def update_manager(payload, manager_id):
    body = request.get_json()
    email = body.get('email')
    password = body.get('password')

    # method to update manager
    manager = [{'id': manager_id, 'email': email}]

    if email is None or password is None:
        abort(400)

    return jsonify({
        'success': True,
        'manager': manager
    })


@app.route('/managers/<string:manager_id>', methods=['DELETE'])
@requires_auth('delete:managers')
def delete_manager(payload, manager_id):
    # method to delete manager

    return jsonify({
        'success': True,
        'manager': manager_id
    })


# # ------- Baristas -------

@app.route('/baristas', methods=['GET'])
@requires_auth('get:baristas')
def get_baristas(payload):
    baristas = [{'id': '151515', 'email': 'barista1@email.com'},
                {'id': '262626', 'email': 'barista2@email.com'}]

    return jsonify({
        'success': True,
        'baristas': baristas
    })


@app.route('/baristas/<string:barista_id>', methods=['GET'])
@requires_auth('get:baristas-detail')
def get_barista(payload, barista_id):
    if barista_id is None:
        abort(404)

    barista = [{'id': barista_id, 'email': 'barista1@email.com'}, ]
    # method to get baristas detail from auth0

    return jsonify({
        'success': True,
        'barista': barista,
    })


@app.route('/baristas', methods=['POST'])
@requires_auth('post:baristas')
def post_barista(payload):
    body = request.get_json()
    email = body.get('email')
    password = body.get('password')

    if email is None or password is None:
        abort(400)

    barista = [{'id': '989898', 'email': email}]
    # method to create barista

    return jsonify({
        'success': True,
        'barista': barista
    })


@app.route('/baristas/<string:barista_id>', methods=['PATCH'])
@requires_auth('patch:baristas')
def update_barista(payload, barista_id):
    body = request.get_json()
    email = body.get('email')
    password = body.get('password')

    # method to update barista
    barista = [{'id': barista_id, 'email': email}]

    if email is None or password is None:
        abort(400)

    return jsonify({
        'success': True,
        'barista': barista
    })


@app.route('/baristas/<string:barista_id>', methods=['DELETE'])
@requires_auth('delete:baristas')
def delete_barista(payload, barista_id):
    barista = [{'id': barista_id, 'email': 'DeletedBarista1@email.com'}]
    # method to delete barista

    return jsonify({
        'success': True,
        'barista': barista
    })


# ----------------------------------------------------------------------------#
# Errorhandler
# ----------------------------------------------------------------------------#
'''
Example error handling for unprocessable entity
'''


@app.errorhandler(422)
def unprocessable(error):
    return jsonify({
        "success": False,
        "error": 422,
        "message": "Unprocessable"
    }), 422


@app.errorhandler(400)
def bad_request(error):
    return jsonify({
        "success": False,
        "error": 400,
        "message": "Bad request",
    }), 400


@app.errorhandler(404)
def resource_not_found(error):
    return jsonify({
        "success": False,
        "error": 404,
        "message": "Resource not found",
    }), 404


@app.errorhandler(405)
def method_not_allowed(error):
    return jsonify({
        "success": False,
        "error": 405,
        "message": "Method not allowed",
    }), 405


@app.errorhandler(409)
def conflict(error):
    return jsonify({
        "success": False,
        "error": 409,
        "message": "Conflict",
    }), 409


@app.errorhandler(500)
def server_error(error):
    return jsonify({
        "success": False,
        "error": 500,
        "message": "Server error",
    }), 500


'''
@TODO implement error handler for AuthError
    error handler should conform to general task above
'''


@app.errorhandler(AuthError)
def auth_error(ex):
    return jsonify({
        "success": False,
        "error": ex.status_code,
        "message": ex.error['description']
    }), ex.status_code
