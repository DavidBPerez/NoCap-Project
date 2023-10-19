import React, { useEffect } from 'react';
import NavBar from "../components/NavBar";
import { Grid } from "@mui/material";
import { useRecoilState, useRecoilValue } from 'recoil';

// Atom and Selector imports
import { charState, charInfoSelector } from "../atoms/CharClassState";
import { backgroundState, backgroundInfoSelector } from "../atoms/BackgroundState";
import { religionState, religionInfoSelector } from "../atoms/ReligionState";
import { hobbyState, hobbyInfoSelector } from "../atoms/HobbyState";

function Select({ options, name, stateName }) {
  const [val, setVal] = useRecoilState(stateName);
  const handleChange = (event) => setVal(event.target.value);

  useEffect(() => {
    console.log(val);
  }, [val]);

  const optionValues = options.map((option, index) => (
    <option key={index} value={option}>{option}</option>
  ));

  return (
    <select value={val} onChange={handleChange} style={{width: "20vw", padding: "10px", borderRadius: "4px", fontSize: ".75rem"}}>
      <option value="" disabled hidden>Select a {name}</option>
      {optionValues}
    </select>
  );
}

export default function CharacterCreation() {
  const charInfo = useRecoilValue(charInfoSelector).desc;
  const backgroundInfo = useRecoilValue(backgroundInfoSelector).desc;
  const religionInfo = useRecoilValue(religionInfoSelector).desc;
  const hobbyInfo = useRecoilValue(hobbyInfoSelector).desc;

  const submitCharacterDataToServer = () => {
    const character_creation_data = {
      class: charState,
      background: backgroundState,
      religion: religionState,
      hobby: hobbyState
    };
    console.log(character_creation_data);
  };

  const optionsData = [
    { title: "Character class", options: ["Seeker", "Paladin", "Bard", "Monk", "Negotiator"], name: "Class", stateName: charState },
    { title: "Background", options: ["World Traveler", "Village Animal Keeper", "Small-town Leader", "City Peacekeeper", "Orphan"], name: "Background", stateName: backgroundState },
    { title: "Religion", options: ["Atheism", "Cat Worship", "Emperor Worship", "Eternal Servitude", "Anxious Elixir Drinkers", "Eternal Physiological Beings"], name: "Religion", stateName: religionState },
    { title: "Hobby", options: ["Lockpicking", "Singing", "Gaming", "Nature", "Work"], name: "Hobby", stateName: hobbyState }
  ];

  return (
    <div style={{backgroundColor: "#f2f2f2", borderRadius: "8px", padding: "20px"}} className="container-fluid">
      <NavBar navOptions={[]} />
      <h1 className="text-center my-3 pb-2">Character Creation Menu</h1>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="text-center">
        <Grid item style={{backgroundColor: "#ffffff", marginBottom: "0px", paddingRight: "3vw"}} xs={6}>
          <h2 style={{borderWidth: "2px", marginBottom: "20px"}} className="border-bottom border-dark">Choose Options</h2>
          <div id="option-container" style={{marginTop: "20px"}}>
            {optionsData.map((item, index) => (
              <div className="d-flex justify-content-between pb-4" key={index}>
                <h1 style={{fontSize: "1rem"}}>{item.title}: </h1>
                <Select options={item.options} name={item.name} stateName={item.stateName} />
              </div>
            ))}
          </div>
        </Grid>
        <Grid item style={{backgroundColor: "#343a40", color: "#ffffff", borderWidth: "2px"}} className="border-bottom border-light" xs={6}>
          <h2 style={{borderWidth: "2px"}} className="border-bottom border-light">Description:</h2>
          <p>{charInfo}</p>
          <p>{backgroundInfo}</p>
          <p>{religionInfo}</p>
          <p>{hobbyInfo}</p>
        </Grid>
      </Grid>
      <button type="submit" onClick={submitCharacterDataToServer}  className="btn btn-secondary my-4">Create Character</button>
      <footer style={{height: "12.5vh"}} className="bg-dark"></footer>
    </div>
  );
}
