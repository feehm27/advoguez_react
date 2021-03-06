import { Box, Container, Grid, Skeleton } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import ContractEndDateClient from 'src/components/dashboard/ContractEndDateClient';
import ScheduledMettingClient from 'src/components/dashboard/ScheduledMettingClient';
import ProcessStatusClient from 'src/components/dashboard/ProcessStatusClient';
import { useEffect, useState } from 'react';
import { API } from 'src/services/api';

const DashboardClient = () => {
  const [loadingContract, setLoadingContract] = useState(true);
  const [loadingProcess, setLoadingProcess] = useState(true);
  const [loadingMeeting, setLoadingMeeting] = useState(true);

  const [process, setProcess] = useState([]);
  const [contract, setContract] = useState([]);
  const [meeting, setMeeting] = useState([]);

  /**
   * Obtém os dados do contrato do cliente
   */
  async function getContract() {
    setLoadingContract(true);

    const config = {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`
      }
    };

    await API.get('/clients/dashboard/contract', config).then((response) => {
      setContract(response.data.data);
    });

    setLoadingContract(false);
  }

  /**
   * Obtém os dados do processo do cliente
   */
  async function getStatusProcess() {
    setLoadingProcess(true);

    const config = {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`
      }
    };

    await API.get('/clients/dashboard/process', config).then((response) => {
      setProcess(response.data.data);
    });

    setLoadingProcess(false);
  }

  /**
   * Obtém os dados do processo do cliente
   */
  async function getMeeting() {
    setLoadingMeeting(true);

    const config = {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`
      }
    };

    await API.get('/clients/dashboard/meeting', config).then((response) => {
      setMeeting(response.data.data);
    });

    setLoadingMeeting(false);
  }

  useEffect(() => {
    getStatusProcess();
    getMeeting();
    getContract();
  }, []);

  return (
    <>
      <Helmet>
        <title>Advoguez</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '50%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            {loadingProcess ? (
              <Grid item lg={6} sm={6} xl={3} xs={12}>
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
              </Grid>
            ) : (
              <Grid item lg={6} sm={6} xl={3} xs={12}>
                <ProcessStatusClient process={process} />
              </Grid>
            )}
            {loadingContract ? (
              <Grid item lg={6} sm={6} xl={3} xs={12}>
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
              </Grid>
            ) : (
              <Grid item lg={6} sm={6} xl={3} xs={12}>
                <ContractEndDateClient contract={contract} />
              </Grid>
            )}
            {loadingMeeting ? (
              <Grid item lg={6} sm={6} xl={3} xs={12}>
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
              </Grid>
            ) : (
              <Grid item lg={6} md={6} xl={3} xs={12}>
                <ScheduledMettingClient
                  meeting={meeting}
                  sx={{ height: '100%' }}
                />
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default DashboardClient;
