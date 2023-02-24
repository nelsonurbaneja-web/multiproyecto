import { useEffect, useState } from "react"

const IMAGES = [
  "https://icongr.am/devicon/android-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/apple-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/babel-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/react-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/css3-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/nodejs-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/html5-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/c-original.svg?size=128&color=currentColor",
].flatMap(image => [`a|${image}`, `b|${image}`]).sort(() => Math.random() - 0.5)

const ICON_SEARCH = "https://icongr.am/clarity/search.svg?size=128&color=currentColor"

export const Memory = () => {
  const [guessed, setGuessed] = useState<string[]>([])
  const [selected, setSelected] = useState<string[]>([])

  useEffect(() => {
    let timer: number | undefined 
    if(selected.length === 2) {
      if(selected[0].split("|")[1] === selected[1].split("|")[1]) {
        setGuessed(prevGuessed => [...prevGuessed, ...selected])
      }
     
      timer = setTimeout(() => {
        setSelected([])
      }, 500)
    }


    return () => clearTimeout(timer)
  }, [selected])

  useEffect(() => {
    if(guessed.length === IMAGES.length) {
      alert("you win")
      location.reload()
    }
  }, [guessed])

  return (
    <main className="memory-container">
      <ul>
        {IMAGES.map(image=> {
          const [, url] = image.split("|")
          return (
            <li key={image} onClick={() => selected.length < 2 ? setSelected(prevSelected => [...prevSelected, image]) : null}> 
            {
              (selected.includes(image) || guessed.includes(image))
              ? (<img alt="Imagen de tecnologia" src={url} />)
              : (<img alt="searxch default" src={ICON_SEARCH} />)
            }
            </li>  
          )
        })}
      </ul>
    </main>
  )
}
