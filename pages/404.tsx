import {useEffect} from "react";
import {useRouter} from "next/router";

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
        <h1>404? Somethis is going wrong///</h1>
    )
}

export default Error;
