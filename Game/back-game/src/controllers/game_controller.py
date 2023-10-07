from flask import Flask, jsonify, request
from flask_restx import Api
#from bd.bd_connect import cursor, conexao
from src.server.instance import Server
import mysql.connector

app, api = Server.app, Server.api

@app.route('/game', methods=['GET'])
def get_game():
    cursor.execute("SELECT * FROM games")
    game = cursor.fetchall()
    return jsonify(game)

# consulta por id
@app.route("/game/<int:id>", methods=["GET"])
def get_game_id(id):
    cursor.execute(f"SELECT * FROM games WHERE (id = {id})")
    game = cursor.fetchall()
    return jsonify(game)

# criar
@app.route("/game", methods=["POST"])
def insert_game():
    new_game = request.get_json()
    name = new_game['name']
    launched = new_game['launched']
    description = new_game['description']
    cursor.execute(f"INSERT INTO games (name, launched, description) VALUES ('{name}', '{launched}', '{description}')")
    conexao.commit()
    return jsonify(new_game)


# editar por id
@app.route("/game/<int:id>", methods=["PUT"])
def edit_game_on_id(id):
    updated = request.get_json()
    name = updated['name']
    launched = updated['launched']
    description = updated['description']
    cursor.execute(f"UPDATE games SET name = '{name}', launched = '{launched}', description = '{description}' WHERE id = {id}")
    conexao.commit()
    return jsonify(updated)

# excluir 
@app.route("/game/<int:id>", methods=["DELETE"])
def excluir_livro(id):
    cursor.execute(f"DELETE FROM games WHERE id = {id}")
    return jsonify('200 OK')

cursor.close()
conexao.close()