const resolvers = {
    Query:{
        Jugadores: async (parent, args) => {
            return [
                {
                    nombre: 'Carlos',
                    puntaje: 10,
                    fecha: '2021-05-04'
                },
                {
                    nombre: 'Maria',
                    puntaje: 20,
                    fecha: '2021-05-06'
                }            
            ]
        }
    }
};

export {resolvers};