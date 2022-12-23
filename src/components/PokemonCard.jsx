import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/PokemonCard.css'

const PokemonCard = ({ pokemon }) => {

  const [dataPokemon, setDataPokemon] = useState()

  const navigate = useNavigate()

  const types = dataPokemon?.types.map(type => type.type.name).join(' / ')

  const handleClickPokemon = () => {
    navigate(`/pokedex/${dataPokemon?.id}`)
  }

  useEffect(() => {
    axios.get(pokemon.url)
      .then(res => setDataPokemon(res.data))
      .catch(err => console.log(err))
  }, [])


  return (
    <article onClick={handleClickPokemon} className={`pokeCard border-${dataPokemon?.types[0].type.name}`}>
      <section className={`pokeCard__header bg-lg-${dataPokemon?.types[0].type.name}`}></section>
      <section className='pokeCard__contend'>
        <img className='pokeCard__img' src={dataPokemon?.sprites.other['official-artwork'].front_default} alt="" />
        <h3 className='pokeCard__name'>{pokemon.name}</h3>
        <p className='pokeCard__types'>{types}</p>
        <p className='pokeCard__types-title'>Type</p>
        <hr />
        <section className='pokeCard__stats'>
          {
            dataPokemon?.stats.map(stat => (
              <div key={stat.stat.name} className='pokeCard__stat'>
                <p className='pokeCard__stat-name'>{stat.stat.name}</p>
                <p className='pokeCard__stat-value'>{stat.base_stat}</p>
              </div>
            ))
          }
        </section>
      </section>
      <section className='loader'>
        <div className={`loader__section up ${dataPokemon ? 'animationActive' : ''}`}>
          <div className='loader__red up'>
            <div className='loader__circle'>
              <div className='loader__circle-int'></div>
            </div>
          </div>
        </div>
        <div className={`loader__section down ${dataPokemon ? 'animationActive' : ''}`}>
          <div className='loader__red down'></div>
        </div>
      </section>
    </article>
  )
}

export default PokemonCard