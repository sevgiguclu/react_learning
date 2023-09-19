import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(response.data);
      } catch (error) {
        console.error('Veri çekerken hata oluştu:', error);
      }
    };

    getCountries();
  }, []);

  console.log("countries: ", countries);

  return (
    <div className="App">
      {
        countries.map((country, i) => (
          <div key={i}> {country.name.common} </div>
        ))
      }
    </div>
  );
}

export default App;
