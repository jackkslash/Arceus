import React, { useEffect, useState } from 'react'
import { useReadLocalStorage } from 'usehooks-ts'

const Embed = () => {

  const question: any = useReadLocalStorage("Question");
  const [isFull, setFull] = useState(Boolean);
  const q =
    <div className='flex justify-center items-center h-screen w-screen'>
      <div className='w-full rounded border-2 bg-gray-900/70 p-8 text-center text-2xl text-white shadow'>{question}</div>;
    </div>

  useEffect(() => {
    if (question == "") {
      setFull(false);
    } else {
      setFull(true);
    }
  }, [question])




  return (
    <>{isFull ? (q):(null)}</>
  )
}

export default Embed