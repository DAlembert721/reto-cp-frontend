import React from 'react';
import {useSelector} from "react-redux";
import { DataGrid } from '@mui/x-data-grid';
import {Box} from "@mui/material";

const CandyStoreTable = () => {
    const {data} = useSelector(state => state.candyStore);
    const columns = [
        {field: 'name', headerName: 'Nombre', width: 250,},
        {field: 'description', headerName: 'Descripcion', width: 200},
        {field: 'price', headerName: 'Precio', type: 'number', width: 200},
    ];
    return (
        <Box display="flex" flexDirection="colum">
            <Box sx={{height: 400, width: '100%'}}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </Box>
            <Box >

            </Box>
        </Box>
    );
}

export default CandyStoreTable;