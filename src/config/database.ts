// Import des modules nécessaires
import "reflect-metadata";
import { DataSource } from "typeorm";

// Configuration de la base de données SQLite
export const AppDataSource = new DataSource({
  type: "sqlite", // Type de base de données
  database: "database/database.sqlite", // Fichier dans le dossier database/
  synchronize: true, // Crée/met à jour automatiquement les tables (ATTENTION: à désactiver en production)
  logging: true, // Affiche les requêtes SQL dans la console
  entities: ["src/entities/*.ts"], // Où chercher les entités (modèles de données)
});

// Fonction pour se connecter à la base de données
export async function initializeDatabase() {
  try {
    // Tentative de connexion
    await AppDataSource.initialize();
    console.info("✅ Base de données SQLite connectée avec succès!");
    return AppDataSource;
  } catch (error) {
    // En cas d'erreur, on l'affiche et on arrête le programme
    console.error(
      "❌ Erreur lors de la connexion à la base de données:",
      error
    );
    throw error;
  }
}
