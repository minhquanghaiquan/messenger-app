import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/UI/Card';
import './style.css'

const LoginPage = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Layout>
            <div className="loginContainer">
                <Card>
                    <form>
                        <input
                            type="text"
                            name="email"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            placeholder="Email"
                        />

                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e)=> setEmail(e.target.value)}
                            placeholder="Password"
                        />

                        <div>
                            <button>Login</button>
                        </div>
                    </form>
                </Card>
            </div>
        </Layout>
    );
}

export default LoginPage;
