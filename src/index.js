import app from "./app.js"
import "./db.js"

const puerto = app.get('port')

app.listen(puerto, ()=>{
    console.log("Servidor en puerto: " + puerto)
})