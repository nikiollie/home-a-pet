from flask import Blueprint
from flask import jsonify
import pymongo
from flask import request, abort, Response
import json
from petpy import Petfinder

client = pymongo.MongoClient("mongodb+srv://karthik:g9SgKP5CgQAC3j*@homeapet.kwmu5.mongodb.net/HomeAPet?retryWrites=true&w=majority")
db = client.petInfo
collection = db['petDetails']

pets_bp = Blueprint('pets', __name__)

@pets_bp.route('/pets/', methods=['GET'])
def get_all_pets():
    all_pets = collection.find()
    response = [p for p in all_pets]
    return Response(all_pets, mimetype="application/json")

@pets_bp.route('/pets', methods=['POST'])
def add_pets():
    if not request.json:
        abort(400)
    body = request.json
    collection.insert(body)
    return '', 200