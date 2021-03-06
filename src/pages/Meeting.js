import { Box, Container } from '@material-ui/core';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import MeetingListToolbar from 'src/components/meeting/MeetingListToolbar';
import MeetingManagement from 'src/components/meeting/MeetingManagement';

const Meeting = () => {
  /**
   * Use Effect
   */
  useEffect(() => {}, []);

  return (
    <div style={{ marginLeft: '14px', marginTop: '14px' }}>
      <Helmet>
        <title>Advoguez</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth="lg">
          <MeetingListToolbar />
          <MeetingManagement />
        </Container>
      </Box>
    </div>
  );
};

export default Meeting;
