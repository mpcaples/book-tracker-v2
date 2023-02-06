import { Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import React from 'react'; 
import BookGauge from './BookGauge';

const TotalBooks = ({totalBooks, goal}) => {
    return (
        <Card sx={{
            backgroundColor: '#979797', 
            minHeight: '200px', 
            padding: '1rem'
        }}>

        <CardMedia
            sx={{
                padding: '1rem 8rem'
            }}
        >
            <BookGauge active={true} value={totalBooks} metricValue={totalBooks} min={0} max={goal} gaugeLabel="Total Books" />

        </CardMedia>
        <CardContent>
                
                <Typography variant="h5" 
                    sx={{color: 'white'}}
                >You have read {totalBooks} {totalBooks !== 1 ? "books" : "book"} out of {goal}.</Typography>
        </CardContent>
        </Card>
    )
}

export default TotalBooks; 