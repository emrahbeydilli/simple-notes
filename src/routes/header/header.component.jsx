import styles from "./header.module.css";
import { Fragment} from "react";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
    return (
        <Fragment>
            <header className={styles.container}>
            <div>Hoşgeldin Emrah!</div>
                <nav>
                    <Link>Yardım</Link>
                    <Link>Çıkış</Link>
                </nav>
            </header >
            <Outlet />
        </Fragment>
    );
}

export default Header;