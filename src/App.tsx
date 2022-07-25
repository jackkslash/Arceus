import { useEffect, useState } from 'react';
import tmi from 'tmi.js';
import { QuestionWidget } from './components/QuestionWidget';
import { Question } from './types/types'



function App() {

  const [questions, setQuestions] = useState<String[]>([]);

  useEffect(() => {

    const client = new tmi.Client({
      channels: ['mvotho']
    });

    client.connect();

    client.on('message', (channel, tags, message, self) => {
      if (self || !message.startsWith('!q')) return;

      //console.log(`${tags['display-name']}: ${message}`);
      const userId = tags['username'];
      const userMessage = message;
      if (message !== null) {
        const uQuestion: Question = {
          user: userId!,
          question: userMessage
        }

        setQuestions((prevState: any) => [...prevState, uQuestion]);
      }


    });

  }, [])

  return (
    <>
    <div className='h-64 text-3xl overflow-y-auto'>
      {questions?.map((q:any) => (
        // <p>{q.user}</p>
        //   <p>{q.question}</p>
        <QuestionWidget user={q.user} question={q.question}></QuestionWidget>
      ))}
    </div>
  </>
    
  )
}

export default App
