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

function Introduction() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" style={{ marginTop: '120px' }}>
      <Typography variant="h4" component="h1" className={classes.title} gutterBottom>
      </Typography>
      <Paper >
        <Typography variant="body2"  className={classes.body} >
          This skin cancer classification system is built upon deep learning technology, which enables early detection and prevention of skin cancer. By leveraging cutting-edge image recognition algorithms, the system can accurately identify and classify various types of skin lesions with high efficiency and accuracy.<br /><br />
          As a user-friendly and intuitive system, it aims to empower individuals to take charge of their own health and well-being. In addition to the skin cancer detection feature, the system also provides users with informative resources and data related to skin cancer.<br /><br />
          This introduction page serves as a comprehensive guide to the data used in the system, providing users with a clear understanding of the data sources, analysis methods, and key findings. The data has been curated and processed to ensure accuracy, reliability, and relevance to the system's objectives.<br /><br />
        </Typography>
      </Paper>

      <img src={require('../images/dataset.png')} alt="Image"  width="70%" height="70%"  style={{ display: 'block', margin: '0 auto' }}/>
  
    </Container>
  );
}

export default Introduction;
