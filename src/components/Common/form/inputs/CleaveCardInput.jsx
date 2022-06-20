import React from 'react';
import Cleave from 'cleave.js/react';

const CleaveCardInput = (props) => {
    const { inputRef, handleType, ...rest  } = props;
    return(
        <Cleave
            ref={inputRef}
            options={{
                creditCard: true,
                onCreditCardTypeChanged: handleType
            }}
            placeholder="Ingrese su numero de tarjeta por favor"
            {...rest}
        />
    );
}

export default CleaveCardInput;