import {BrowserRouter} from 'react-router-dom'
import './App.css'

import ProjectRouter from "./ProjectRouter.jsx"

export default function App() {
  return(
    <BrowserRouter>
      <ProjectRouter/>
    </BrowserRouter>
  )
}
