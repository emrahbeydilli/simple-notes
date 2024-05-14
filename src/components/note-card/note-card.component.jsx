import styles from "./note-card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const NoteCard = ({ element }) => {
    const { noteHeading, noteText } = element;

    const handleDeleteNote = () => {

    }
    
    return (
        <div className={styles.cardContainer}>
            <div className={styles.headingContainer}>
                <b>{noteHeading}</b>
                <FontAwesomeIcon 
                icon={faTrash}
                color="gray"
                onClick={handleDeleteNote}
                className={styles.fontawesome}
                title="Notu Sil"
                />
            </div>
            <hr />
            <div>{noteText}</div>


        </div>
    );
}

export default NoteCard;