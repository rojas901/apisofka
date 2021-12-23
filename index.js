import conectarBD from "./conexiondb/db.js";

const main = async ()=>{
    return await conectarBD();
}

main();