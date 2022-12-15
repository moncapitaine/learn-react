export interface Pokemon {
  name: string
  url: string
}

export interface PokemonDetails {
  sprites: Record<string, string>
}

/*

const x: Record<string, string> = {
  'hallo': 'ja',
  'unfreundlich': 'nein'
}

console.log(x['hallo']) // 'ja'
console.log(x['gibtsnix']) // undefined

*/