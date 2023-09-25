/** 
* This is a react component that acts as a navBar for our project
* It will take later specified parameters and create the navBar based on them
* The left element of the NavBar will always be an image that will go back to the homepage when clicked
*/

import {CardGroup, Card, CardImg, CardBody, CardTitle} from 'reactstrap'
import {Link} from 'react-router-dom'

/** 
* Renders a Navigation Bar for our project
* @param {Object} props.navOptions - An array of the objects each containing the following:
*   - pagePath: The route the page will go when clicked
*   - imgPath: The path to the image that is the "face" of the button
*   - imgDesc: The alt text (for accessibility) and the (tentative) Card Title
* @returns {JSX.Element}: A react component that functions as a navBar
*/

export default function NavBar(props){
  const NavBarOptions = props.navOptions;
  const NavElements = NavBarOptions.map((element, index) => {
    return (
      <Link to={element.pagePath} key={index}>
        <Card>
          <CardImg src={element.imgPath} alt={element.imgDesc} />
          <CardBody>
            <CardTitle>{element.imgDesc}</CardTitle>
          </CardBody>
        </Card>
      </Link>
    );
  });



  // The image logo that is "No-Cap"
  const imgLogo = (
    <Link to="/">
      <img id='logo-image' src="./img/no_cap.jfif" alt="our logo"/>
    </Link>
  )

  
  return(
    <div id='nav-bar-container'>
      <div id='logo-container'>
          {imgLogo}
      </div>
      <CardGroup id='other-option-container'>
          {NavElements}
      </CardGroup>
    </div>  
  )
}
