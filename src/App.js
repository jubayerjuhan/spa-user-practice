import './App.css';
import peopleData from './data/data.json'
import { useEffect, useState } from 'react';
import Userdetail from "./data/components/UserDetail/Userdetail";
function App() {

const [peoples, setpeoples] = useState([])

useEffect(() => {
  setpeoples(peopleData)
}, [])

const handleclickmanage =(people) =>{
    console.log('Added', people)
}
// console.log(peoples)

  return (
    <div className="App">
      {peoples.map((people) => <Userdetail people = {people} handleclickmanage = {handleclickmanage}></Userdetail>)}
    </div>
  );
}

export default App;
