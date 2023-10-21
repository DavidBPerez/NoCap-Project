import React from 'react';
import { Container, Typography, IconButton } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#C0C0C0", padding: '1rem 0' }}>
      <Container>
        <Typography variant="h6" align="center" gutterBottom>
          Complacara Conundrum™ 2023
        </Typography>
        <Typography variant="body2" align="center" color="textSecondary" component="p">
          Based on established psychological research and principles
        </Typography>
        <div style={{ marginTop: '1rem' }}>
          <div>
            <IconButton color="primary" aria-label="Email">
              <MailOutlineIcon />
            </IconButton>
            <a href="#" variant="body2">
              nocap@uwf.edu
            </a>
          </div>
          <div>
            <IconButton color="primary" aria-label="Phone">
              <PhoneIcon />
            </IconButton>
            867-5309
          </div>
          <div>
            <IconButton color="primary" aria-label="Privacy Policy">
              <PrivacyTipIcon />
            </IconButton>
            Privacy Policy: We steal your data and sell it to the highest bidder, but at least we're honest about it
          </div>
        </div>
      </Container>
    </footer>
  );
}
