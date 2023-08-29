import mysql.connector

conexao = mysql.connector.connect(
    host = "127.0.0.1",
    user = "root",
    password = "testpwd", #Mudar a senha futuramente
    database = "bd_player", 
    port = "33060"
)
cursor = conexao.cursor()