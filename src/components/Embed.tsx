import React from 'react'
import { useReadLocalStorage } from 'usehooks-ts'

const Embed = () => {

    const question:any = useReadLocalStorage("Question");

  return (
    <div>Embed

        <h1>{question}</h1>
    </div>

  )
}

export default Embed