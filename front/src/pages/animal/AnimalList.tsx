import { Grid, IconButton, Paper } from '@mui/material';
import React from 'react';
import AddCircle from '@mui/icons-material/AddCircle';
import { Animal } from '../../store/animal/animal.type';
import { DataGrid } from '@mui/x-data-grid';
import ActionsItem from './ActionsItem';

type AnimalListProps = {
  animals: Animal[];
  onOpenModal: () => void;
  onHandleClick: (row: any) => void;
  setEdit: (value: boolean) => void;
  setRemove: (value: boolean) => void;
};

const AnimalsList: React.FC<AnimalListProps> = ({
  animals,
  onOpenModal,
  onHandleClick,
  setEdit,
  setRemove,
}) => {

  const columns = [
    { field: "_id", hide: true },
    { field: 'idSenasa', headerName: 'Id Senasa', flex: 1 },
    { field: 'typeAnimal', headerName: 'Type', flex: 1 },
    {
      field: 'weight',
      headerName: 'Weight',
      type: 'number',
      flex: 1
    },
    {
      field: 'typeDevice',
      headerName: 'Type Device',
      description: 'CARAVANA o COLLAR',
      sortable: true,
      flex: 1
    },
    {
      field: 'paddock',
      headerName: 'Paddock',
      sortable: true,
      flex: 1
    },
    {
      field: 'numberDevice',
      headerName: 'Device Number',
      sortable: true,
      flex: 1
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      flex: 1,
      disableClickEventBubbling: true,
      renderCell: (params: any) => {

        return (
          <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
            <ActionsItem setEdit={setEdit} setRemove={setRemove} onHandleClick={onHandleClick} onOpenModal={onOpenModal} animal={params.row} />
          </div>
        );
      }
    }
  ];


  return (
    <Grid data-aos="fade-up" data-aos-duration="3000">
      <Grid>
        <Grid xs={12}>
          <Grid container justifyContent="flex-end" marginBottom={1}>
            <IconButton onClick={() => { setEdit(false); setRemove(false); onHandleClick(undefined); onOpenModal() }}>
              <AddCircle sx={{ fontSize: 40, color: '#8bb132' }} />
            </IconButton>
          </Grid>
        </Grid>
        <Paper
          style={{ height: 400, width: '100%', textAlign: 'center', marginTop: 30 }}

        >
          <DataGrid
            //onRowClick={onHandleClick}
            getRowId={(row) => row._id as string}
            rows={animals}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </Paper>
      </Grid>
    </Grid>
  );
};


export default AnimalsList;