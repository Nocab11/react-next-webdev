import {GetServerSideProps} from "next";
import ContactInfo from "../../components/ContactInfo";
import Head from "next/head";
import {contactType} from "../../types";
import {FC} from "react";

type contactTypeProps = {
    contact: contactType
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {id} = context.params
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await response.json();

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {contact: data}
    }
};

const Id: FC<contactTypeProps> = ({contact}) => {
    return (
        <>
            <Head>
                <title>Тайл c 1 контактом</title>
            </Head>
            <ContactInfo contact={contact}/>
        </>

    )
}

export default Id;
