import { useState } from "react"

const CallMyNamePage = () => {
  const [person, setPerson] = useState<{ name: string } | undefined>()
  const loadName = async () => {
    fetch('/api/hello').then(async (response) => {
      const json = await response.json()
      console.log(json)
      setPerson(json)
    })
  }

  return <div>
    Call my name
    <button onClick={() => loadName()}>Call API</button>
    ...
    { person && <div>Hi, {person?.name}</div>}
  </div>
}

export default CallMyNamePage