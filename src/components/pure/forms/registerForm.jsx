import React from 'react';
import {useState} from 'react';

const RegisterForm = () => {
    const initialData = [
        {
            name:'',
            surname:'',
            email:'',
            user: '',
            password: ''
        }
    ]

    const [data, setData] = useState(initialData) 
    
    return (
        <div>
            
        </div>
    );
}

export default RegisterForm;
