import { useState } from 'react'
import reactLogo from './assets/react.svg'
import tmi from 'tmi.js';

function App() {



  const client = new tmi.Client({
    channels: [ 'mvotho' ]
  });
  
  client.connect();
  
  client.on('message', (channel, tags, message, self) => {
    // "Alca: Hello, World!"
    if(self || !message.startsWith('!q')) return;

      console.log(`${tags['display-name']}: ${message}`);
    
  });
      


  return (
    <div className='text-3xl font-bold underline'>
       Hello Word
    </div>
  )
}

export default App
