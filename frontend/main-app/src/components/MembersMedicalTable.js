import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

// Generate Order Data

export default function MembersMedicalTable(props) {
  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Name',
      headerClassName: 'bg-secondary text-white',
      flex: 2,
      editable: false,
    },

    {
      field: 'matricNum',
      headerClassName: 'bg-secondary text-white',
      headerName: 'Matriculation Number',
      flex: 2,
      editable: false, 
      hide: true,
    }, 

    {
      field: 'nokName',
      headerClassName: 'bg-secondary text-white',
      headerName: 'NOK Name',
      flex: 2,
      editable: false, 
    }, 

    {
      field: 'nokRs',
      headerClassName: 'bg-secondary text-white',
      headerName: 'NOK Relationship',
      flex: 2,
      editable: false, 
    }, 

    {
      field: 'nokNum',
      headerClassName: 'bg-secondary text-white',
      headerName: 'NOK Number',
      flex: 2,
      editable: false, 
    }, 

    {
      field: 'blood',
      headerClassName: 'bg-secondary text-white',
      headerName: 'Blood Type',
      flex: 1,
      editable: false, 
    }, 

    {
      field: 'allergies',
      headerClassName: 'bg-secondary text-white',
      headerName: 'Allergies',
      flex: 2,
      editable: false, 
      renderCell: (params) => { 
        return ( 
          hasAllergies(params)
        )
      }
    }, 

    {
      field: 'vaccinated',
      headerClassName: 'bg-secondary text-white',
      headerName: 'Vaccinated',
      flex: 1,
      editable: false, 
      renderCell: (params) => { 
        return (
          isVaccinated(params)
        )
      }
    }, 
  ];

  function isVaccinated(param) { 
    if (param.formattedValue) { 
      return (<CheckCircleIcon color='success'></CheckCircleIcon>);
    } else { 
      return (<CancelIcon color='danger'></CancelIcon>)
    }
  }

  function hasAllergies(param) { 
    if (param.formattedValue.length === 0) { 
      return (<InsertEmoticonIcon color='warning'></InsertEmoticonIcon>)
    }
  }

  const rows = [
    {id: 1, name: "Bernice Teo Wei Shan", matricNum: "01429468", nokName: "Susan Tan", nokRs: "Mother", nokNum: "91263719", blood: "O+", allergies: "Peanuts, Strawberies", vaccinated: 1},
    {id: 2, name: "Regine Tan Wei Ting", matricNum: "01494732", nokName: "Bob Chan", nokRs: "Father", nokNum: "89427492", blood: "A-", allergies: "", vaccinated: 1},
    {id: 3, name: "Ivanka Yeo", matricNum: "01329483", nokName: "Cherlin Huang", nokRs: "Sister", nokNum: "82761082", blood: "AB+", allergies: "Pancakes", vaccinated: 0},
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
          matricNum: false,
        },
      },
    }}
    pageSizeOptions={[10]}
    checkboxSelection={false}
    disableRowSelectionOnClick
  />
  );
}