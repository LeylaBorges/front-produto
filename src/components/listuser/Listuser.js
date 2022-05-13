import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import ApiService from "../../service/ApiService";
import { useState, useEffect } from "react";

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'nome',
        headerName: 'nome',
        width: 150,
        editable: true,
    },
    {
        field: 'linha',
        headerName: 'linha',
        width: 150,
        editable: true,
    },
    {
        field: 'validade',
        headerName: 'validade',
        type: 'number',
        width: 120,
        editable: true,
    },
    {
        field: 'valor',
        headerName: 'valor',
        type: 'number',
        width: 120,
        editable: true,
    },
    
];

const ListProduto = () => {

        const [produtos, setProdutos] = useState([]);     

        useEffect(() => {
            ApiService.listarUsuarios().then((res) => {
              setProdutos(res.data.map(({ id, nome, linha, validade, valor  }) => ({ id, nome, linha, validade, valor })));
            });
        
            return setProdutos([]);
          }, []);     
        
    return (
        <div className="card">
            <div style={{ height: 400, width: '100%' }} className="">
                <DataGrid
                    rows={produtos}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div>
        </div>

    )
}
export default ListProduto;