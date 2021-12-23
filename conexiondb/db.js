import mongoose from "mongoose";
// const { connect } = require('mongoose');

const conectarBD = async () => {
  return await mongoose.connect(
      'mongodb+srv://user:usersofka@micluster.tzz36.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    )
    .then(() => {
      console.log('Conexion exitosa');
    })
    .catch((e) => {
      console.error('Error conectando a la bd', e);
    });
};

export default conectarBD;
