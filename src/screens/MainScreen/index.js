import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { 
  Container,
  Tile, 
  Text, 
  Spinner, 
  IconButton
} from '../../components'
import Slider from "react-slick";
import { useFetchPokemons } from '../../hooks';
import { faPlus, faMinus, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

import textTypes from '../../components/Text/constants/textTypes'
import Logo from '../../static/images/pokemon-logo.png'
import styles from './styles.scss'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const MainScreen = () => {
  const [limit, setLimit] = useState(5)
  const [pokemonData, setPokemonData] = useState(null)
  const [listItem, setListItem] = useState(null)
  const {loading, pokemonList, setPokemonList} = useFetchPokemons(limit)
  
  const settings = {
    arrow: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    vertical: true,
    speed: 1000,
    afterChange: (current) => {
      handleOnClick(pokemonList[current].name);
    }
  }

  useEffect(() => {
    // window.location.reload(false);
  }, [limit])

  const handleOnClick = async (name) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      setListItem(name);
      setPokemonData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleIncrement= () => {
    window.location.reload(false);
  }

  console.log(styles.Container);
  return (
    <Container className={`container ${pokemonData?.types[0]?.type.name}` }> 
      <img src={Logo} alt="#" className='logo'/>
      { loading ? (<Spinner/>) : ( 
        <>
          <IconButton icon={faArrowsRotate} onClick={ handleIncrement }/>
          <Slider className='pokemon-list' {...settings}>
            { 
              pokemonList &&
              pokemonList.map((item, index) => 
                <Tile 
                  key={item.name}
                  title={item.name} 
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.url.split('/')[6]}.png`}
                  // onClick={() => handleOnClick(item.name)}
                  className={listItem === item.name ? 'selected-item' : ''}
                />)
            }
          </Slider>
        {
          <div className='pokemon-data'>
            <div className='pokemon-description'>
              <Text
                type={textTypes.HEADING.XXL}
              > 
                {pokemonData?.name?.toUpperCase()} 
              </Text>

              <div className='pokemon-moves'>
                {
                  pokemonData?.abilities && 
                  pokemonData?.moves.slice(0,4).map(({ move }) => 
                    <Text
                      type={textTypes.BODY.MD}
                    > 
                      {move.name} 
                    </Text>
                  )
                }
              </div>

              <div className='type-container'>
                {
                  pokemonData?.types && 
                  pokemonData?.types.map(({ type }) => 
                    <div className={`pokemon-type`}>
                      <Text
                        type={textTypes.BODY.MD}
                      > 
                        {type.name} 
                      </Text>
                    </div>
                  )
                }
              </div>
            </div>

            <div className='image-container'>
              {
                pokemonData?.sprites &&
                <img className='pokemon-image' srcset={pokemonData.sprites?.other?.dream_world?.front_default} src={pokemonData.sprites?.front_default} alt='#'/>
              }
              {
                pokemonData &&
                <div className='vl'>
                  <p className='height'>Height: {pokemonData.height}</p>
                </div>
              }
            </div>
          </div>
        }
        </>
      )}
          
      <div className="bg-text">{pokemonData?.name}</div>
    </Container>
  )
}

export default MainScreen