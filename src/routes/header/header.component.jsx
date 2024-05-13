import styles from "./header.module.css";
import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../utils/userContext";
import { signOutUser } from "../../utils/firebase.utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUserPlus, faRightToBracket, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const { user } = useContext(UserContext);
    return (
        <Fragment>
            <header className={styles.container}>
                <div className={styles.username}>{user ? user.displayName : "Simple Notes App"}</div>
                <nav>
                    {user ? (
                        <Fragment>
                            <Link>
                                <FontAwesomeIcon
                                    icon={faPlus}
                                    title="Not Ekle"
                                    size="lg"

                                />
                            </Link>
                            <Link onClick={signOutUser}>
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