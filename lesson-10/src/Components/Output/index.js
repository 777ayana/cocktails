import { Stack } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Output.css'
import { Link } from 'react-router-dom';


const Output = ({ data }) => {
    console.log(data);
    return (
        <Stack direction={'row'} flexWrap='wrap' justifyContent={'space-evenly'}>
            {
                data.map(el => (
                    <div className='cards' key={el.idDrink}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={el.strDrinkThumb}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {el.strDrink}
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Link to={'/detail/' + el.idDrink}>
                                    <Button size="small" color="primary">
                                        More...
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </div>
                ))
            }


        </Stack>
    );
};

export default Output;