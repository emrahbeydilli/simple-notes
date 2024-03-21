import { Fragment} from "react";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
    return (
        <Fragment>
            <header className={styles.container}>
                <div>{currentUser && currentUser.displayName}</div>
                <nav>
                    <Link onClick={handleHelp}>Yardım</Link>
                    <Link onClick={signOutUserFromFirestore}>Çıkış</Link>
                </nav>
            </header >
            <Outlet />
        </Fragment>j
    );
}

export default Header;