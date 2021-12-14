import Heading from "../components/Heading";
import styles from "../styles/Home.module.scss"
import Head from "next/head";

const Home = () => {
    return (
        <div className={styles.wrapper}>
            <Head>
                <title>Тайл на главной</title>
            </Head>
            <Heading text={"General page on spa"} />
            <p>Text general</p>
        </div>
    )
}

export default Home;
