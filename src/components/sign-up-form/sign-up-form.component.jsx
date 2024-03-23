import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./sign-up-form.module.css"

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Şifreler uyuşmuyor!');
            return;
        }

        try {
            
        } catch (error) {
            
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h3>Hesap Oluştur</h3>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        label='Ad Soyad'
                        type='text'
                        required
                        name='displayName'
                        value={displayName}
                        onChange={handleChange}
                        placeholder="ad soyad"
                    />
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
                    <input
                        label='Şifre'
                        type='password'
                        required
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={handleChange}
                        placeholder="şifre tekrarı"
                    />
                    <div>
                        <input type="checkbox" name="agreement" id="agreement" />
                        <Link className={styles.agreement}>Sözleşme</Link>'yi okudum anladım.
                    </div>
                    <button type='submit'>Kayıt Ol</button>
                </form>
            </div>
        </div>
    );
}

export default SignUpForm;