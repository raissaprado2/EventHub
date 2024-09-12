import React from 'react';

const AuthButton = ({ label, onClick }) => (
    <button onClick={onClick}>
        {label}
    </button>
);

export default AuthButton;
