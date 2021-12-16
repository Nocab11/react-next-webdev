import {GetStaticProps} from "next";
import Link from "next/link";
import Head from "next/head";
import {contactType} from "../../types";
import {FC} from "react";

type contactTypeProps = {
    contacts: [contactType]
}

export const getStaticProps:GetStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json();

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {contacts: data}
    }
};

const Contacts:FC<contactTypeProps> = ({ contacts }) => {

    return (
        <>
            <Head>
                <title>Тайл, все контакты</title>
            </Head>
            <ul>
                {contacts && contacts.map(({id, name, email}) =>
                    <li key={id}>
                        <Link href={`/contacts/${id}`}>
                            {name}
                        </Link>
                    </li>
                )}
            </ul>
        </>
    )
}

export default Contacts;
