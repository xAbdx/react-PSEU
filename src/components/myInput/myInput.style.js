import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    myStyle: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center',
        margin: "50px 0 0 0",
        fontSize: "20px"
    }
}));

export default useStyles;
