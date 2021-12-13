import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {

    const navigation = [
        { id: 1, title: 'Home', path: '/' },
        { id: 2, title: 'Posts', path: '/posts' },
        { id: 3, title: 'Contacts', path: '/contacts' },
    ];

    const { pathname } = useRouter();
    console.log(pathname)

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                Logo
            </div>
            <div className={styles.links}>
                {navigation.map(({id, title, path}) => (
                    <Link key={id} href={path}>
                        <a className={pathname === path ? styles.active : null}>{title}</a>
                    </Link>
                ))}
            </div>
        </nav>
    )
}

export default Navbar;