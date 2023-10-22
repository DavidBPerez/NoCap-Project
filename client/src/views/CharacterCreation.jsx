import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Grid } from '@mui/material';
import { useRecoilValue, useRecoilState } from 'recoil';
import './Css/CharacterCreation.css';
import { charState, charInfoSelector } from "../atoms/CharClassState";
import { backgroundState, backgroundInfoSelector } from "../atoms/BackgroundState";
import { religionState, religionInfoSelector } from "../atoms/ReligionState";
import { hobbyState, hobbyInfoSelector } from "../atoms/HobbyState";
import { useNavigate } from 'react-router-dom';

function Select({ options, name, stateName }) {
  const [val, setVal] = useRecoilState(stateName);

  const optionValues = options.map((option, index) => (
    <option key={index} value={option}>
      {option}
    </option>
  ));

  return (
    <select value={val} onChange={(e) => setVal(e.target.value)} className="custom-select">
      <option value="" disabled hidden>
        Select a {name}
      </option>
      {optionValues}
    </select>
  );
}

export default function CharacterCreation() {
  const charInfo = useRecoilValue(charInfoSelector).desc;
  const backgroundInfo = useRecoilValue(backgroundInfoSelector).desc;
  const religionInfo = useRecoilValue(religionInfoSelector).desc;
  const hobbyInfo = useRecoilValue(hobbyInfoSelector).desc;

  const navigate = useNavigate(); // Initialize navigate function

  const submitCharacterDataToServer = () => {
    const character_creation_data = {
      class: charState,
      background: backgroundState,
      religion: religionState,
      hobby: hobbyState,
    };
    console.log(character_creation_data);

    // After saving character, navigate to GamePage
    navigate('/game');
  }

  const optionsData = [
    {
      title: 'Character class',
      options: ['Seeker', 'Paladin', 'Bard', 'Monk', 'Negotiator'],
      name: 'Class',
      stateName: charState,
    },
    {
      title: 'Background',
      options: ['World Traveler', 'Village Animal Keeper', 'Small-town Leader', 'City Peacekeeper', 'Orphan'],
      name: 'Background',
      stateName: backgroundState,
    },
    {
      title: 'Religion',
      options: ['Atheism', 'Cat Worship', 'Emperor Worship', 'Eternal Servitude', 'Anxious Elixir Drinkers', 'Eternal Physiological Beings'],
      name: 'Religion',
      stateName: religionState,
    },
    {
      title: 'Hobby',
      options: ['Lockpicking', 'Singing', 'Gaming', 'Nature', 'Work'],
      name: 'Hobby',
      stateName: hobbyState,
    },
  ];

  return (
    <div className="character-creation-container">
      <Header navOptions={[]} />
      <h1 className="text-center creation-title">Character Creation Menu</h1>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="text-center">
        <Grid item className="options-grid" xs={6}>
          <h2 className="options-title">Choose Options</h2>
          <div className="option-container">
            {optionsData.map((item, index) => (
              <div className="option-item" key={index}>
                <h1 className="option-label">{item.title}:</h1>
                <Select options={item.options} name={item.name} stateName={item.stateName} />
              </div>
            ))}
          </div>
        </Grid>
        <Grid item className="description-grid" xs={6}>
          <h2 className="description-title">Description:</h2>
          <p className="description-text">{charInfo || 'No Character Selected Yet'}</p>
          <p className="description-text">{backgroundInfo || 'Select A Background'}</p>
          <p className="description-text">{religionInfo || 'No Religion Selected'}</p>
          <p className="description-text">{hobbyInfo || 'Select A Main Hobby'}</p>
        </Grid>
      </Grid>
      <button type="submit" onClick={submitCharacterDataToServer} className="submit-button">
        Create Character
      </button>
      <Footer />
    </div>
  );
}
