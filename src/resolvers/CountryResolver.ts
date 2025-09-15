import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Country, CreateCountryInput } from "../entities/Country";

@Resolver(Country)
export class CountryResolver {
  // Query renvoyant la liste de tous les pays avec attributs (code, nom, emoji, continent):
  @Query(() => [Country])
  async countries(): Promise<Country[]> {
    return await Country.find();
  }

  // Query prenant en paramètre le code du pays et renvoyant le pays correspondant:
  @Query(() => Country, { nullable: true })
  async country(@Arg("code") code: string): Promise<Country | null> {
    return await Country.findOne({ where: { code } });
  }

  // Query pour récupérer tous les pays d'un continent:
  @Query(() => [Country])
  async countriesByContinent(@Arg("continent") continent: string): Promise<Country[]> {
    return await Country.find({ where: { continent } });
  }

  // Mutation pour créer UN nouveau pays en base avec ses attributs:
  @Mutation(() => Country)
  async createCountry(@Arg("code") code: string, @Arg("name") name: string, @Arg("emoji") emoji: string, @Arg("continent") continent: string): Promise<Country> {
    
    const country = Country.create({

      code: code.toUpperCase(),
      name: name,
      emoji: emoji,
      continent: continent,

    });

    return await country.save();
  }

  // Mutation pour créer PLUSIEURS nouveaux pays en base avec leurs attributs
  @Mutation(() => [Country])
  async createCountries (@Arg("countries", () => [CreateCountryInput]) countries: CreateCountryInput[]): Promise<Country[]> {
    
    const createdCountries: Country[] = [];

    for (const countryData of countries) {

      const country = Country.create({

        code: countryData.code.toUpperCase(),
        name: countryData.name,
        emoji: countryData.emoji,
        continent: countryData.continent,

      });

      const savedCountry = await country.save();

      createdCountries.push(savedCountry);

    }

    return createdCountries;
  }
}
