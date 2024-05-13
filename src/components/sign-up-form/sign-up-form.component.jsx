import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./sign-up-form.module.css"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase.utils";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const navitage = useNavigate();

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
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            const res = await createUserDocumentFromAuth(user, { displayName });
            if (res) alert("Kullanıcı oluşturuldu! Giriş Yapabilirsiniz!");
            setFormFields(defaultFormFields);
            navitage("/");
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Kullanıcı kayıtlı!");
            }
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