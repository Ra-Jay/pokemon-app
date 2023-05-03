import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchPokemons = (limit) => {
  const [loading, setLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        setLoading(true);
        const offset = Math.floor(Math.random() * 1000);
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        setPokemonList(response.data.results);
        setTimeout(() => {
          setLoading(false);
        }, 3000);           // I intentionally added 3 seconds delay to emphasize the Spinner/Loader hehe
      } catch (error) {
        console.log(error);
      }
    };

    fetchPokemonList();
  }, []);

  return { loading, pokemonList, setPokemonList };
};

export default useFetchPokemons;