import styles from "./header.module.css";
import { Fragment, useContext} from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../utils/userContext";
import { signOutUser } from "../../utils/firebase.utils";

const Header = () => {
    const {user} = useContext(UserContext);
    return (
        <Fragment>
            <header className={styles.container}>
            <div className={styles.username}>{user && `Hoşgeldin ${user.displayName}`}</div>
                <nav>
                    <Link>Yardım</Link>
                    {user ? <Link onClick={signOutUser}>Çıkış</Link> : (
                        <Fragment>
                            <Link to="/">Giriş</Link>
                            <Link to="/signup">Üye Ol</Link>
                        </Fragment>
                    )}
                </nav>
            </header >
            <Outlet />
        </Fragment>
    );
}

export default Header;