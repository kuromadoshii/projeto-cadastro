const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express()
const port = 3000


app.use(bodyParser.json())
app.use("/", require("./routes/usersApi"))
app.use(cors())

app.listen(port, () => console.log(`server running on port ${port}!`))