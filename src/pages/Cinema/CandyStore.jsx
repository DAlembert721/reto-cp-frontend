import React from 'react';
import CinemaContainer from "../../components/Cinema/Common/CinemaContainer";
import CandyStoreList from "../../components/Cinema/CandyStore/CandyStoreList";
import {useDispatch} from "react-redux";
import {startGetAllCandyStoreItems} from "../../redux/reducers/candyStore";
import {Box, Grid} from "@mui/material";
import OrderDetail from "../../components/Cinema/CandyStore/OrderDetail";
import AddItemDialog from "../../components/Cinema/CandyStore/AddItemDialog";
import LoggedCaseDialog from "../../components/Cinema/CandyStore/LoggedCaseDialog";

const CandyStore = () => {
    const dispatch = useDispatch();
    const [selectedItem, setSelectedItem] = React.useState(null);
    const [carItems, setCarItems] = React.useState([]);
    const onAddItem = quantity => {


        if(carItems.some(i => i.id === selectedItem.id)){
            setCarItems(carItems.map(i => {
                if(selectedItem.id === i.id) {
                    return {
                        ...i,
                        quantity: i.quantity + quantity,
                    }
                };
                return i;
            }));
        }else {
            setCarItems([
                ...carItems,
                {
                    id: selectedItem.id,
                    name: selectedItem.description,
                    price: selectedItem.price,
                    quantity: quantity
                }
            ])
        }
        setSelectedItem(null);
    }
    React.useEffect(() => {
        dispatch(startGetAllCandyStoreItems());
    }, []);
    return(
        <CinemaContainer title="Dulceria">
            <Grid container spacing={2}>
                <CandyStoreList
                    setItem={setSelectedItem}
                />
                <OrderDetail
                    setSelectedItems={setCarItems}
                    selectedItems={carItems}
                />
            </Grid>
            <AddItemDialog
                item={selectedItem}
                setItem={setSelectedItem}
                onAddItem={onAddItem}
            />
            <LoggedCaseDialog />
        </CinemaContainer>
    );
}

export default CandyStore;