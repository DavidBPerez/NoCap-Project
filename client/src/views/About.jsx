import "./Css/About.css"
import NavBar from "../components/NavBar"

import { Container, Paper, Typography, Box } from '@mui/material';

export default function About() {
  return (
    <div id="about-container" style={{fontSize: "1.5rem"}}>
      <NavBar navOptions={[]}/>

      <Container component={Box} mt={4} mb={6}>
        <Paper variant="outlined" style={{padding: '2rem'}}>
          <Typography variant="h2" align="center" gutterBottom style={{fontWeight: "bold"}} className="bg-dark text-white">
            The Big Five (OCEAN)
          </Typography>

          {renderFactor("Openness", "represents how people's desire for new experience as opposed to routine.")}
          {renderFactor("Conscientiousness", "represents how goal-oriented someone is.")}
          {renderFactor("Extraversion", "represents how social someone is.")}
          {renderFactor("Agreeableness", "represents how well someone gets along with others.")}
          {renderFactor("Neuroticism", "represents emotion stability.")}

          <Box mt={6} p={3} bgcolor="text.primary" color="primary.contrastText">
            <Typography variant="h4" gutterBottom className="text-center">
              About The Game:
            </Typography>
            <Typography variant="body1">
              In this test, we will attempt to determine your personality by gamifying the personality test. You will give us text-based feedback in the form of creating the character and playing the game. In order to ensure accurate feedback, our methodology will remain obfuscated. At any point during the game, you may save your progress and come back later. We will start with character creation, and then you can begin playing!
            </Typography>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}

function renderFactor(title, description) {
  return (
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" style={{borderBottom: "2px solid black", paddingBottom: '0.5rem'}}>
        {description}
      </Typography>
    </Box>
  );
}
