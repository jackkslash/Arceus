import { useEffect, useState, useRef } from 'react'
import { QuestionWidget } from '../components/QuestionWidget';
import { Question } from '../types/types';
import tmi from 'tmi.js';
import NavigationBar from '../components/NavigationBar';
import { useLocalStorage, useReadLocalStorage } from 'usehooks-ts';

export const QA = () => {
  const [questions, setQuestions] = useState<String[]>([]);
  //const [username, setUsername] = useState(String);

  const username: any = useReadLocalStorage("User");
  const inputRef = useRef(String);
  const [local, setLocal] = useLocalStorage("Question", "");

  const clearQs = () => {
    setQuestions([]);
  }

  useEffect(() => {

    const client = new tmi.Client({
      channels: [username]
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

  })

  const togglePin = () => {
    setLocal("");

  }
    return (
      <>
        <NavigationBar />

        <div className='flex justify-center'>
          <div className='flex flex-wrap h-64 w-1/2 text-3xl overflow-auto'>

            {questions?.map((q: any) => (
              // <p>{q.user}</p>
              //   <p>{q.question}</p>
              <QuestionWidget user={q.user} question={q.question}></QuestionWidget>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="btn btn-sm ml-2" onClick={clearQs}>Clear Questions</button>
        </div>
        <div className="flex justify-center items-center mt-2">
          <button className="btn btn-sm ml-2" onClick={togglePin}>Clear Pin</button>
        </div>
      </>

    )
  }

export default QA;
