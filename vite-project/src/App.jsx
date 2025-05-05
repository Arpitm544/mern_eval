import React from 'react'
import { BrowserRouter as Router,Routes,Route, useNavigate, Navigate, BrowserRouter  } from 'react-router-dom';
import Create_recipes from './compoment/create_recipes';
import Recipes from './compoment/recipes';
const App = () => {
  return (
    <div>
        <Router>
        <Routes>
        <Route path='/' element={<Create_recipes/>}/>
        <Route path='/recipes/all' element={<Recipes/>}/>
        </Routes>
        </Router>    
    </div>
  )
}

export default App