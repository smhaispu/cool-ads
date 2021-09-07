import { makeStyles } from '@material-ui/core/styles';

export const ModalHeaderStyles = makeStyles({
    root: {
        backgroundColor: '#5296d3',
        color: "#fff",
        padding: '10px 15px'
    },
    buttonPrimary: {
        backgroundColor: '#5296d3',
        color: "#fff",
    },
    buttonPrimaryDisabled: {
        backgroundColor: '#5296d3',
        color: "#fff !important",
        opacity: '0.5'
    },
    buttonSecondary: {
        backgroundColor: "#fff",
        color: '#5296d3',
        margin: '5px'
    }

});