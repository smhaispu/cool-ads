import React, { useState, useEffect, useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { columns } from '../Utils/Constants'
import TableHeader from './TableHeader'
import { Context } from '../state-management/context';
import { IColumnProps, IRowProps } from '../Utils/model';
import {useStyles} from './ListView.style'



export default function ListView() {
    const classes = useStyles();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const { state, dispatch } = useContext(Context);

    const handleChangePage = (event:any, newPage:number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event:any) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    const getData = async () => {
        const getStateFromLocal = localStorage.getItem('persistantState') && (JSON.parse(localStorage.getItem('persistantState') || '')?.list?.length > 0) ? JSON.parse(localStorage.getItem('persistantState') || '') : null;
        if (!getStateFromLocal) {
            const results = await fetch('https://my.api.mockaroo.com/clients.json?key=09504390');
            const response = await results.json();
            dispatch({ type:'SET_LOADING' ,payload: false });
            dispatch({ type:'SET_STATE' ,payload: response});
        }
    }

    const handleRowClick = (row:IRowProps, index:number) => {
        dispatch({
            type:'SET_MODAL_STATE',
            payload:{
                openModal: true,
                selectedRow: row,
                selectedRowIndex: index
            } 
        });
    }

    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        localStorage.setItem('persistantState', JSON.stringify({ ...state }));
    }, [state])


    return (
        <>
            {!state.loading ? <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHeader />
                        <TableBody>
                            {state.list.length > 0 && state.list.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row:IRowProps, index:number) => {
                                return (
                                    <TableRow data-testid={row.company_name} hover key={row.id} onClick={() => handleRowClick(row, index)}>
                                        {columns.map((column:IColumnProps, idx:number) => {
                                            if(column.id ==='budget_left'){
                                                const value = row['budget'] - row['budget_spent'];
                                                return (
                                                    <TableCell id={row.id + '-' + column.id} align={column.align} key={idx}>
                                                        {value}
                                                    </TableCell>
                                                );
                                            }else{
                                                const value = row[column.id];
                                                return (
                                                    <TableCell id={row.id + '-' + column.id} align={column.align} key={idx}>
                                                        {value}
                                                    </TableCell>
                                                );
                                            }
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    style={{maxWidth:'880px'}}
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={state.list.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper> : <div></div>}

        </>
    );
}
