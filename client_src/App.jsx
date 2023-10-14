import {BrowserRouter} from 'react-router-dom'
import {RecoilRoot} from 'recoil'
import './App.css'

import ProjectRouter from "./ProjectRouter.jsx"

export default function App() {
  return(
    <RecoilRoot>
      <BrowserRouter>
        <ProjectRouter/>
      </BrowserRouter>
    </RecoilRoot>
  )
}
