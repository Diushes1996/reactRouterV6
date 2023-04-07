import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const SinglePage = () => {

    const {id} = useParams()
    const [post, setPosts] = useState(null)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(data => setPosts(data))
    }, [id]);

    return (
        <div>
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </>
            )}
        </div>
    )
}

export default SinglePage;