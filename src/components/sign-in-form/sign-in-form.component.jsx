// import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./sign-in-form.module.css";
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase.utils";

const defaultFormFields = {
    email: '',
    password: '',
};


const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (event) =>{
        event.preventDefault();
        try {
            const res = await signInAuthUserWithEmailAndPassword(email,password);
            console.log(res);
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h3>Kullanıcı Girişi</h3>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        label='E-Posta'
                        type='email'
                        required
                        name='email'
                        value={email}
                        onChange={handleChange}
                        placeholder="e-posta"
                    />
                    <input
                        label='Şifre'
                        type='password'
                        required
                        name='password'
                        value={password}
                        onChange={handleChange}
                        placeholder="şifre"
                    />
                    <button type='submit'>Giriş</button>
                </form>
            </div>
        </div>
    );
}

export default SignInForm;