import {FC} from "react";
import {postType} from "../types";

type postInfoProps = {
    post: postType
}

const PostInfo:FC<postInfoProps> = ({ post }) => {
    const { title, body } = post || {};

    if (!post) {
        return <h1>Empty post</h1>
    }

    return (
        <>
            <p>{body}</p>
        </>
    );
}

export default PostInfo;