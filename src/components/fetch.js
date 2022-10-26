import React,{useEffect,useState} from 'react';
// import axios from 'axios';
const Fetch = () => {
  const [data,setStateData]=useState([]);
  // useEffect(()=>{
  //   axios.get("https://jsonplaceholder.typicode.com/todos").then(
  //     res=>setStateData(res.data)
  //   )
  // },[])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos").then(
      res=>res.json()
    ).then(json=>setStateData(json))
  },[])
  return (
    <div>
      {
        data.map((item,id)=>
        <li key={id}>{item.title}</li>)
      }
    </div>
  )
}

export default Fetch;
