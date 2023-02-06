import React, {FunctionComponent, useState, useEffect} from 'react';
import Pokemon from './models/pokemon';
import POKEMONS from './models/mock-pokemon'
  
const App: FunctionComponent = () => {
 const [pokemons, setPokemons] = useState<Pokemon[]>([]);

 useEffect(() => {
    setPokemons(POKEMONS);
 }, []);

 const showPokemonsCount = () => {
    console.log(pokemons.length);
 }
    
 return (
  <div>
    <h1 className='center'>Pokédex</h1>
    <p>Il y a {pokemons.length} pokémons dans le Pokédex.</p>
    <p onClick={showPokemonsCount}>Afficher le nombre dans la console</p>
    <div className='container'>
        <div className='row'>
            {pokemons.map(({id, name, picture, created} ) => (
                <div className='col s6 m4' key={id}>
                <div className='card horizontal'>
                    <div className='card-image'>
                        <img src={picture} alt={name} />
                    </div>
                    <div className='card-stacked'>
                    <div className='card-content'>
                        <p>{name}</p>
                        <p>{created.toString()}</p>
                    </div>
                    </div>
                </div>
                </div>
            ))}
        </div>
    </div>
  </div>
 )
}
  
export default App;