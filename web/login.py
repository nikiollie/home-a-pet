from flask import Blueprint
from flask import jsonify
import pymongo
from flask import request, abort, Response
import json

client = pymongo.MongoClient("mongodb+srv://karthik:g9SgKP5CgQAC3j*@homeapet.kwmu5.mongodb.net/HomeAPet?retryWrites=true&w=majority")
db = client.petFinder
collection = db['userInfo']

pets_bp = Blueprint('pets', __name__)

@pets_bp.route('/pets/', methods=['GET'])
def get_all_pets():
    all_pets = collection.find()
    print(all_pets)
    response = [p for p in all_pets]
    print(response)
    return Response(json.dumps(response,default=str),mimetype="application/json")

@pets_bp.route('/pets', methods=['POST'])
def add_pets():
    if not request.json:
        abort(400)
    body = request.json
    collection.insert(body)
    return '', 200