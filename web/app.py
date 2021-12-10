from flask import Flask
from pets import pets_bp
# from batch import batch_bp
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.register_blueprint(pets_bp, url_prefix='/pets/')
# app.register_blueprint(batch_bp, url_prefix='/batch/')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3333)