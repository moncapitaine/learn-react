import { useEffect, useState } from "react"
import { PokemonDetails } from "../domain/pokemon"

const fetchDetails = async (url: string) => {
  const response = await fetch(url)
  const data = await response.json()
  return data as PokemonDetails
}

export const usePokemonDetails = (detailsUrl: string) => {

  const [imageSrc, setImageSrc] = useState<string | undefined>()
  const [sprites, setSprites] = useState<Record<string, string>>({})

  useEffect(() => {
    fetchDetails(detailsUrl).then((details) => {
      setSprites(details.sprites)
      const spriteKeys = Object.keys(details.sprites)
      if (spriteKeys.length < 1) {
        setImageSrc('/logo.svg')
      } else {
        setImageSrc(details.sprites[spriteKeys[0]])
      }
    })
  }, [detailsUrl])

  return  { sprites, imageSrc }
}