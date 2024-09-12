import React, { useState } from 'react';
import FormInput from '../components/FormInput';
import AuthButton from '../components/AuthButton';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async () => {
        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        const result = await res.json();
        if (result.token) {
            setMessage('Login successful!');
            // Armazenar token ou redirecionar o usuário
        } else {
            setMessage('Login failed');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <FormInput label="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <FormInput label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <AuthButton label="Login" onClick={handleLogin} />
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;
