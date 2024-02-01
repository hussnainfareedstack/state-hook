import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetching() {
  const [posts, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch( err => console.log("Error fetching data: " + err));

  }, []);

  return (
    <ul>
      {
        posts.map( x => <li key={x.id}> {x.title}</li>)
      }
    </ul>
  );
}

export default DataFetching;
