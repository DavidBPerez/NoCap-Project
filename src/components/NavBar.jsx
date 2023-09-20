import "./Css/NavBar.css"

import {CardGroup, Card, CardImg, CardBody, CardTitle} from 'reactstrap'
import {Link} from 'react-router-dom'

export default function NavBar(props){
  let internalNavItems = props.items;

  // The image logo that is "No-Cap"
  const imgLogo = (
    <Link to="/">
      <img src="./no_cap.jfif" alt="our logo"/>
    </Link>
  )

  const otherOptions = [
    (
      <Link to="/about">
        <Card>
            <CardImg src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dplaceholder&psig=AOvVaw0J8g0VTpT07HnHRzKnwGbT&ust=1695331381603000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCODYvNiPuoEDFQAAAAAdAAAAABAD" alt="to about page"/>
            <CardBody>
              <CardTitle>About Page</CardTitle>
            </CardBody>
          </Link>
      </Card>
    ), 
    (
      <Card>
        <Link to="/test">
          <CardImg src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dplaceholder&psig=AOvVaw0J8g0VTpT07HnHRzKnwGbT&ust=1695331381603000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCODYvNiPuoEDFQAAAAAdAAAAABAD" alt="to the Test"/>
          <CardBody>
            <CardTitle>Test Page</CardTitle>
          </CardBody>
        </Link>
      </Card>
    )
  ]


  return(
    <div id='nav-bar-container'>
      <div id='logo-container'>
        {imgLogo}
      </div>
      <CardGroup id='other-option-container'>
        {otherOptions}
      </CardGroup>
    </div>
  )
}