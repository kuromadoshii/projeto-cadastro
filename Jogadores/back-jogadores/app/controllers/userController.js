const { connectDB } = require('../db/dbConnection')

async function allPlayers(req, res){
    const conn = await connectDB();
    const [rows] = await conn.query('SELECT * FROM players;');
    console.log("Query successfully!")
    return res.json(rows)
}

async function playerById(req, res){
    const conn = await connectDB()
    const idStr = req.params.id
    const [rows] = await conn.query(`SELECT * FROM players WHERE id_player = ${idStr};`)
    console.log(`Success, query id = ${idStr}`)
    return res.json(rows)
}
// https://www.schoolofnet.com/forum/topico/nodejs-body-parser-esta-velho-904
// https://medium.com/@febatista107/como-converter-os-dados-de-uma-requisi%C3%A7%C3%A3o-com-o-body-parser-2b5b93100f00

async function addPlayer(req, res){
    const conn = await connectDB()
    const id_game = req.body.id_game
    const playing = req.body.playing
    await conn.query(`INSERT INTO players (id_game, playing) VALUES ('${id_game}', '${playing}')`)
    console.log("Success, added: \n", req.body)
    return res.json(req.body)
}

async function delPlayer(req, res){
    const conn = await connectDB()
    await conn.query(`DELETE FROM players WHERE id_player = ${req.params.id};`)
    console.log("Deleted")
    return res.status(200).send("Deleted")
}
// tesar update !!!
async function updatePlayer(req, res){
    const conn = await connectDB()
    const id_game = req.body.id_game
    const playing = req.body.playing
    await conn.query(`UPDATE players SET id_game = '${id_game}', playing = '${playing}' WHERE id_player = ${req.params.id}`)
    return res.json(req.body)
}
module.exports = { allPlayers, playerById, addPlayer, delPlayer, updatePlayer }