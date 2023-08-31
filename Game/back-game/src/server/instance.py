from flask import Flask
from flask_restx import Api


class Server():
    def __init__(self, ):
        self.app = Flask(__name__)
        self.api = Api(self.app, 
            version='1.0',
            title='Api jogos',
            description='Api dos jogos do sistema',
            doc='/docs/python'
        )
    def run(self, ):
        self.app.run(debug=True, port=5000, host='localhost')

server = Server()