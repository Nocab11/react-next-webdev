import Heading from "../components/Heading";
import styles from "../styles/Home.module.scss"

const Home = () => {
    return (
        <div className={styles.wrapper}>
            <Heading text={"General page on spa"} />
            <p>Text general</p>
        </div>
    )
}

export default Home;
