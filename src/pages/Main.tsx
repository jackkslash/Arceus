import { useEffect, useState } from 'react'
import { QuestionWidget } from '../components/QuestionWidget';
import { Question } from '../types/types';
import tmi from 'tmi.js';
import { Link } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';

export const Main = () => {
  const [questions, setQuestions] = useState<String[]>([]);

  const userName:string = "mvotho"
  useEffect(() => {


    const client = new tmi.Client({
      channels: [userName]
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
      <NavigationBar userName={userName}/>
      <div className='flex justify-center'>
        <div className='flex flex-wrap h-64 w-1/2 text-3xl overflow-auto'>
          {questions?.map((q: any) => (
            // <p>{q.user}</p>
            //   <p>{q.question}</p>
            <QuestionWidget user={q.user} question={q.question}></QuestionWidget>
          ))}
        </div>
      </div>
    </>

  )
}

export default Main;

