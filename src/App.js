import axios from "axios";
import React, { useEffect, useContext } from "react";
import "./App.css";
import Facts from "./components/factsComponent";
import GlobalContext from "./context/GlobalContext";

function App() {
  const { updateFacts } = useContext(GlobalContext)
  useEffect(() => {
    const fetchFacts = async () => {
      let data
      try {
        await axios.get('https://catfact.ninja/fact').then(res => {
          updateFacts(res.data.fact)
        })
      } catch (err) {
        data = { success: false, message: 'There was an error with provided endpoint!', error: err }
      }
      return data;
    }
    fetchFacts()
  }, [])

  return <div className="App">
    <Facts />
  </div>;
}

export default App;
