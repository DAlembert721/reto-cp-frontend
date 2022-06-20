import React from 'react';
import {Box, Card, CardContent, CardMedia, Paper, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {useCheckAuth} from "../../../hooks/useCheckAuth";
import {useNavigate} from "react-router-dom";

const PremiersList = (props) => {
    const {data} = useSelector(state => state.premieres);
    const status = useCheckAuth();
    const navigate = useNavigate();
    const onClickPremier = () => {
        if(status === 'invite' || status === 'no-authenticated'){
            navigate('/auth/login');
        }else {
            navigate('/candy-store');
        }
    }
    return(
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                maxWidth: "100%",
                width: "100%",
            }}
        >
            {data.map(premier => (
                <Card
                    sx={{
                    }}
                    onClick={onClickPremier}
                    component={Paper}
                    key={premier.id}
                    className="flex cursor-pointer">
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={premier.image}
                        alt={premier.name}
                    />
                    <CardContent sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        width: "100%",
                        alignItems: 'end'
                    }}>
                        <Typography variant="h5">
                            {premier.name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            {premier.description}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
}

export default PremiersList;