import { useCallback, useEffect, useState } from 'react';
import './App.css';
function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const [copy,setCopy]=useState('copy')
  const [style,setStyle]=useState({background:'blue'})

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+"

    for(let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = () => {

    window.navigator.clipboard.writeText(password)
    setTimeout(() => {
      setCopy('copied')
      setStyle({background:"green"})
      setTimeout(() => {
        setStyle({background:'blue'})
        setCopy(copy)
      }, 250);
    }, 250);
    
  }


  useEffect(()=>{
    generatePassword()
  }, [length, numberAllowed, charAllowed])
  return (
    <div className="App">
      <h1>Password Generator</h1>
      <div className="passwordGenerator">
        <div className='inputbox'>
          <input type="text"
          value={password}/>
          <button style={style}
        onClick={copyPasswordToClipboard}
        className='submitButton'
        >{copy}</button>

        </div>
        <div className='constraints'>
          <div>
                <label htmlFor='range'>Length:{length}</label>
                <input type="range"min={6}
                max={100}id="range"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                />
          </div>
          <div>
                <label htmlFor='numbers'>Numbers</label>
                <input type="checkbox"
                id="numbers"
                defaultChecked={numberAllowed}
                onChange={() => {
                  setNumberAllowed((prev) => !prev)
                }}
                />
          </div>
          <div>
                <label htmlFor='chars'>Characters</label>
                <input type="checkbox"
                id="chars"
                defaultChecked={charAllowed}
                onChange={() => {
                  setCharAllowed((prev) => !prev)
                }}
                />
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
