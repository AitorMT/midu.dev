type Character = 'Ironman' | 'Thor' | 'Loki' | 'Hulk' | 'Thanos'
type Villain = 'Loki' | 'Thanos'
type Avenger = Exclude<Character, Villain>

function soloAvengers(personajes: Character[]): Avenger[] {
  return personajes.filter((p) => p !== 'Loki' && p !== 'Thanos')
}