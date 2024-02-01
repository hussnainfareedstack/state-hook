import React, { useEffect, useState } from 'react'
import axios from 'axios'

const tableStyle = {
  border: "1px solid red"
}

function DataFetchingTwo() {

  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const [btnId, setBtnId]= useState(1)

  // useEffect(()=>{
  //   axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //   .then(res=> {setPost(res.data); console.log(res.data)})
  //   .catch(err => console.log("Error fetching data: "+err))
  // },[id])
  
  // call useEffect with button click or tell useEffect render when button id changed
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${btnId}`)
    .then(res=> {setPost(res.data); console.log(res.data)})
    .catch(err => console.log("Error fetching data: "+err))
  },[btnId])

  return (
    <div>
      <input type='text' value={id} onChange={(e)=> setId(e.target.value)}/>
      <button onClick={()=> setBtnId(id)}>Get Data</button>
      
      <table style={tableStyle}>
        <tbody >
        <tr>
          <td style={tableStyle}> {post.userId} </td>
          <td style={tableStyle}> {post.title} </td>
          <td style={tableStyle}> {post.body} </td>
        </tr></tbody>
      </table>
        
    </div>
  )
}

export default DataFetchingTwo