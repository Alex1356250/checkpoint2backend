import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import { initializeDatabase } from "./config/database";
import { CountryResolver } from "./resolvers/CountryResolver";

async function main() {
  // Initialiser la base de données
  await initializeDatabase();

  // Construire le schéma GraphQL
  const schema = await buildSchema({
    resolvers: [CountryResolver],
    validate: false,
  });

  // Créer le serveur Apollo
  const server = new ApolloServer({
    schema,
  });

  // Démarrer le serveur
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀 Serveur GraphQL démarré sur ${url}`);
}

main().catch((error) => {
  console.error("❌ Erreur lors du démarrage du serveur:", error);
  process.exit(1);
});
