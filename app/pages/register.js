import React, { useState } from 'react';
import FormInput from '../components/FormInput';
import AuthButton from '../components/AuthButton';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async () => {
        const res = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        const result = await res.json();
        if (result.success) {
            setMessage('User registered successfully!');
        } else {
            setMessage('Error registering user');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <FormInput label="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <FormInput label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <AuthButton label="Register" onClick={handleRegister} />
            {message && <p>{message}</p>}
        </div>
    );
};

export default Register;
