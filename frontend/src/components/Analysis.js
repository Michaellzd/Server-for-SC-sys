import React from 'react';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';

function Analysis() {
    return (
        <div>
            <h2>Experiment Analysis</h2>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Paper style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <img src={require('../images/allVS.png')} alt="allVS" style={{ width: '100%', height: '120%' }} />
                        <p>VGG16 has a Recall of 0.823, ResNet50 of 0.888, MobileNet of 0.879, and EfficientNet of 0.8466.<br></br>
                        <br></br>
                            The Precision score is 0.920 for VGG16, 0.850 for ResNet50, 0.8156 for MobileNet, and 0.8518 for EfficientNet.<br></br>
                            <br></br>
                            F1-score is 0.864 for VGG16, 0.919 for ResNet50, 0.838 for MobileNet, and 0.846 for EfficientNet.
                        </p>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <img src={require('../images/only_acc.png')} alt="acc" />
                        <p>The accuracy after 50 training epochs is 99.2% for VGG16, 99.1% for ResNet50, 94.8% for MobileNet, and 99.3% for EfficientNet.</p>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper>
                        <Typography variant="h6" align="center">Efficient Net</Typography>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow style={{ fontWeight: 'bold' }}>
                                        <TableCell>
                                            <strong>Skin Cancer Classes</strong>
                                        </TableCell>
                                        <TableCell>
                                            <strong>Accuracy</strong>

                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow >
                                        <TableCell>Actinic keratoses</TableCell>
                                        <TableCell>0.94</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Basal cell carcinoma</TableCell>
                                        <TableCell>0.97</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Benign keratosis-like lesions</TableCell>
                                        <TableCell>0.97</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Dermatofibroma</TableCell>
                                        <TableCell>0.79</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Melanoma</TableCell>
                                        <TableCell>0.86</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Melanocytic nevi</TableCell>
                                        <TableCell>0.86</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Vascular lesions</TableCell>
                                        <TableCell>0.77</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>


                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper>
                        <Typography variant="h6" align="center">mbv2</Typography>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow style={{ fontWeight: 'bold' }}>
                                        <TableCell>
                                            <strong>Skin Cancer Classes</strong>
                                        </TableCell>
                                        <TableCell>
                                            <strong>Accuracy</strong>

                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Actinic keratoses</TableCell>
                                        <TableCell>0.94</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Basal cell carcinoma</TableCell>
                                        <TableCell>0.97</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Benign keratosis-like lesions</TableCell>
                                        <TableCell>0.97</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Dermatofibroma</TableCell>
                                        <TableCell>0.79</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Melanoma</TableCell>
                                        <TableCell>0.86</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Melanocytic nevi</TableCell>
                                        <TableCell>0.86</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Vascular lesions</TableCell>
                                        <TableCell>0.77</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper>
                        <Typography variant="h6" align="center">resnet</Typography>
                        <TableContainer>
                            <Table>
                                <TableHead>

                                    <TableRow style={{ fontWeight: 'bold' }}>
                                        <TableCell>
                                            <strong>Skin Cancer Classes</strong>
                                        </TableCell>
                                        <TableCell>
                                            <strong>Accuracy</strong>

                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Actinic keratoses</TableCell>
                                        <TableCell>0.81</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Basal cell carcinoma</TableCell>
                                        <TableCell>0.81</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Benign keratosis-like lesions</TableCell>
                                        <TableCell>0.71</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Dermatofibroma</TableCell>
                                        <TableCell>0.83</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Melanoma</TableCell>
                                        <TableCell>0.83</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Melanocytic nevi</TableCell>
                                        <TableCell>0.96</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Vascular lesions</TableCell>
                                        <TableCell>0.99</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper>
                        <Typography variant="h6" align="center">VGGNet</Typography>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow style={{ fontWeight: 'bold' }}>
                                        <TableCell>
                                            <strong>Skin Cancer Classes</strong>
                                        </TableCell>
                                        <TableCell>
                                            <strong>Accuracy</strong>

                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Actinic keratoses</TableCell>
                                        <TableCell>0.94</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Basal cell carcinoma</TableCell>
                                        <TableCell>0.97</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Benign keratosis-like lesions</TableCell>
                                        <TableCell>0.79</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Dermatofibroma</TableCell>
                                        <TableCell>0.99</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Melanoma</TableCell>
                                        <TableCell>0.86</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Melanocytic nevi</TableCell>
                                        <TableCell>0.86</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Vascular lesions</TableCell>
                                        <TableCell>0.77</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper>
                        <Typography variant="h6" align="center">Time and GPU Memory Record </Typography>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell><strong>Model</strong></TableCell>
                                        <TableCell><strong>Training Time</strong></TableCell>
                                        <TableCell><strong>inference Time</strong></TableCell>
                                        <TableCell><strong>Allocated GPU Memory</strong></TableCell>


                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>VGG16</TableCell>
                                        <TableCell>3097.12s</TableCell>
                                        <TableCell>1.2927s</TableCell>
                                        <TableCell>4375MB</TableCell>


                                    </TableRow>
                                    <TableRow>
                                        <TableCell>ResNet</TableCell>
                                        <TableCell>2776.94s</TableCell>
                                        <TableCell>0.7286s</TableCell>
                                        <TableCell>2769MB</TableCell>

                                    </TableRow>
                                    <TableRow>
                                        <TableCell>MobileNetV2</TableCell>
                                        <TableCell>2637.90s</TableCell>
                                        <TableCell>0.6151s</TableCell>
                                        <TableCell>1611MB</TableCell>

                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Efficent Net</TableCell>
                                        <TableCell>2646.42s</TableCell>
                                        <TableCell>0.8784s</TableCell>
                                        <TableCell>1611MB</TableCell>

                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>




            </Grid>
        </div>
    );
}

export default Analysis;
