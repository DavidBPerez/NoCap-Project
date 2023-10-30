import React from 'react';
import { useRecoilValue } from 'recoil';
import { PlayerStatsState } from '../atoms/PlayerStatsState';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const PlayerStats = () => {
  const playerStats = useRecoilValue(PlayerStatsState);

  const containerStyle = {
    maxWidth: '100%',
    margin: '0 auto',
  };

  const statStyle = {
    flex: '1 1 calc(33.33% - 1rem)',
    margin: '0.2rem', // Reduced margin for less height spacing
  };

  const GradientSlider = styled(Slider)(({ theme }) => ({
    width: '100%',
    height: 2,
    borderRadius: 5,
    '& .MuiSlider-rail': {
      height: 8,
      borderRadius: 1,
      backgroundImage: 'linear-gradient(to right, red, green)',
    },
    '& .MuiSlider-track': {
      height: 8,
      borderRadius: 1,
      backgroundImage: 'linear-gradient(to right, red, green)',
    },
    '& .MuiSlider-thumb': {
      width: 24,
      height: 24,
      backgroundColor: '#FFF',
      boxShadow: theme.shadows[1],
      '&:hover, &.Mui-focusVisible': {
        boxShadow: theme.shadows[2],
      },

      '&.Mui-disabled': {
        color: 'inherit',
        boxShadow: theme.shadows[1],
      },
    },
  }));

  function GradientSliderComponent(props) {
    return (
      <Box>
        <span className="text-center">{props.type} : {props.value}</span>
        <GradientSlider aria-label={props.type} value={props.value} disabled={true} />
      </Box>
    );
  }

  return (
    <div style={containerStyle} className="pt-2 mb-5">
      <h2 className="display-4">Player Stats</h2>
      <div className="d-flex flex-column px-5">
        <div style={statStyle}>
          <GradientSliderComponent type="Openess" value={playerStats.openness}/>
        </div>
        <div style={statStyle}>
          <GradientSliderComponent type="Conscientiousness" value={playerStats.conscientiousness}/>
        </div>
        <div style={statStyle}>
          <GradientSliderComponent type="Extraversion" value={playerStats.extraversion}/>
        </div>
        <div style={statStyle}>
          <GradientSliderComponent type="Agreeableness" value={playerStats.agreeableness}/>
        </div>
        <div style={statStyle}>
          <GradientSliderComponent type="Neuroticism" value={playerStats.neuroticism}/>
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
