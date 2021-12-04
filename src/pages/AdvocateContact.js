import { Box, Container, Skeleton } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import AdvocateContactList from 'src/components/advocate_contact/AdvocateContactList';
import AdvocateContactManagement from 'src/components/advocate_contact/AdvocateContactManagement';
import { API } from 'src/services/api';

const AdvocateContact = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Obtém as informações das mensagens
   */
  async function getMessages() {
    setIsLoading(true);
    const config = {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`
      }
    };
    await API.get(`messages`, config)
      .then((response) => {
        setMessages(response.data.data);
      })
      .catch((err) => console.error(err));
    setIsLoading(false);
  }

  /**
   * Use Effect
   */
  useEffect(() => {
    getMessages();
  }, []);

  return isLoading ? (
    <>
      <Helmet>
        <title>Advoguez</title>
      </Helmet>
      <Skeleton />
    </>
  ) : (
    <>
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
          <AdvocateContactList messages={messages} />
          <AdvocateContactManagement messages={messages} />
        </Container>
      </Box>
    </>
  );
};

export default AdvocateContact;