import React, { useEffect, useState } from 'react';
import { Checkbox } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import UploadForm from '../pages/UploadForm';



// Generate Order Data

export default function MembersTable(props) {
  const rows = [
    {id: 1, name: "Bernice Teo Wei Shan", matricNum: "1420382", email: "bernice.teo.2021@scis.smu.edu.sg", telegram: "@berrrniice", school: 'SCIS', year: 'Year 3'},
    {id: 2, name: "Regine Tan Wei Ting", matricNum: "1349249", email: "reginetan.2021@scis.smu.edu.sg", telegram: "@ginxed", school: 'SOSS', year: 'Year 1'},
    {id: 3, name: "Ivan Yeo", matricNum: "1392302", email: "ivanyeo.2021@scis.smu.edu.sg", telegram: "@ivanyeo", school: 'CIS', year: 'Year 5'},
  ];

  const [rowData, setRowData] = useState(rows); 

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
      headerName: 'Matric No.',
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

  useEffect(() => {
    if (props.data !== null) { 
      let id = 1; 
      let newRows = []; 
      for (let d of props.data) { 
        let singleRow = {} 
        singleRow.id = id; 
        singleRow.name = d.matriculatedName; 
        singleRow.matricNum = d.matricNum; 
        singleRow.email = d.smuEmail; 
        singleRow.telegram = d.telegramUser; 
        singleRow.school = d.degree; 
        singleRow.year = d.intakeYear; 
        newRows.push(singleRow)
        id++;
      }
      setRowData(newRows)
    }
  }, [])



  return (
    <DataGrid
    autoHeight
    rows={rowData}
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