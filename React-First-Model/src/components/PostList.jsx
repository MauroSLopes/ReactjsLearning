import { useState, useEffect } from 'react';
import Post from "./Post";
import styles from "./PostList.module.css";

function PostList() {
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    // Executes a function only on page load
    useEffect(() => {
        // Get posts from DataBase
        async function fetchPosts() {
            setIsFetching(true);
            const response = await fetch('http://localhost:8080/posts')
            const responseData = await response.json();
            setPosts(responseData.posts);
            setIsFetching(false);
        }
        fetchPosts()
    }, []);

    // Sends to DataBase posts
    function addPostsHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setPosts((existingPosts) => ([postData, ...existingPosts]));
    }

    return (
        <>
            {/* if the database posts information response is loaded and the size of the array is
            greater than 0, render posts cards*/}
            {
            !isFetching && posts.length > 0 && (
                <ul className={styles.posts}>
                    {
                        posts.map((post) => (<Post key={post.id} author={post.author} body={post.body} />))
                    }
                </ul>
            )
            }

            {/* If the database posts information is loaded and the posts array is empty.
            Render the "No posts yet.." text */}
            
            {
            !isFetching && posts.length === 0 && (<div style={{ textAlign: 'center', color: 'white' }}>
                <h2>No posts yet..</h2>
                <p>Start adding some!</p>
            </div>
            )
            }

            {/* If the database posts information is delayed, render the "loading" text */}
            
            {isFetching && (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <p>Loading...</p>
                </div>
            )}
        </>
    );
}

export default PostList;