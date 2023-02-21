import mysql.connector

conexao = mysql.connector.connect(
    host = "localhost",
    user = "root",
    password = "283878630",
    database = "bd_person"
)

cursor = conexao.cursor()

# CRUD
nome_produto = "maconha"
comando = f'DELETE FROM vendas WHERE nome_produto = "{nome_produto}"'
cursor.execute(comando)
conexao.commit() # edita o banco de dados


# CREATE 

# nome_produto = "chocolate"
# valor = 15
# comando = f'INSERT INTO vendas (nome_produto, valor) VALUES ("{nome_produto}", {valor})'
# cursor.execute(comando)
# conexao.commit()

# READ

# comando = 'SELECT * FROM vendas'
# cursor.execute(comando)
# resultado = cursor.fetchall()
# print(resultado)

# UPDATE

# valor = 20
# nome_produto = "maconha"
# comando = f'UPDATE vendas SET valor = {valor} WHERE nome_produto = "{nome_produto}"'
# cursor.execute(comando)
# conexao.commit() # edita o banco de dados

# DELETE



cursor.close()
conexao.close()