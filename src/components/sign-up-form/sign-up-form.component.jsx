const SignUpForm = () => {
    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h3>Hesap Oluştur</h3>
                <form className={styles.form}>
                    <input
                        label='E-Posta'
                        type='email'
                        required
                        name='email'
                        placeholder="e-posta"
                    />
                    <input
                        label='Şifre'
                        type='password'
                        required
                        name='password'
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

export default SignUpForm;