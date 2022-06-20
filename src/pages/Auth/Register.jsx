import React from 'react';
import AuthContainer from "../../components/Auth/Common/AuthContainer";
import Form from "../../components/Auth/Register/Form";

const Register = (props) => (
    <AuthContainer title="Crear Cuenta">
        <Form />
    </AuthContainer>
);

export default Register;