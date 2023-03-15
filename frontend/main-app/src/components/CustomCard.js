import React, { useEffect, useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material';
import EventNotFound from '../assets/EventNotFound.png'
import ClubNotFound from '../assets/ClubNotFound.png';

export default function CustomCard(props) {
    function checkType(type) { 
        let buttonArea; 
        let defaultImage;
        if (type === 'event') { 
            buttonArea = (<CardActions>
                            <Button size="small">Join</Button>
                            <Button size="small" component="a" href="/Event">Learn More</Button>
                        </CardActions>);
            defaultImage = EventNotFound;
        } else if (type === 'club') { 
            buttonArea = (<CardActions>
                            {/* remember to add the GET params in the href below so as to retrieve the club name */}
                            <Button size="small" href={"/Members"}>View members</Button> 
                            <Button size="small" href={"/Events"}>View events</Button>
                        </CardActions>);
            defaultImage = ClubNotFound;
        }
        return (
            <Grid item key={props.name} xs={12} sm={6} md={4} lg={3}>
                <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}
                >
                <CardMedia
                    component="img"
                    sx={{
                    // 16:9
                    width: '60%', 
                    height: 'auto',
                    }}
                    image={defaultImage}
                    alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" textAlign={'center'}>
                    {props.name}
                    </Typography>
                    <Typography textAlign={'center'}>
                    {props.desc}
                    </Typography>
                </CardContent>
                {buttonArea}
                </Card>
            </Grid>
            );
        }

    return (
        checkType(props.type)
    );
}
