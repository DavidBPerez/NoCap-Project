import "./Css/Homepage.css"
import NavBar from "../components/NavBar"

//Home Nav Bar Displayed Elements
const homeBarItems = [{pagePath: "/about", imgDesc: "About Page", imgPath: "./img/information.png"}]

export default function HomePage(props){
  return(
    <>
      <NavBar navOptions={homeBarItems}/>
      <div id='img-container'>
        <img src="./img/greyScale.jpg" alt="home page img" id="main-page-img"/>
      </div>
      <footer>
        <p>™</p>
      </footer>
    </>
  )
}
