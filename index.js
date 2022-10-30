const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  scalar Date

  type Usuario {
    id: ID
    nome: String!
    email: String!
    idade: Int
    salario: Float
    vip: Boolean
  }

  #Pontos de entrada da sua API
  type Query {
    ola: String!
    horaAtual: Date!
    usuarioLogado: Usuario
  }
`;

const date = new Date();
const hourComplete = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

const resolvers = {
  Query: {
    ola() {
      return 'Bom dia';
    },
    horaAtual() {
      return hourComplete;
    },
    usuarioLogado() {
      return {
        id: 1,
        nome: 'Weslley Ferraz',
        email: 'weslleyhenrique800@gmail.com',
        idade: 26,
        salario: 2.45,
        vip: true,
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`);
});
