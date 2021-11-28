import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
  const friendsName = ['kadir','shayan','saifan', "rizwan"];
  const products =[
    {name: 'audi', color: "black", price: 200000},
    {name: 'BMW', color: "BLUE", price: 2100000},
    {name: 'mercedes Benz', color: "gray", price: 800000},
    {name: 'Benz', color: "gray", price: 800000},

  ]
  const productName = products.map(name=> name.name);
  console.log(productName)
  
  return (
    <div className="App">
      <header className="App-header" style={{color:'white', border: '1px solid yellow'}}>

        <h4>React core-concepts...!!!</h4>
        <Counter></Counter>
        <Users></Users>

        {/* <ul>
           {
              friendsName.map(name => <li>{name}</li>)
           }
           
        </ul>
        {
             products.map(product => <Product product={product} shop={"dhaka"}></Product>)
           } */}
        <Person></Person>
        {/* <Users name={friendsName[0]} ></Users> */}
        <Product product = {products[0]}></Product>
        <Product product = {products[1]}></Product>

        
      </header>
    </div>
  );
}
function Users(){
  const [users, setUsers] = useState([]);
  
  useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(data => setUsers(data));
  }, [])

  return(
    <div>
      <h1>dyanamic:{users.length}</h1>
      <ul>
        
        {
          users.map(user=><li>{user.name}</li>)
        }
        
        {
          users.map(user=><li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}
function Counter(){
  const [count,setCount] = useState(10)
  const countIncrease = ()=>{
    // const newCount = count + 1;
    setCount(count+1)
  }
  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onMouseOver={()=> setCount(count-1)}>Decrease</button>
      {console.log('counter', count)}
    </div>
  )
}
function Product(props){
  console.log("user", props);
  const {name, price, color} = props.product;
  console.log(name, price)
  
  
  return(
    <div style={{border: "1px solid black", margin:'10px', padding: '10px'}}>
      <h6> name: {name} </h6>
      <p>price: {price} </p>
      <p>color: {color}</p>
      <p>Shop: {props.shop}</p>
    </div>
  )
}
function Person(){
 
  return (
    <div  >
      <h1 >Hello baby</h1>
      <h4>hello</h4>
      <h6>okay</h6>
    </div>
  
  )
}

export default App;
