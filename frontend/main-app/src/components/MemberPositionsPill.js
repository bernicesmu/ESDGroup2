import React, { useEffect, useState } from 'react';
import { Chip, Box } from '@mui/material';

const MemberPositionPill = (props) => { 
    const [pillArea, setPillArea] = useState(Array(0)); 

    useEffect(() => { 
        let newPillArea = []; 
        for (let position of props.positions.formattedValue) { 
            // bernice: deal with the Chip key
            newPillArea.push(<Chip 
                                label={position} 
                                sx={{mr: 1}} 
                                color={'secondary'}
                            />);
        }
        setPillArea(newPillArea);
    }, []);

    return ( 
        <div className='d-flex w-75' id={'Position'+props.id}> 
            {pillArea}
        </div>
    )
}

export default MemberPositionPill;