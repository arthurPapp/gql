import "reflect-metadata";

import path from "path";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./src/resolvers/UserResolver";

async function main() {

  const schema = await buildSchema({
    // resolver -> quem lida com as rotas 
    resolvers: [
      UserResolver,
    ],
    // emitSchemaFile -> onde eu quero salvar o schema gql
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  })

  //criando o servidor 
  const server = new ApolloServer({
    schema,
  })

  const { url } = await server.listen();

  console.log(`Server running on ${url}`);
}

main();