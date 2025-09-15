// Import des modules nécessaires
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { ObjectType, Field, ID, InputType } from "type-graphql";

//  TABLE EN BASE
@Entity()
@ObjectType() 
export class Country extends BaseEntity {
  // ID 
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id!: number;

  // Code pays
  @Column({ unique: true, length: 2 }) 
  @Field()
  code!: string;

  // Nom du pays 
  @Column()
  @Field()
  name!: string;

  // Emoji du pays 
  @Column()
  @Field()
  emoji!: string;

  // Continent du pays (Europe, Asie, etc.)
  @Column()
  @Field()
  continent!: string;
}

// DONNÉES D'ENTRÉE POUR LES MUTATIONS
@InputType()
export class CreateCountryInput {
  @Field()
  code!: string;

  @Field()
  name!: string;

  @Field()
  emoji!: string;

  @Field()
  continent!: string;
}
