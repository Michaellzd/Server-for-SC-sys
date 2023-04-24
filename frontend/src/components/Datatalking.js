import React from 'react';



import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
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


  paper: {
    padding: theme.spacing(3),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },


}));

function Datatalking() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" style={{ marginTop: '120px' }}>
       <img src={require('../images/ham.png')} alt="Image"  width="70%" height="70%"  style={{ display: 'block', margin: '0 auto' }}/>
  <Typography variant="h4" component="h1" className={classes.title} style={{ textAlign: 'center' }} gutterBottom>
    HAM10000 Dataset
  </Typography>
      <Paper >
        <Typography variant="body2" className={classes.body} >
            HAM10000 is a widely used and representative dataset that contains 10,015 skin pathology images. The images were collected from primary skin disease clinics at different locations over the past 20 years by the Department of Dermatology at the Medical University of Vienna in Austria and the skin cancer practice department of Cliff Rosendahl in Queensland. The collection method of this dataset has several advantages that distinguish it from other datasets.<br></br>
            <br></br>
            First, all images were inspected by dermatologists and labeled. Images with problems that were artificially detected based on the labeled images were then removed. Therefore, this dataset was collected and labeled by frontline dermatologists, which guarantees its authenticity and reliability.<br></br>
            <br></br>
            Second, all images in this dataset have high quality and resolution, which is an excellent signal for identification and classification.<br></br>
            <br></br>
            Furthermore, this dataset includes skin pathology images of various diseases other than malignant melanoma, unlike most previous datasets that only stored pathology images of malignant melanoma. The images of other skin diseases selected were representative pathology images of a duration of more than 1.5 years. A duration of more than 1.5 years was chosen to select some special lesions so that this dataset can be extensively used.<br></br>
            <br></br>
            The naming of the classes in which the dataset is divided is also very particular. Skin disease is a particularly difficult and challenging disease to diagnose and treat pathologically. Thus, this dataset has standardized seven classes to avoid ambiguous classification, which could otherwise cause unnecessary misunderstandings.<br></br>
        </Typography>
      </Paper>
    </Container>
  );
}



export default Datatalking;
