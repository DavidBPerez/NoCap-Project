import NavBar from "../components/NavBar"
import {Grid} from "@mui/material"

import { useRecoilState, useRecoilValue } from 'recoil';
import {useEffect} from 'react'

import {charState, charInfoSelector} from "../atoms/clientState"
/*
Artist: High in openness to experience
Scholar: High in conscientiousness
Warrior: High in extraversion
Healer: High in agreeableness
Rogue: High in neuroticism
*/

function CharForm(){

  const [char, setChar] = useRecoilState(charState);

  //REMOVE LATER
  useEffect(() => {
    console.log(char);
  }, [char])

  const handleChange = (event) => {
    setChar(event.target.value);
  };
  
  return(
    <select value={char} onChange={handleChange}>
      <option value="" selected disabled hidden>Select a Class</option>
      <option value="Seeker">Seeker</option>
      <option value="Paladin">Paladin</option>
      <option value="Bard">Bard</option>
      <option value="Negotiator">Negotiator</option>
      <option value="Monk">Monk</option>
  </select>
  )
}

export default function CharacterCreation(){ 

  const charDescription = useRecoilValue(charInfoSelector);
  const charInfo = charDescription.desc;

  const description = (
    <p>{charInfo}</p>
  )

  
  return(
    <div id="creation-container" className="container-fluid">
      <NavBar navOptions = {[]}/>
      <h1 className="text-center pb-1" style={{backgroundColor: "#C0C0C0"}}>Character Creation Menu</h1>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="text-center">
        <Grid item className="bg-light" xs={6}>
          <h2 className="border-bottom border-dark">Choose Options</h2>
            <CharForm/>
        </Grid>
        
        <Grid item className="bg-dark text-light" xs={6}>
          <h2 className="border-bottom border-light">Description:</h2>
          {description}
        </Grid>
      </Grid>
    </div>
  )
}

