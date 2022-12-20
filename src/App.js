import React, {useState} from 'react';
import './App.css';
import Tweet from './components/tweet';
import State from './components/useStat';
function App() {

  const [users, setUser] = useState([
    {id:"1",name: "Say Tong", message: "This is mt Tweet"},
    {id:"2",name: "Jonh Son", message: "This is my Couse"},
    {id:"3",name: "Mar Rio", message: "This is my React"},
    {id:"4",name: "Deeper", message: "This is my APP"}
  ])
  

  return (
    <>
    
    <div className='app'>

      {/* <h1>This is App Component</h1> */}

    {/* <Hello /> */}

    {/* <Tweet name="Say Tong" message="This is my Tweet" />
    <Tweet name=" Jon son" message="This is my Couse" />
    <Tweet name="Mar Rio"  message="This is my React" />
    <Tweet name="Deeper"  message="This is my App"/> */}

    {users.map(user => (
      <Tweet key={user.id} name={user.name} message={user.message} />
    ))}

  <br />
    
    </div>

    <div className="state">
      <State />
    </div>
    </>
  );
}

export default App;
