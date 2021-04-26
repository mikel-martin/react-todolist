import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { makeStyles } from '@material-ui/core';
import { React, useState } from 'react';
import { 
    Button, 
    Container, 
    Typography, 
    TextField, 
    Radio,
    RadioGroup,
    FormControlLabel,
    FormLabel,
    FormControl
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    field: {
        display: 'block',
        marginTop: 20,
        marginBottom: 20,
    }
});

function Create() {

    const history = useHistory();

    const classes = useStyles();

    // Title & Details state
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');

    // Title & Details errors state
    const [titleError, setTitleError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);

    // Category state
    const [category, setCategory] = useState('todos');

    const handleSubmit = (e) => {
        e.preventDefault();
        setTitleError(title === '' ? true : false);
        setDetailsError(details === '' ? true : false);
        fetch('http://localhost:8000/notes', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({title, details, category})
        }).then(() => history.push('/'));
    }

    return (
        <Container>
            <Typography 
                variant='h6'
                component='h2'
                color='textSecondary'
                gutterBottom
            >
                Create New Page
            </Typography>
            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <TextField
                    label='Note title'
                    variant='outlined'
                    color='primary'
                    className={classes.field}
                    error={titleError}
                    onChange={(e) => setTitle(e.target.value)}
                    fullWidth
                    required
                />          
                <TextField
                    label='Details'
                    variant='outlined'
                    color='primary'
                    className={classes.field}
                    rows={4}
                    error={detailsError}
                    onChange={(e) => setDetails(e.target.value)}
                    multiline
                    fullWidth
                    required
                />
                <FormControl className={classes.field}>
                    <FormLabel>Note Category</FormLabel>
                    <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)} >
                        <FormControlLabel value='todos' control={<Radio/>} label='Todos'/>
                        <FormControlLabel value='money' control={<Radio/>} label='Money'/>
                        <FormControlLabel value='reminders' control={<Radio/>} label='Reminders'/>
                        <FormControlLabel value='work' control={<Radio/>} label='Work'/>
                    </RadioGroup>
                </FormControl>
                <Button 
                    type='submit'
                    color='secondary'
                    variant='contained'
                    startIcon={<AddCircleOutlineIcon/>}
                >
                    Submit
                </Button>
            </form>
        </Container>
    );

}

export default Create;
