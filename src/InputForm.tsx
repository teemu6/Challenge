import React from 'react';
import { TextField, Button, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { UserInput } from './UserInput';

const inputFormStyles = makeStyles({
    textfield: {
      backgroundColor: "white",
    },
    paper: {
      backgroundColor: "#e6e6e6",
      marginBottom: "2em",
      border: "2px solid #bfbfbf",
      padding: "1em",
    },
    button: {
      backgroundColor: "white",
      borderRadius: "0.5em",
      textTransform: "none",
      margin: "0.5em",
    },
    inputflexcontainer: {
      display: "flex",
    },
    textcontainer: {
      alignSelf: "center",
    },
    textfieldcontainer: {
      flexGrow: 1,
      marginLeft: "1em",
    },
  });
  
  const InputForm: React.FC<{onSubmit : any}> = ({ onSubmit }) => {
    const classes = inputFormStyles();
    const nameinput = React.createRef<HTMLInputElement>();
    const descriptioninput = React.createRef<HTMLInputElement>();
    const commentinput = React.createRef<HTMLInputElement>();

    const handleSubmit = () => {
      if (nameinput.current && descriptioninput.current && commentinput.current) {
        const input: UserInput = {
          name: nameinput.current.value,
          description: descriptioninput.current.value,
          comment: commentinput.current.value
        };
        onSubmit(input);
        clearInputs();
      }
    }
  
    const clearInputs = () => {
      if (nameinput.current && descriptioninput.current && commentinput.current) {
        nameinput.current.value = "";
        descriptioninput.current.value = "";
        commentinput.current.value = "";
        nameinput.current.focus();
      }
    }
  
    return (
      <Paper className={classes.paper} elevation={3}>
        <Grid container spacing={1} >
          <Grid item xs={12} md={4}>
            <div className={classes.inputflexcontainer}>
              <div className={classes.textcontainer}>
                <span>Name</span>
              </div>
              <div className={classes.textfieldcontainer}>
                <TextField
                  variant="outlined"
                  inputRef={nameinput}
                  InputProps={{ className: classes.textfield, }}
                  fullWidth
                  autoFocus />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={8}>
          <div className={classes.inputflexcontainer}>
          <div className={classes.textcontainer}>
                <span>Description</span>
              </div>
              <div className={classes.textfieldcontainer}>
                <TextField
                  variant="outlined"
                  inputRef={descriptioninput}
                  InputProps={{ className: classes.textfield, }}
                  fullWidth
                />
              </div>
            </div>
          </Grid>
  
          <Grid item xs={12}>
          <div className={classes.inputflexcontainer}>
          <div className={classes.textcontainer}>
                <span>Comment</span>
              </div>
              <div className={classes.textfieldcontainer}>
                <TextField
                  variant="outlined"
                  inputRef={commentinput}
                  InputProps={{ className: classes.textfield, }}
                  fullWidth
                />
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={1} justify="flex-end">
          <Grid item>
            <Button className={classes.button} variant="contained" onClick={clearInputs}>Clear</Button>
          </Grid>
          <Grid item>
            <Button className={classes.button} variant="contained" onClick={handleSubmit}>Add</Button>
          </Grid>
        </Grid>
      </Paper>
    );
  }

  export default InputForm;