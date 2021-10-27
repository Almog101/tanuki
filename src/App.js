import Block from './elements/block';
import ResponsiveDrawer from './elements/drawer';
import { useState } from 'react';

function App() {
  const [blocks, setBlocks] = useState([])

  const [title, setTitle] = useState("")
  const [code, setCode] = useState("")

  function addBlock() {
    setBlocks([...blocks, {title:title, code:code}]) 
  }


  return (
    <div className="App">
      <ResponsiveDrawer blocks={blocks}/>
      <input placeholder="Enter block title" onChange={(e) => setTitle(e.target.value)}/>
      <br/>
      <textarea placeholder="Enter Code" onChange={(e) => setCode(e.target.value)}/>
      <br/>
      <button onClick={addBlock}>Add Block</button>
      <br/>

      {blocks.map(block => {
        return <Block title={block.title} code={block.code}/>
      })}
    </div>
  );
}

export default App;
