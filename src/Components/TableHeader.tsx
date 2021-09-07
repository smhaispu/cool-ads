import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import { columns } from '../Utils/Constants'
import { StyledTableCell } from './ListView.style';

const TableHeader = () => {
    return <TableHead>
        <TableRow>
            {columns.map((column) => (
                <StyledTableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                >
                    {column.label}
                </StyledTableCell>
            ))}
        </TableRow>
    </TableHead>

}


export default TableHeader;