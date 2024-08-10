// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from "react"

export default function App(){
  const [input,setInput]=React.useState("")
 const[list,setList]=React.useState([])

 function handleChange(e){
  setInput(e.target.value)
 }
 function handleTask(){
  
  setList([...list,input])
  setInput("")
 } 
  
 function deleteItem(indexToDelete){
  const newItems=list.filter((_,i)=>i!==indexToDelete);
  setList(newItems)
 }


  return(
    <div className="App">
      <h2>todo app</h2>
      <div className="container">
      <div className="input-box">
        <input type="text" value={input}  onChange={(e)=>handleChange(e)}/><button  disabled={!input.trim()} onClick={handleTask}>add task</button>
      </div>
      <div className="list">
        <ul>
         {list.map((item,i)=><li>{item}  <button onClick={()=>deleteItem(i)}>delete</button></li>)}
        </ul>
      </div>
      </div>
    </div>
  )
}