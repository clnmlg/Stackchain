import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            flexDirection: 'column-reverse',
        },
    },
    appBar: {
        borderRadius: 16,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: 'rgb(16, 24, 38)',
    },
}))
