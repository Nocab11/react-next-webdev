import {useEffect} from "react";
import {useRouter} from "next/router";
import Heading from "../components/Heading";

const Error = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/')
        }, 3000)
        return () => {
            clearTimeout(timer);
        }
    }, [router])

    return (
        <Heading text={"404? Somethis is going wrong///"}>

        </Heading>
    )
}

export default Error;
