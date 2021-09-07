import styled from 'styled-components'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';


export const StyledTableHeader = styled.div`
    display: flex;
    justify-content: space-around;
`


export const useStyles = makeStyles({
    root: {
        width: '880px',
        margin: '0 auto'
    },
    container: {
        maxHeight: 440,
        maxWidth: 880
    }
});

export const StyledTableCell = withStyles(() => ({
    head: {
        backgroundColor: '#5296d3',
        color: '#fff',
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

