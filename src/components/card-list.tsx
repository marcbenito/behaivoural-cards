import { BehaivouralCard } from 'thin-backend';
import {
  DataGrid,
  GridCallbackDetails,
  GridColDef,
  GridRowParams,
  MuiEvent
} from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
interface CardListProps {
  cards: BehaivouralCard[] | null;
}

export default function CardList({ cards }: CardListProps): JSX.Element {
  const navigate = useNavigate();

  if (!cards) {
    return <div>Loading ...</div>;
  }

  const handleRowClick = (
    params: GridRowParams,
    event: MuiEvent<React.MouseEvent>,
    details: GridCallbackDetails
  ) => {
    navigate('/cards/' + params.id);
  };

  const columns: GridColDef[] = [
    // { field: 'id:', headerName: 'id', width: 150 },
    { field: 'title', headerName: 'title', width: 400 },
    { field: 'situation', headerName: 'situation', width: 150 },
    { field: 'task', headerName: 'task', width: 150 },
    { field: 'action', headerName: 'action', width: 150 },
    { field: 'result', headerName: 'result', width: 150 }
  ];
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={cards} columns={columns} onRowClick={handleRowClick} />
    </div>
  );
  // return <TableContainer component={Paper}>
  //     <Table sx={{ minWidth: 650 }} aria-label="simple table">
  //         <TableHead>
  //             <TableRow>
  //                 <TableCell>Title</TableCell>
  //                 <TableCell align="right">SITUATION</TableCell>
  //                 <TableCell align="right">TASK</TableCell>
  //                 <TableCell align="right">ACTION</TableCell>
  //                 <TableCell align="right">RESULT</TableCell>
  //             </TableRow>
  //         </TableHead>
  //         <TableBody>
  //             {cards.map((row) => (
  //                 <TableRow
  //                     key={row.id}
  //                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
  //                 >
  //                     <TableCell component="th" scope="row">
  //                         {row.title}
  //                     </TableCell>
  //                     <TableCell align="right">{row.situation}</TableCell>
  //                     <TableCell align="right">{row.task}</TableCell>
  //                     <TableCell align="right">{row.action}</TableCell>
  //                     <TableCell align="right">{row.result}</TableCell>
  //                 </TableRow>
  //             ))}
  //         </TableBody>
  //     </Table>
  // </TableContainer>
}
