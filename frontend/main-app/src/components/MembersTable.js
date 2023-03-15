import React, { useEffect, useState } from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import MemberPositionPill from './MemberPositionsPill';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Title from './Title';

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
      field: 'yearJoined',
      headerClassName: 'bg-secondary text-white',
      headerName: 'Year Joined',
      flex: 1,
      editable: false, 
    }, 

    {
      field: 'positions',
      headerClassName: 'bg-secondary text-white',
      headerName: 'Positions',
      flex: 4,
      editable: false, 
      renderCell: (params) => { 
        return (<MemberPositionPill positions={params}/>)
      },
    }, 

    {
      field: 'active',
      headerClassName: 'bg-secondary text-white',
      headerName: 'Active',
      flex: 1,
      editable: false, 
      renderCell: (params) => { 
        return (
          isActive(params)
        )
      }
    }, 
  ];

  function isActive(param) { 
    if (param.formattedValue) { 
      return (<CheckCircleIcon color='success'></CheckCircleIcon>);
    } else { 
      return (<CancelIcon color='danger'></CancelIcon>)
    }
  }

  const rows = [
    {id: 1, name: "Bernice Teo Wei Shan", email: "bernice.teo.2021@scis.smu.edu.sg", telegram: "@berrrniice", yearJoined: "2021", positions: ["Vice President", "8th DAP Mentor"], active: 1},
    {id: 2, name: "Regine Tan Wei Ting", email: "reginetan.2021@scis.smu.edu.sg", telegram: "@ginxed", yearJoined: "2021", positions: ["CR Director", "8th DAP Mentee"], active: 1},
    {id: 3, name: "Ivan Yeo", email: "ivanyeo.2021@scis.smu.edu.sg", telegram: "@ivanyeo", yearJoined: "2021", positions: ["8th DAP Mentee"], active: 0},
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
    }}
    pageSizeOptions={[10]}
    checkboxSelection={false}
    disableRowSelectionOnClick
  />
  );
}