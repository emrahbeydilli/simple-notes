// import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./sign-in-form.module.css";

const defaultFormFields = {
    email: '',
    password: '',
};


const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const handleSubmit = async (event) =>{
        event.preventDefault();
        try {
            
        } catch (error) {
            
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
                        placeholder="e-posta"
                    />
                    <input
                        label='Şifre'
                        type='password'
                        required
                        name='password'
                        value={password}
                        placeholder="şifre"
                    />
                    <button type='submit'>Giriş</button>
                </form>
                <div className={styles.help}>
                   {/* <Link to="/">Üye Ol</Link> */}
                </div>
            </div>
        </div>
    );
}

export default SignInForm;