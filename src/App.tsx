import React, {FunctionComponent} from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PokemonList from './pages/pokemon-list';
import PokemonDetail from './pages/pokemon-detail';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';
  
const App: FunctionComponent = () => {

 return (
    <div>
        <BrowserRouter>
        <nav>
            <div className='nav-wrapper teal'>
                <Link to="/" className='="brand-logo center'>Pokédex</Link>
            </div>
        </nav>
        <Routes>
        <Route path="*" element={<PageNotFound />} /> 
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemons" element={<PokemonList />} />
        <Route path="/pokemons/:id" element={<PokemonDetail/>} />
        <Route path="/pokemons/edit/:id" element={<PokemonEdit/>} />
        </Routes>
        </BrowserRouter>
    </div>
 )
}
  
export default App;