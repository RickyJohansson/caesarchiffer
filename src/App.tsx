import './App.css';
import { useState } from 'react';

function App() {

  const [inputValue, setInputValue] = useState<string>('');
  const [decodedMsg, setDecodedMsg] = useState<string>('');
  const [ valid, setValid ] = useState<boolean>(false);

  const validation = (e: any) => {
    ((e.keyCode > 64 && e.keyCode < 91) || e.keyCode == 32 || e.keyCode == 8) ? setValid(true) : setValid(false);
  }

  const decode = (inputValue: string) => {
    let tempString: string = '';
    for (let i = 0; i < inputValue.length; i++) {
      if ((inputValue.charCodeAt(i) < 91 && inputValue.charCodeAt(i) > 68) || ( inputValue.charCodeAt(i) > 100 && inputValue.charCodeAt(i) < 123)) {
        tempString += String.fromCharCode(inputValue.charCodeAt(i) - 4);
      } else if ((inputValue.charCodeAt(i) >= 65 && inputValue.charCodeAt(i) <= 68) || ( inputValue.charCodeAt(i) >= 97 && inputValue.charCodeAt(i) <= 100) ) {
        tempString += String.fromCharCode( inputValue.charCodeAt(i) + 22 );
      } else if (inputValue.charCodeAt(i) == 32) {
        tempString += ' ';
      }
    }
    setDecodedMsg(tempString);
  };

  return (
    <>
      <div className="app">
        <h1>Caesarchiffer</h1>
        <p>Decoding from [a-z] - [A-Z], enter the message you want to decode below:</p>
        <input type="text" value={inputValue} onChange={ (e) => { if (valid) {setInputValue(e.target.value)}}} onKeyDown={(e) => validation(e)}/>
        <button onClick={() => decode(inputValue)}>DECODE</button>
        <p>Decoded Message: { decodedMsg }</p>
      </div>
    </>
  )
}

export default App
