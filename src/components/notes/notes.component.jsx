import { useContext, useEffect, useState } from "react";
import styles from "./notes.module.css";
import { UserContext } from "../../utils/userContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../utils/firebase.utils";
import NoteCard from "../note-card/note-card.component";


const Home = () => {
    const [notes, setNotes] = useState([]);
    const {user} = useContext(UserContext);
    
    useEffect(() => {
        const unSub = onSnapshot(doc(db,"users",user.uid),(snapshot) => {
            setNotes(snapshot.data().notes);
        });
        return () => unSub();
    }, [user]);

    return ( 
        <div className={styles.container}>
            {
                notes.length > 0 ? (notes.map((element, index) => {
                    return <NoteCard key={index} element={element}/>
                })):(
                    <p>Herhangi bir not bulunamadı!</p>
                )
            }
        </div>
     );
}
 
export default Home;