import React, {useState} from 'react';
import Tweet from "./Tweet"
import "./App.css"

function App(){

  const [users, setUsers] = useState([
    {name : 'Ed', tweet: 'hello there'},
    {name : 'John', tweet: 'I am John Snow'},
    {name : 'Traversy', tweet: 'I am Awesome!'}
  ])

  return ( 
    <div className="app">
     {users.map(user => (
       <Tweet name={user.name} tweet={user.tweet}/>
     ))}
    </div>
  )
}

export default App;