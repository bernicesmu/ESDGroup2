import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import Regine from '../assets/Regine.png';
import Bernice from '../assets/Bernice.png';
import Ivan from '../assets/Ivan.png';

export default function EventPhotos() {
    const [mainImg, setMainImg] = useState(Regine); 

    function handleChangeMainImg(event) { 
        setMainImg(event.target.src)
    }

    return ( 
        <Grid container marginX='auto' marginBottom={5}>
            <Grid item xs={1}></Grid>
            <Grid item xs={7}>
                <Box
                    component="img"
                    sx={{height: 420, width: 'auto', marginX: 'auto', display: 'block'}}
                    src={mainImg}
                />
            </Grid>
            <Grid item xs={3}>
                <Grid container rowSpacing={2}>
                    <Grid item key={1} xs={12}>
                        <Box
                            component="img"
                            sx={{
                            height: 130,
                            display: 'block',
                            marginX: 'auto'
                            }}
                            src={Regine}
                            onClick={(event) => handleChangeMainImg(event)}
                        />
                    </Grid>
                    <Grid item key={2} xs={12}>
                        <Box
                            component="img"
                            sx={{
                            height: 130,
                            display: 'block',
                            marginX: 'auto'
                            }}
                            src={Bernice}
                            onClick={(event) => handleChangeMainImg(event)}
                        />
                    </Grid>
                    <Grid item key={3} xs={12}>
                        <Box
                            component="img"
                            sx={{
                            height: 130,
                            display: 'block',
                            marginX: 'auto'
                            }}
                            src={Ivan}
                            onClick={(event) => handleChangeMainImg(event)}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
    )
}