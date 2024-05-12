import styles from "./header.module.css";
import { Fragment} from "react";
import { Outlet, Link } from "react-router-dom";

const Header = ({currentUser}) => {
    return (
        <Fragment>
            <header className={styles.container}>
            <div>{currentUser && `Hoşgeldin ${currentUser}`}</div>
                <nav>
                    <Link>Yardım</Link>
                    {currentUser ? <Link>Çıkış</Link> : (
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