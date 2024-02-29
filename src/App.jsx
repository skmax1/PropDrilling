import { useContext, useState } from 'react'
import { CountContext } from './context';

//the only use of context api is that it only it makes synatz look cleaner and get ridof prop drilling
//propdrilling is passsing the props to child via a component whgich the component doest use 
//it doesnt increae the performance by eliminating unessaary re-render
function App() {
  const [count, setCount] = useState(0);

  return <div>
    <CountContext.Provider value={count}>
     <Count setCount = {setCount}/>
    </CountContext.Provider>
  </div>

}

function Count({setCount}){
console.log('count re-render')
  return <div>
    <CountRenderer />
    <Buttons setCount={setCount}/>
  </div>

}

function CountRenderer(){
  const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons({setCount}){
  const count = useContext(CountContext);
  return <div>
    <button onClick={()=>{
      setCount(count+1);

    }}>Increase the count

    </button>

    <button onClick={()=>{
      setCount(count-1);
    }}>Decrease the count</button>
  </div>

}

export default App
