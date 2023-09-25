import {Route, Routes} from 'react-router-dom'

import Homepage from "./views/Homepage"

const routes = (
  <Routes>
    <Route path='/' element={<Homepage/>}></Route>
    <Route path='/about' element={<div>About page</div>}></Route>
  </Routes>
);

export default function ProjectRouter(){
  return routes;
}