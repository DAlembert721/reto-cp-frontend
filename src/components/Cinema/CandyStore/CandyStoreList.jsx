import React from 'react';
import {useSelector} from "react-redux";
import {Box, Grid, IconButton, List, ListItem, ListItemText, Paper, Typography} from "@mui/material";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';


const CandyStoreList = ({setItem}) => {
    const {data} = useSelector(state => state.candyStore);
    return (
        <Grid item xs={12} md={3}>
            <Typography
                component="div"
                variant="subtitle1"
            >
                Lista de Productos
            </Typography>
            <List sx={{
                width: '100%',
                bgcolor: 'background.paper',
                maxHeight: 500,
                overflow: 'auto'
            }}>
                {data.map((item) => (
                    <ListItem
                        component={Paper}
                        key={item.id}
                        secondaryAction={
                            <IconButton onClick={() => setItem(item)}>
                                <AddCircleRoundedIcon />
                            </IconButton>
                        }
                    >
                        <ListItemText
                            primary={`Nombre: ${item.description}`}
                            secondaryTypographyProps={{
                                component: "div"
                            }}
                            secondary={
                                <Box sx={{
                                    display: "flex",
                                    flexDirection: "column"
                                }}>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {`Precio: ${item.price}`}
                                    </Typography>
                                    <Typography
                                        component="div"
                                        variant="body2"
                                        style={{
                                            wordWrap: "break-word"
                                        }}
                                    >
                                        {`Descripcion: ${item.name}`}
                                    </Typography>
                                </Box>
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </Grid>

    );
}

export default CandyStoreList;