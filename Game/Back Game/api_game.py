from flask import Flask, jsonify, request
import mysql.connector

conexao = mysql.connector.connect(
    host = "127.0.0.1",
    user = "root",
    password = "testpwd", #Mudar a senha futuramente
    database = "bd_player", 
    port = "33060"
)
cursor = conexao.cursor()

app = Flask(__name__)

# consulta todos
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


app.run(port=5000, host='localhost', debug=True)
cursor.close()
conexao.close()