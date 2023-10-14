import {Route, Routes} from 'react-router-dom'

import Homepage from "./views/Homepage"
import AboutPage from "./views/About"
import LoginPage from "./views/Login"
import CharacterCreation from "./views/CharacterCreation"

const routes = (
  <Routes>
    <Route path='/' element={<Homepage/>}></Route>
    <Route path='/about' element={<AboutPage/>}></Route>
    <Route path='/login' element={<LoginPage/>}></Route>
    <Route path='/character_creation' element={<CharacterCreation/>}></Route>
  </Routes>
);

export default function ProjectRouter(){
  return routes;
}
