import { useEffect, useState } from 'react';
import './App.css';
import peopleData from './data/data.json'
import ShowAllUsers from "./Components/ShowAllUsers/ShowAllUsers";
import CartInformation from "./Components/CartInformation/CartInformation";

function App() {
  const [data, setData] = useState([])
  const [user, setUser] = useState([])

  useEffect(() => {
      setData(peopleData)
  },[])

  const handleClick = (newuser) =>{
    console.log('This Is added', newuser)
    const totalAdded = [...user, newuser]
    setUser(totalAdded)
  }

  console.log(user)

  return (
    <div className="App">
      <div className = "showUser">
        <ShowAllUsers users = {data} handleClick = {handleClick}></ShowAllUsers>
      </div>

      <div className = "userCart">
        <CartInformation user = {user}></CartInformation>
      </div>
    </div>
  );
}

export default App;
