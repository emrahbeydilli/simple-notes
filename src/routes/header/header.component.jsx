import styles from "./header.module.css";
import { Fragment, useContext } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../utils/userContext";
import { signOutUser } from "../../utils/firebase.utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faPlus,
    faUserPlus,
    faRightToBracket,
    faRightFromBracket,
    faStickyNote
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const { user } = useContext(UserContext);
    const natigate = useNavigate();

    const logOut = async () => {
        await signOutUser();
        natigate("/");
    }
    return (
        <Fragment>
            <header className={styles.container}>
                <div className={styles.username}>{user ? user.displayName : "Simple Notes App"}</div>
                <nav>
                    {user ? (
                        <Fragment>
                            <Link to="/">
                                <FontAwesomeIcon
                                    icon={faStickyNote}
                                    title="Notları Listele"
                                    size="lg"
                                />
                            </Link>
                            <Link to="/addnote">
                                <FontAwesomeIcon
                                    icon={faPlus}
                                    title="Not Ekle"
                                    size="lg"

                                />
                            </Link>
                            <Link onClick={logOut}>
                                <FontAwesomeIcon
                                    icon={faRightFromBracket}
                                    title="Çıkış"
                                    size="lg"
                                />
                            </Link>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <Link to="/">
                                <FontAwesomeIcon
                                    icon={faRightToBracket}
                                    title="Giriş"
                                    size="lg"
                                />
                            </Link>
                            <Link to="/signup">
                                <FontAwesomeIcon
                                    icon={faUserPlus}
                                    title="Hesap Oluştur"
                                />
                            </Link>
                        </Fragment>
                    )}
                </nav>
            </header >
            <Outlet />
        </Fragment>
    );
}

export default Header;