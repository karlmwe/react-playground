import logo from './logo.svg';
//import './App.css';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import { green, orange } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import FormControl from '@material-ui/core/FormControl';
import { BluetoothDisabledSharp } from '@material-ui/icons';


function Answer(props) {

// props.shortText
// props.long
// props.selected
// props.id
// props.handleChange

  return (
    <Grid container spacing={3}>
      <Grid item xs={1}>
        <Radio
          checked={props.selected}
          onChange={()=>props.handleChange(props.id)}
          value={props.id}
          name={props.shortText}
          inputProps={{ 'aria-label': 'A' }}
        />        
      </Grid>
      <Grid item container xs={11}>
        <Grid item xs={12}>
          <Typography variant="h6">
            {props.shortText}
          </Typography>
          <Typography>
            {props.longText}
          </Typography>
        </Grid>
      </Grid>
    </Grid>

  );

}

function Answers(props) {

  // props.answers = [answer1, ..]
  // answer {id, shortText, longText}

  const [value, setValue] = React.useState('selected');

  const handleChange = (id) => {
    setValue(id);
  };

  const answers = props.answers.map((x,i) => 
    <Answer key={i} shortText={x.shortText} longText={x.longText} id={x.id} selected={value===x.id}
      handleChange={handleChange}
    />);

  return (
      <React.Fragment>
        {answers}
      </React.Fragment>
  );
}

function Question(props) {
  
  // props.question { title, description, answers = [{shortText, longText}, ..]}
  const q = props.question;

  const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(3),
      flexGrow: 1,
    },
    cover: {
      padding: theme.spacing(2),
      textAlign: 'left',
      
    },
    answers: {
      padding: theme.spacing(2),
      textAlign: 'left',
      
    },
    number: {
      color: theme.palette.getContrastText(theme.palette.secondary.light),
      backgroundColor: theme.palette.secondary.light,
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.cover}>
        <Grid container spacing={3}>
          <Grid item xs={1}>
            <Avatar className={classes.number}>{q.num}</Avatar>
          </Grid>
          <Grid item container xs={11}>
            <Grid item xs={12}>
              <Typography variant="h5">
                {q.title}
              </Typography>
              <Typography>
                {q.description}
              </Typography>
            </Grid>
            <Grid item className={classes.answers} xs={12}>
              <Answers answers={q.answers}/>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

function App() {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
        typography: {
          h5: {
            fontWeight: 700,
          },
          h6: {
            fontWeight: 700,
          },
        },        
      }),
    [prefersDarkMode],
  );

  const useStyles = makeStyles((theme) => ({
    container: {
      padding: theme.spacing(3),
    },
    
  }));

// props.question { title, description, answers = [answer1, ..]}
  const blabla = "In CSS, a margin is the space around an element's border, while padding is the space between an element's border and the element's content. Put another way, the margin property controls the space outside an element, and the padding property controls the space inside an element <br/>In CSS, a margin is the space around an element's border, while padding is the space between an element's border and the element's content. Put another way, the margin property controls the space outside an element, and the padding property controls the space inside an element"

  const questions  = [
                      {
                        num: 1, title: "Whats the question", description:blabla, 
                        answers: [
                          { id:1, shortText: "Fish", longText: "In the example below, a button is styled to look like a typical close button, with an X in the middle. Since there is nothing indicating that the purpose of the button is to close the dialog, the aria-label attribute is used to provide the label to any assistive technologies."},
                          { id:2, shortText: "Bird", longText: "b-In the example below, a button is styled to look like a typical close button, with an X in the middle. Since there is nothing indicating that the purpose of the button is to close the dialog, the aria-label attribute is used to provide the label to any assistive technologies."},
                          { id:3, shortText: "Dog", longText: "c-In the example below, a button is styled to look like a typical close button, with an X in the middle. Since there is nothing indicating that the purpose of the button is to close the dialog, the aria-label attribute is used to provide the label to any assistive technologies."},
                          { id:4, shortText: "Cat", longText: "d-In the example below, a button is styled to look like a typical close button, with an X in the middle. Since there is nothing indicating that the purpose of the button is to close the dialog, the aria-label attribute is used to provide the label to any assistive technologies."},
                      ]},
                      {
                        num: 2, title: "Another question", description:blabla, 
                        answers: [
                          { id:1, shortText: "Fish", longText: "In the example below, a button is styled to look like a typical close button, with an X in the middle. Since there is nothing indicating that the purpose of the button is to close the dialog, the aria-label attribute is used to provide the label to any assistive technologies."},
                          { id:2, shortText: "Bird", longText: "b-In the example below, a button is styled to look like a typical close button, with an X in the middle. Since there is nothing indicating that the purpose of the button is to close the dialog, the aria-label attribute is used to provide the label to any assistive technologies."},
                          { id:3, shortText: "Dog", longText: "c-In the example below, a button is styled to look like a typical close button, with an X in the middle. Since there is nothing indicating that the purpose of the button is to close the dialog, the aria-label attribute is used to provide the label to any assistive technologies."},
                          { id:4, shortText: "Cat", longText: "d-In the example below, a button is styled to look like a typical close button, with an X in the middle. Since there is nothing indicating that the purpose of the button is to close the dialog, the aria-label attribute is used to provide the label to any assistive technologies."},
                      ]},
                      {
                        num: 3, title: "And a bloody third", description:blabla, 
                        answers: [
                          { id:1, shortText: "Fish", longText: "In the example below, a button is styled to look like a typical close button, with an X in the middle. Since there is nothing indicating that the purpose of the button is to close the dialog, the aria-label attribute is used to provide the label to any assistive technologies."},
                          { id:2, shortText: "Bird", longText: "b-In the example below, a button is styled to look like a typical close button, with an X in the middle. Since there is nothing indicating that the purpose of the button is to close the dialog, the aria-label attribute is used to provide the label to any assistive technologies."},
                          { id:3, shortText: "Dog", longText: "c-In the example below, a button is styled to look like a typical close button, with an X in the middle. Since there is nothing indicating that the purpose of the button is to close the dialog, the aria-label attribute is used to provide the label to any assistive technologies."},
                          { id:4, shortText: "Cat", longText: "d-In the example below, a button is styled to look like a typical close button, with an X in the middle. Since there is nothing indicating that the purpose of the button is to close the dialog, the aria-label attribute is used to provide the label to any assistive technologies."},
                      ]},
                      {
                        num: 4, title: "The show must go on", description:blabla, 
                        answers: [
                          { id:1, shortText: "Fish", longText: "In the example below, a button is styled to look like a typical close button, with an X in the middle. Since there is nothing indicating that the purpose of the button is to close the dialog, the aria-label attribute is used to provide the label to any assistive technologies."},
                          { id:2, shortText: "Bird", longText: "b-In the example below, a button is styled to look like a typical close button, with an X in the middle. Since there is nothing indicating that the purpose of the button is to close the dialog, the aria-label attribute is used to provide the label to any assistive technologies."},
                          { id:3, shortText: "Dog", longText: "c-In the example below, a button is styled to look like a typical close button, with an X in the middle. Since there is nothing indicating that the purpose of the button is to close the dialog, the aria-label attribute is used to provide the label to any assistive technologies."},
                          { id:4, shortText: "Cat", longText: "d-In the example below, a button is styled to look like a typical close button, with an X in the middle. Since there is nothing indicating that the purpose of the button is to close the dialog, the aria-label attribute is used to provide the label to any assistive technologies."},
                      ]},
                      {
                        num: 5, title: "Und so weiter", description:blabla, 
                        answers: [
                          { id:1, shortText: "Fish", longText: "In the example below, a button is styled to look like a typical close button, with an X in the middle. Since there is nothing indicating that the purpose of the button is to close the dialog, the aria-label attribute is used to provide the label to any assistive technologies."},
                          { id:2, shortText: "Bird", longText: "b-In the example below, a button is styled to look like a typical close button, with an X in the middle. Since there is nothing indicating that the purpose of the button is to close the dialog, the aria-label attribute is used to provide the label to any assistive technologies."},
                          { id:3, shortText: "Dog", longText: "c-In the example below, a button is styled to look like a typical close button, with an X in the middle. Since there is nothing indicating that the purpose of the button is to close the dialog, the aria-label attribute is used to provide the label to any assistive technologies."},
                          { id:4, shortText: "Cat", longText: "d-In the example below, a button is styled to look like a typical close button, with an X in the middle. Since there is nothing indicating that the purpose of the button is to close the dialog, the aria-label attribute is used to provide the label to any assistive technologies."},
                      ]},
                    ];


  const qs = questions.map((x,i)=><Question question={x} key={i}/>);
  
  return (

    <div >
      <ThemeProvider theme={theme}>
      <CssBaseline />
        {qs}
      </ThemeProvider>
    </div>
  );
}

export default App;
