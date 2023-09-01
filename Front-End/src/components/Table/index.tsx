import React from "react";
import { Table as TableUi, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Rows } from "../../types";

const Table: React.FC<any> = ({ data }) => {

    const rows:Array<Rows> = [];
    data.map((row:any) => {
        const date = row.commit.author.date
        const user = row.author.login
        const mensaje = row.commit.message
        const hash = row.sha
        rows.push({ date, user, mensaje, hash })
    })

    return (

        <TableContainer component={Paper}>
            <TableUi sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell >User</TableCell>
                        <TableCell >Commit message</TableCell>
                        <TableCell >Hash</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row: Rows) => (
                        <TableRow
                            key={row.date}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.user}</TableCell>
                            <TableCell>{row.mensaje}</TableCell>
                            <TableCell>{row.hash}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </TableUi>
        </TableContainer>
    );
}

export default Table;
