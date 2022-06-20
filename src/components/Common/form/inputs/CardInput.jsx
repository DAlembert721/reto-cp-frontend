import React, {useId} from 'react';
import {Box, TextField} from "@mui/material";
import CleaveCardInput from "./CleaveCardInput";

const imageUrls = [
    "https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png",
    "https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_vrt_rev_92px_2x.png",
    "https://www.discover.com/company/images/newsroom/media-downloads/discover.png",
    "https://s1.q4cdn.com/692158879/files/design/svg/american-express-logo.svg",
    "https://cdn4.iconfinder.com/data/icons/simple-peyment-methods/512/diners_club-512.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JCB_logo.svg/1280px-JCB_logo.svg.png"
]


const CardInput = ({card, handleInputChange}) => {
    const id = useId();
    const [cardTypeUrl, setCardTypeUrl] = React.useState('');
    const handleType = (type) => {
        if(type === "visa") {
            setCardTypeUrl(imageUrls[0]);
        } else if(type === "mastercard") {
            setCardTypeUrl(imageUrls[1]);
        } else if(type === "discover") {
            setCardTypeUrl(imageUrls[2]);
        } else if(type === "amex") {
            setCardTypeUrl(imageUrls[3]);
        } else if(type === "diners") {
            setCardTypeUrl(imageUrls[4])
        } else if(type === "jcb") {
            setCardTypeUrl(imageUrls[5]);
        }
    }
    return(
        <Box  sx={{
            display: 'flex',
            flexDirection: 'row',
            flex: "auto",
            width: "100%",
        }}

        >
            <Box
                width="80%"
            >
                <TextField
                    id={id}
                    fullWidth
                    name="card"
                    value={card}
                    delimiter="-"
                    label="Numero de tarjeta"
                    onChange={handleInputChange}
                    placeholder="Ingrese su numero de tarjeta por favor"
                    InputProps={{
                        inputComponent: CleaveCardInput,
                        inputProps: {
                            handleType
                        }
                    }}
                    required
                />
            </Box>

            <Box
                width="20%"
                display="flex"
                justifyContent="center"
            >
                {cardTypeUrl &&
                    <img
                        style={{maxWidth: "60px"}}
                        src={cardTypeUrl}
                        alt="Card logo"/>
                }
            </Box>
        </Box>

    );
}

export default CardInput;