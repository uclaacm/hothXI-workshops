from flask import Flask, request
from flask_restful import Api, Resource, abort, reqparse
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
CORS(app)

PLANTS = {
    1: {'name': 'Ginko', 'type': 'tree', 'age': 3.0},
    2: {'name': 'Kelp', 'type': 'seaweed', 'age': 1.2},
    3: {'name': 'Cactus', 'type': 'succulent', 'age': 5.0},
    4: {'name': 'Fern', 'type': 'fern', 'age': 2.0},
}

parser = reqparse.RequestParser()
parser.add_argument('name')
parser.add_argument('type')
parser.add_argument('age', type=float)

def abort_if_dne(plant_id):
    if plant_id not in PLANTS:
        abort(404, message=f"Plant {plant_id} doesn't exist")

class Plant(Resource):
    def get(self, plant_id):
        abort_if_dne(plant_id)
        return PLANTS[plant_id]
    
    def delete(self, plant_id):
        abort_if_dne(plant_id)
        del PLANTS[plant_id]
        return '', 204
    
    def put(self, plant_id):
        args = parser.parse_args()
        if plant_id not in PLANTS:
            PLANTS[plant_id] = {}
        plant = {'name': args['name'], 'type': args['type'], 'age': args['age']}
        PLANTS[plant_id].update(plant)
        return PLANTS[plant_id], 201
    
class PlantList(Resource):
    def get(self):
        return list(PLANTS.values()), 200
    
    def post(self):
        args = parser.parse_args()
        plant_id = max(PLANTS.keys()) + 1
        PLANTS[plant_id] = {'name': args['name'], 'type': args['type'], 'age': args['age']}
        return PLANTS[plant_id], 201
    
api.add_resource(Plant, '/plants/<int:plant_id>')
api.add_resource(PlantList, '/plants')

if __name__ == '__main__':
    app.run(debug=True)