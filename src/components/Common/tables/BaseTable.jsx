import React from 'react';
import {Paper, Table, TableBody, TableContainer, TableFooter, TableHead} from "@mui/material";

const BaseTable = ({children, header, footer}) => (
    <TableContainer component={Paper}>
        <Table  stickyHeader>
            <TableHead>
                {header}
            </TableHead>
            <TableBody>
                {children}
            </TableBody>
            <TableFooter>
                {footer}
            </TableFooter>
        </Table>
    </TableContainer>
);

export default BaseTable;