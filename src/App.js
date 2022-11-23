import axios from "axios";
import React, { useEffect, useContext } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const fetchFacts = async () => {
      let data
      try {
        await axios.get('https://catfact.ninja/fact').then(res => {
          return res.data.fact
        })
      } catch (err) {
        data = { success: false, message: 'There was an error with provided endpoint!', error: err }
      }
      return data;
    }
    fetchFacts()
  }, [])
  return <div className="App"></div>;
}

export default App;
