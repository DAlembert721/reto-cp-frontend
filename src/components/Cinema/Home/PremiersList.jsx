import React from 'react';
import {Box, Card, CardContent, CardMedia, Paper, Typography} from "@mui/material";
import {useSelector} from "react-redux";

const PremiersList = (props) => {
    const {data} = useSelector(state => state.premieres);
    return(
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2
            }}
        >
            {data.map(premier => (
                <Card
                    component={Paper}
                    key={premier.id}
                    className="flex">
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={premier.image}
                        alt={premier.name}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                {premier.name}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                {premier.description}
                            </Typography>
                        </CardContent>
                    </Box>

                </Card>
            ))}
        </Box>
    );
}

export default PremiersList;