# checkpoint2backend
Checkpoint n°2 CDA JS - Backend

# Lancer le projet: 

npm run dev

# Base de données à saisir dans Apollo Server dans une seule mutation:

mutation CreateAllCountries {
  createCountries(
        countries: [
        {
            code: "US"
            name: "États-Unis"
            emoji: "🇺🇸"
            continent: "Amérique"
        },
        {
            code: "CA"
            name: "Canada"
            emoji: "🇨🇦"
            continent: "Amérique"
        },
        {
            code: "FR"
            name: "France"
            emoji: "🇫🇷"
            continent: "Europe"
        },
        {
            code: "DE"
            name: "Allemagne"
            emoji: "🇩🇪"
            continent: "Europe"
        },
        {
            code: "IT"
            name: "Italie"
            emoji: "🇮🇹"
            continent: "Europe"
        },
        {
            code: "JP"
            name: "Japon"
            emoji: "🇯🇵"
            continent: "Asie"
        },
        {
            code: "CN"
            name: "Chine"
            emoji: "🇨🇳"
            continent: "Asie"
        },
        {
            code: "NG"
            name: "Nigeria"
            emoji: "🇳🇬"
            continent: "Afrique"
        },
        {
            code: "EG"
            name: "Égypte"
            emoji: "🇪🇬"
            continent: "Afrique"
        },
        {
            code: "ZA"
            name: "Afrique du Sud"
            emoji: "🇿🇦"
            continent: "Afrique"
        }
        ]
    ) {
        id
        code
        name
        emoji
        continent
    }
    }