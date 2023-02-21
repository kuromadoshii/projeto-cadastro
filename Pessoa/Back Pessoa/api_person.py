from flask import Flask, jsonify, request
import mysql.connector

conexao = mysql.connector.connect(
    host = "localhost",
    user = "root",
    password = "testpwd",
    database = "bd_people", 
    port = "3306"
)
cursor = conexao.cursor()

app = Flask(__name__)

# consulta todos
@app.route('/people', methods=['GET'])
def get_people():
    cursor.execute("SELECT * FROM people")
    people = cursor.fetchall()
    return jsonify(people)

# consulta por id
@app.route("/people/<int:id>", methods=["GET"])
def get_person(id):
    cursor.execute(f"SELECT * FROM people WHERE (id = {id})")
    person = cursor.fetchall()
    return jsonify(person)

# criar
@app.route("/people", methods=["POST"])
def insert_people():
    new_person = request.get_json()
    name = new_person['name']
    date_birth = new_person['date_birth']
    cpf = new_person['cpf']
    rg = new_person['rg']
    address = new_person['address']
    cursor.execute(f"INSERT INTO people (name, date_birth, cpf, rg, address) VALUES \
                   ('{name}', '{date_birth}', {cpf}, {rg}, '{address}')")
    conexao.commit()
    return jsonify(new_person)


# editar por id
@app.route("/people/<int:id>", methods=["PUT"])
def edit_person_on_id(id):
    updated = request.get_json()
    name = updated['name']
    date_birth = updated['date_birth']
    cpf = updated['cpf']
    rg = updated['rg']
    address = updated['address']
    cursor.execute(f"UPDATE people SET name = '{name}', date_birth = '{date_birth}', \
                    cpf = '{cpf}', rg = '{rg}', address = '{address}' WHERE id = {id}")
    conexao.commit()
    return jsonify(updated)

# excluir 
@app.route("/people/<int:id>", methods=["DELETE"])
def excluir_livro(id):
    cursor.execute(f"DELETE FROM people WHERE id = {id}")
    return jsonify('200 OK')


app.run(port=5000, host='localhost', debug=True)
cursor.close()
conexao.close()