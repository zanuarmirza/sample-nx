export interface Species {
  id: string,
  name: string,
  classification: string
  homeworld: {
    name?: string
  },
  designation: string
  averageHeight: number,
  averageLifespan: number,
  eyeColors: string[]
  hairColors: string[]
  skinColors: string[]
  language: string
}

export interface ListSpecies {
  totalCount: number,
  species: Pick<Species, 'id' | 'name' | 'classification' | 'homeworld' | 'designation'>[]
}
