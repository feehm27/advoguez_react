import { Box, Container, Skeleton } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import ContractListToolbar from 'src/components/contract/ContractListToolbar';
import ContractManagement from 'src/components/contract/ContractManagement';
import { API } from 'src/services/api';

const Contract = () => {
  const [contracts, setContracts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Obtém as informações do cliente
   */
  async function getContracts() {
    setIsLoading(true);
    const tokenUser = window.localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${tokenUser}` }
    };
    await API.get('advocates/contracts', config)
      .then((response) => {
        setContracts(response.data.data);
      })
      .catch((err) => console.error(err));
    setIsLoading(false);
  }

  /**
   * Use Effect
   */
  useEffect(() => {
    getContracts();
  }, []);

  return isLoading ? (
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
          <Skeleton
            variant="rectangular"
            animation="wave"
            width="100%"
            height="100%"
          >
            <div style={{ paddingTop: '57%', margin: '16px' }} />
          </Skeleton>
        </Container>
      </Box>
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
          <ContractListToolbar contracts={contracts} />
          <ContractManagement contracts={contracts} />
        </Container>
      </Box>
    </>
  );
};

export default Contract;
