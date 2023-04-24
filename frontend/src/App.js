import React, { useState } from 'react';
import axios from 'axios';


import { Container, Grid, Paper, Typography, Button, Box, Card, CardContent, CardMedia, LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';

import Datatalking from './components/Datatalking';
import DetectSkin from './components/DetectSkin';

import Introduction from './components/Introduction';
import Analysis from './components/Analysis';
function App() {
 

return (
  
 
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Introduction/>} />
        <Route path="/DetectSkin" element={<DetectSkin/>} />
          <Route path="/datatalking" element={<Datatalking/>} />
          <Route path="/Analysis" element={<Analysis/>} />

        </Routes>
      </div>
    </Router>

)


}

export default App;
