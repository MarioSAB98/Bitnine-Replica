import { useState } from 'react';
import { signupFields } from "../constants/FormFields"
import FormAction from "./FormAction";
import Input from "./Input";
import { validateSignup } from '../utils/ValidationSchema';
import axios from 'axios';
import { toast } from 'react-toastify';

const fields = signupFields;
let fieldsState = {};

fields.forEach(field => fieldsState[field.id] = '');

export default function Signup() {
    const [signupState, setSignupState] = useState(fieldsState);
    const [errors, setErrors] = useState([]);

    const handleChange = (e) => setSignupState({ ...signupState, [e.target.id]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        const error = validateSignup(signupState)
        error.then(error => {
            if (!error) {
                createAccount()
            }
            setErrors(error)
        })
    }

    const createAccount = async () => {
        try {
            await axios.post("http://localhost:3000/user/signup", signupState)
            toast.success("user created successfully!")

        }
        catch (e) {
            toast.error("server failed to create user!")
        }
    }

    return (
        <>
            {errors && <div className="bg-red-600 text-white">{errors.map(error => error.message)}</div>}
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="">
                    {
                        fields.map(field =>
                            <Input
                                key={field.id}
                                handleChange={handleChange}
                                value={signupState[field.id]}
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
                    <FormAction handleSubmit={handleSubmit} text="Signup" />
                </div>



            </form>
        </>
    )
}