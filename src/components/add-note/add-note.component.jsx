import styles from "./add-note.module.css";
const AddNote = () => {
    
    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h3>Not Ekle</h3>
                <form className={styles.form}>
                    <input
                        type='text'
                        required
                        name='heading'
                        placeholder="Not Başlığı"
                    />
                    <textarea
                        name="text"
                        placeholder="Not içeriği ekleyin..."
                        required
                    />
                    <button type='submit'>Ekle</button>
                </form>
            </div>
        </div>
    );
}

export default AddNote;