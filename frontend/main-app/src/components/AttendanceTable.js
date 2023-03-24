import React, { useEffect, useState } from 'react';
import { Checkbox } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import UploadForm from '../pages/UploadForm';



// Generate Order Data

export default function MembersTable(props) {
  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Name',
      headerClassName: 'bg-secondary text-white',
      flex: 2,
      editable: false,
    },
    {
      field: 'email',
      headerClassName: 'bg-secondary text-white',
      headerName: 'Email',
      flex: 3,
      editable: false,
    },

    {
      field: 'telegram',
      headerClassName: 'bg-secondary text-white',
      headerName: 'Telegram',
      flex: 2,
      editable: false, 
    }, 

    {
      field: 'school',
      headerClassName: 'bg-secondary text-white',
      headerName: 'School',
      flex: 2,
      editable: false, 
    }, 

    {
      field: 'year',
      headerClassName: 'bg-secondary text-white',
      headerName: 'Year of Study',
      flex: 2,
      editable: false, 
    }, 

    {
      field: 'present',
      headerClassName: 'bg-secondary text-white',
      headerName: 'Present?',
      flex: 1,
      editable: false, 
      renderCell: (params) => { 
        return (
          <Checkbox></Checkbox>
        )
      }
    }, 
  ];

  const rows = [
    {id: 1, name: "Bernice Teo Wei Shan", email: "bernice.teo.2021@scis.smu.edu.sg", telegram: "@berrrniice", school: 'SCIS', year: 'Year 3'},
    {id: 2, name: "Regine Tan Wei Ting", email: "reginetan.2021@scis.smu.edu.sg", telegram: "@ginxed", school: 'SOSS', year: 'Year 1'},
    {id: 3, name: "Ivan Yeo", email: "ivanyeo.2021@scis.smu.edu.sg", telegram: "@ivanyeo", school: 'CIS', year: 'Year 5'},
  ];

  return (
    <DataGrid
    autoHeight
    rows={rows}
    columns={columns}
    initialState={{
      pagination: {
        paginationModel: {
          pageSize: 10,
        },
      },
      columns: {
        columnVisibilityModel: {
          // Hide columns status and traderName, the other columns will remain visible
          school: false,
          year: false,
        },
      },
    }}
    pageSizeOptions={[10]}
    checkboxSelection={false}
    disableRowSelectionOnClick
  />
  );

}