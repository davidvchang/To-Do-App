import app from './app.js'
import {connection} from './bd.js'

connection()

async function main() {
    await app.listen(app.get("port"))
    console.log("Server on port: " + app.get("port"))
}

main()