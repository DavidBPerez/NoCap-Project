import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Grid } from '@mui/material';
import { useRecoilValue, useRecoilState } from 'recoil';
import './Css/CharacterCreation.css';
import { charState, charInfoSelector } from '../atoms/CharClassState';
import { backgroundState, backgroundInfoSelector } from '../atoms/BackgroundState';
import { religionState, religionInfoSelector } from '../atoms/ReligionState';
import { hobbyState, hobbyInfoSelector } from '../atoms/HobbyState';
import { useNavigate } from 'react-router-dom';
import { PlayerStatsState, updatePlayerStats } from '../atoms/PlayerStatsState';

function Select({ options, name, stateName, setState }) {
  const [val, setVal] = React.useState('');

  const optionValues = options.map((option, index) => (
    <option key={index} value={option}>
      {option}
    </option>
  ));

  const handleOptionChange = (e) => {
    setVal(e.target.value);
    setState(e.target.value);
  };

  return (
    <select value={val} onChange={handleOptionChange} className="custom-select">
      <option value="" disabled hidden>
        Select a {name}
      </option>
      {optionValues}
    </select>
  );
}

const personalityScores = {
  Seeker: { openness: 5, conscientiousness: 3, extraversion: 4, agreeableness: 5, neuroticism: 2 },
  Paladin: { openness: 3, conscientiousness: 5, extraversion: 3, agreeableness: 5, neuroticism: 3 },
  Bard: { openness: 5, conscientiousness: 2, extraversion: 5, agreeableness: 4, neuroticism: 3 },
  Negotiator: { openness: 4, conscientiousness: 3, extraversion: 4, agreeableness: 5, neuroticism: 3 },
  Monk: { openness: 2, conscientiousness: 5, extraversion: 2, agreeableness: 3, neuroticism: 2 },
  WorldTraveler: { openness: 4, conscientiousness: 2, extraversion: 5, agreeableness: 4, neuroticism: 4 },
  VillageAnimalKeeper: { openness: 4, conscientiousness: 4, extraversion: 2, agreeableness: 5, neuroticism: 2 },
  SmallTownLeader: { openness: 3, conscientiousness: 5, extraversion: 4, agreeableness: 5, neuroticism: 3 },
  CityPeacekeeper: { openness: 4, conscientiousness: 4, extraversion: 3, agreeableness: 5, neuroticism: 4 },
  Orphan: { openness: 3, conscientiousness: 3, extraversion: 3, agreeableness: 3, neuroticism: 5 },
  Atheism: { openness: 5, conscientiousness: 2, extraversion: 2, agreeableness: 2, neuroticism: 4 },
  CatWorship: { openness: 4, conscientiousness: 2, extraversion: 3, agreeableness: 4, neuroticism: 2 },
  EmperorWorship: { openness: 3, conscientiousness: 5, extraversion: 2, agreeableness: 3, neuroticism: 3 },
  EternalServitude: { openness: 4, conscientiousness: 3, extraversion: 4, agreeableness: 5, neuroticism: 2 },
  AnxiousElixirDrinkers: { openness: 4, conscientiousness: 2, extraversion: 2, agreeableness: 3, neuroticism: 5 },
  Lockpicking: { openness: 4, conscientiousness: 4, extraversion: 2, agreeableness: 2, neuroticism: 3 },
  Singing: { openness: 4, conscientiousness: 3, extraversion: 4, agreeableness: 4, neuroticism: 3 },
  Gaming: { openness: 3, conscientiousness: 2, extraversion: 3, agreeableness: 3, neuroticism: 4 },
  Nature: { openness: 4, conscientiousness: 4, extraversion: 3, agreeableness: 4, neuroticism: 2 },
  Work: { openness: 3, conscientiousness: 5, extraversion: 2, agreeableness: 2, neuroticism: 3 },
};

export default function CharacterCreation() {
  const charInfo = useRecoilValue(charInfoSelector).desc;
  const backgroundInfo = useRecoilValue(backgroundInfoSelector).desc;
  const religionInfo = useRecoilValue(religionInfoSelector).desc;
  const hobbyInfo = useRecoilValue(hobbyInfoSelector).desc;

  const navigate = useNavigate();

  const [selectedClass, setSelectedClass] = React.useState('');
  const [selectedBackground, setSelectedBackground] = React.useState('');
  const [selectedReligion, setSelectedReligion] = React.useState('');
  const [selectedHobby, setSelectedHobby] = React.useState('');

  const [playerStats, setPlayerStats] = useRecoilState(PlayerStatsState);

  const submitCharacterDataToServer = () => {
    const character_creation_data = {
      class: selectedClass,
      background: selectedBackground,
      religion: selectedReligion,
      hobby: selectedHobby,
    };

    const selectedScores = personalityScores[selectedClass];

    const updatedPlayerStats = updatePlayerStats(playerStats, selectedScores);

    setPlayerStats(updatedPlayerStats);

    console.log(`Selected Class: ${selectedClass}`);
    console.log(`Selected Background: ${selectedBackground}`);
    console.log(`Selected Religion: ${selectedReligion}`);
    console.log(`Selected Hobby: ${selectedHobby}`);
    console.log(`Personality Scores: ${JSON.stringify(selectedScores)}`);

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
                <Select
                  options={item.options}
                  name={item.name}
                  stateName={item.stateName}
                  setState={
                    item.stateName === charState ? setSelectedClass
                      : item.stateName === backgroundState ? setSelectedBackground
                      : item.stateName === religionState ? setSelectedReligion
                      : setSelectedHobby
                  }
                />
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
