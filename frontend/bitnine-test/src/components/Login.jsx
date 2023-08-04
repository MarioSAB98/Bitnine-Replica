import { useState } from 'react';
import { loginFields } from "../constants/FormFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import { validateLogin } from '../utils/ValidationSchema';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

export default function Login() {
    const [loginState, setLoginState] = useState(fieldsState);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate()

    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const error = validateLogin(loginState)
        error.then(error => {
            if (!error) {
                authenticateUser()
            }
            setErrors(error)
        })
    }

    //Handle Login API Integration here
    const authenticateUser = async () => {
        try {
            const { token } = await (await axios.post("http://localhost:3000/user/login", loginState)).data
            console.log(token)
            toast.success("user found!")
            navigate("/home")
        }
        catch (e) {
            toast.error("user not found!")
        }
    }

    return (
        <>
            {errors && <div className="bg-red-600 text-white">{errors.map(error => error.message)}</div>}
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="-space-y-px">
                    {
                        fields.map(field =>
                            <Input
                                key={field.id}
                                handleChange={handleChange}
                                value={loginState[field.id]}
                                labelText={field.labelText}
                                labelFor={field.labelFor}
                                id={field.id}
                                name={field.name}
                                type={field.type}
                                isRequired={field.isRequired}
                                placeholder={field.placeholder}
                            />

                        )
                    }
                </div>

                <FormExtra />
                <FormAction handleSubmit={handleSubmit} text="Login" />

            </form>
        </>
    )
}