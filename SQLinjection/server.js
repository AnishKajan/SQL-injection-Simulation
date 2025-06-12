const {Client} = require('pg')
const app = require("express")()
const client = new Client({
    user: "postgres",
    password: "postgres",
    host: "anishmac",
    port: 5432,
    database: "anishdb"
})
client.connect();

app.get("/", async (req, res) => {
    let results = {}
    results.rows = []
    try {
        const id = req.query.id;

        results = await client.query(`select * from profiles where id = ${id}`) //query
        //Example to protect, pass the password as a string in order to retrieve the passwords:
        //results = await client.query(`select * from profiles where id = $1, [id]`) 

    }
    catch(e) {
        console.log("Error")
    }
    finally {
        res.setHeader("content-type", "application/json")
        res.send(JSON.stringify(results.rows))

    }


})