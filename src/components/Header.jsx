import { Box, Container } from '@mui/system';
import React from 'react';

export default function Header() {
  return (
    <Container disableGutters maxWidth={false}>
      <Box sx={{
        bgcolor: '#cfe8fc', height: '5vh', width: '100%', mb: 1,
      }}
      />
    </Container>
  );
}
