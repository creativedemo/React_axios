import axios from 'axios';
import React, { useState } from 'react'

const Apis = () => {
    const baseURL = "https://jsonplaceholder.typicode.com/posts";

    const [post, setPost] = useState();

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
            console.log(response.data);
        });
    }, []);

    if (!post) return null;
    return (
        <>
            <div>
                <div>
                    {post.map((user) => (
                        <div className="user">{user.title}</div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Apis