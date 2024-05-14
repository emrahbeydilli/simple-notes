import styles from "./note-card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
const NoteCard = ({ element }) => {
    const { noteHeading, noteText } = element;

    const handleDeleteNote = () => {

    }

    return (
        <div className={styles.cardContainer}>
            <div className={styles.headingContainer}>
                <b>{noteHeading}</b>
                <div className={styles.fontawesomeContainer}>
                    <FontAwesomeIcon
                        icon={faPen}
                        color="gray"
                        onClick={handleDeleteNote}
                        className={styles.fontawesome}
                        title="Notu Düzelt"
                    />
                    <FontAwesomeIcon
                        icon={faTrash}
                        color="gray"
                        onClick={handleDeleteNote}
                        className={styles.fontawesome}
                        title="Notu Sil"
                    />
                </div>
            </div>
            <hr />
            <div>{noteText}</div>


        </div>
    );
}

export default NoteCard;