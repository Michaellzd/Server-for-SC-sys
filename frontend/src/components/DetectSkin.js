import React, { useState } from 'react';
import axios from 'axios';


import { Container, Grid, Paper, Typography, Button, Box, Card, CardContent, CardMedia, LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },

  title: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: '2rem',
    marginBottom: theme.spacing(3),
  },

  body: {
    fontFamily: 'Open Sans',
    fontSize: '1.2rem',
    lineHeight: 1.8,
    marginBottom: theme.spacing(3),

  },
}));


function DetectSkin() {

  const classes = useStyles();

  const [selectedFile, setSelectedFile] = useState(null);
  const [results, setResults] = useState(null);
  const [chatText, setChatText] = useState('');

  


  const handleGPT = async (resultClass) => {
    try {
      //3001
      const response = await axios.put('http://localhost:3001/chat', { text: resultClass });
      setChatText(response.data.chat);
      console.log("aaaaaaaaaaaaaaaaaa:"+response.data.chat)
      setChatText(response.data.chat)
      // 处理 chatText
    } catch (error) {
      console.error(error);
    }
  };


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      alert('Please choose a file.');
      return;
    }
    if (!file.type.startsWith('image/')) {
      alert('Please choose an image file.');
      return;
    }
    setSelectedFile(file);
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      alert('Please choose a file.');
      return;
    }
    console.log(selectedFile)

    const formData = new FormData();
    formData.append('file', selectedFile);
    for (var value of formData.values()) {
      console.log(value);
    }

    try {
      const response = await axios.post('http://localhost:3001/api/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setResults(response.data);
      const results=response.data
      handleGPT(results.class);
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (

    <Container maxWidth="md">


      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Skin Cancer Detection System
        </Typography>
      </Box>
      <Box mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="contained-button-file"
                type="file"
                onChange={handleFileChange}
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                  Choose Image
                </Button>
              </label>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Button variant="contained" color="secondary" onClick={handleSubmit}>
                Detection
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>



      {selectedFile && (
        <Card>
          <CardMedia className={classes.media} image={URL.createObjectURL(selectedFile)} title="Uploaded Image" />
        </Card>
      )}
      {results && (
        <Box mt={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <Typography variant="h6" component="h2">
                  Result: {results.class}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <Typography variant="h6" component="h2">
                  Confidence: {results.confidence}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <Typography variant="h6" component="h2">
                  Time: {results.time_taken.toFixed(3)} s
                </Typography>
              </Paper>
            </Grid>
           
          </Grid>
        </Box>


      )}

{results&&(<Container maxWidth="md" className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
             
              <Box mt={2}>
                <Typography variant="h5" gutterBottom>
                  {chatText}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>)}


    </Container>



  );

}

export default DetectSkin;