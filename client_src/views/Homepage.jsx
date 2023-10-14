import "./Css/Homepage.css"
import NavBar from "../components/NavBar"
import {Link} from "react-router-dom"
import { Container, Grid, Typography, IconButton } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';

//Home Nav Bar Displayed Elements
const homeBarItems = [{pagePath: "/about", imgDesc: "About Page", imgPath: "./img/information.png"}]

function HomePageFooter() {
  return (
    <footer style={{ backgroundColor: "#C0C0C0", padding: '1rem 0' }}>
      <Container>
        <Typography variant="h6" align="center" gutterBottom>
          Complacara Conundrum™ 2023
        </Typography>
        <Typography variant="body2" align="center" color="textSecondary" component="p">
          Based on established psychological research and principles
        </Typography>
        <Grid container justifyContent="center" spacing={3} style={{ marginTop: '1rem' }}>
          <Grid item>
            <IconButton color="primary" aria-label="Email">
              <MailOutlineIcon />
            </IconButton>
            <Link href="#" variant="body2">
              nocap@uwf.edu
            </Link>
          </Grid>
          <Grid item>
            <IconButton color="primary" aria-label="Phone">
              <PhoneIcon />
            </IconButton>
            867-5309
          </Grid>
          <Grid item>
            <IconButton color="primary" aria-label="Privacy Policy">
              <PrivacyTipIcon />
            </IconButton>
            Privacy Policy: We steal your data and sell it to the highest bidder, but at least we're honest about it
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default function HomePage(){
  return(
    <div id="home-page" className="container-fluid min-vh-100">
      <NavBar navOptions={homeBarItems}/>
      <div id="img-container" className="w-100 d-flex justify-content-center align-items-center">
        <Link to = "/login" id="center-button" className="display-6 text-light m-auto position-absolute text-decoration-none">
          <p className="text-center">Play the Game</p>
        </Link>
      </div>
      <HomePageFooter/>
    </div>
  )
}
