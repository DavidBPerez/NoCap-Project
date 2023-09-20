import {Route, Routes} from 'react-router-dom'

import NavBar from "./components/NavBar.jsx"

const temp = [{link: "/", text: "hi"}];

const routes = (
  <Routes>
    <Route path='/' element={<NavBar items={temp}/>}></Route>
  </Routes>
);

export default function ProjectRouter(){
  return routes;
}