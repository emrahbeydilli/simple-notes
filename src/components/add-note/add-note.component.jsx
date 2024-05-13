import { useContext, useState } from "react";

import styles from "./add-note.module.css";
import { UserContext } from "../../utils/userContext";
import { addUserNotesToFirestore } from "../../utils/firebase.utils";
const defaultFormFields = {
    noteHeading: '',
    noteText: '',
};


const AddNote = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { noteHeading, noteText } = formFields;
    const {user} = useContext(UserContext);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await addUserNotesToFirestore(user.uid, formFields);
            if (res) alert("Not eklendi!");
            setFormFields(defaultFormFields);
        } catch (error) {
            console.log(error);
        }

    }
    
    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h3>Not Ekle</h3>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='noteHeading'
                        placeholder="Not Başlığı"
                        value={noteHeading}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="noteText"
                        placeholder="Not içeriği ekleyin..."
                        value={noteText}
                        onChange={handleChange}
                        required
                    />
                    <button type='submit'>Ekle</button>
                </form>
            </div>
        </div>
    );
}

export default AddNote;