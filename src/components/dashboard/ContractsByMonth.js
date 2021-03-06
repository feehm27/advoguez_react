import {
  Box,
  Card,
  CardContent,
  CardHeader,
  colors,
  Divider,
  Tooltip,
  useTheme
} from '@material-ui/core';
import { Info } from '@material-ui/icons';
import { Bar } from 'react-chartjs-2';

const ContractsByMonth = (props) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        backgroundColor: colors.indigo[500],
        data:
          props.contracts.length === 0
            ? [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            : props.contracts.contracts_actives,
        label: 'Ativos'
      },
      {
        backgroundColor: colors.red[200],
        data:
          props.contracts.length === 0
            ? [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            : props.contracts.contracts_inactives,
        label: 'Encerrados'
      }
    ],
    labels: [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dec'
    ]
  };

  const options = {
    animation: false,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          barThickness: 12,
          maxBarThickness: 10,
          barPercentage: 0.5,
          categoryPercentage: 0.5,
          ticks: {
            fontColor: theme.palette.text.secondary
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            fontColor: theme.palette.text.secondary,
            beginAtZero: true,
            min: 0
          },
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: theme.palette.divider
          }
        }
      ]
    },
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  return (
    <Card {...props}>
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: '14px'
        }}
      >
        <CardHeader title="Contratos ativos e encerrados" />
        <Tooltip title="Dados exibidos com base na data de inicio e final do contrato">
          <Info></Info>
        </Tooltip>
      </span>
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 500,
            position: 'relative'
          }}
        >
          <Bar data={data} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ContractsByMonth;
