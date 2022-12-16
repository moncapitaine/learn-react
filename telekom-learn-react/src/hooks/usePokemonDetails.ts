import { useEffect, useState } from "react"
interface PokemonApiDetails {
  sprites: Record<string, string | null>
}
const fetchDetailsAsync = async (detailsUrl: string) => {
  const response = await fetch(detailsUrl)
  return await response.json() as PokemonApiDetails
}

export const usePokemonDetails = (detailsUrl: string) => {
  const [imageSrc, setImageSrc] = useState<string | undefined>()
  const [sprites, setSprites] = useState<Record<string, string | null>>({})

  useEffect(() => {
    fetchDetailsAsync(detailsUrl).then((apiDetails) => {
      setSprites(apiDetails.sprites)
      setImageSrc(apiDetails.sprites['front_default'] ?? '/logo.svg')
    })
  }, [detailsUrl])

  return  { sprites, imageSrc }
}