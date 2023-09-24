import "./Css/Homepage.css"
import NavBar from "../components/NavBar"

//Home Nav Bar Displayed Elements
const homeBarItems = [{pagePath: "/about", imgDesc: "About Page", imgPath: "./information.png"}]

export default function HomePage(props){
  return(
    <>
      <NavBar navOptions={homeBarItems}/>
      <div id='img-container'>
        <img src="./greyScale.jpg" alt="home page img" id="main-page-img"/>
      </div>
      <footer>
        <p>™</p>
      </footer>
    </>
  )
}