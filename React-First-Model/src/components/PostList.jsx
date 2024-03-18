import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import styles from "./PostList.module.css";

function PostList() {
    const posts = useLoaderData();

    return (
        <>
            {/* if the database posts information response is loaded and the size of the array is
            greater than 0, render posts cards*/}
            {
            posts.length > 0 && (
                <ul className={styles.posts}>
                    {
                        posts.map((post) => (
                            <Post key={post.id} id={post.id} author={post.author} body={post.body} />))
                    }
                </ul>
            )
            }

            {/* If the database posts information is loaded and the posts array is empty.
            Render the "No posts yet.." text */}
            
            {
            posts.length === 0 && (<div style={{ textAlign: 'center', color: 'white' }}>
                <h2>No posts yet..</h2>
                <p>Start adding some!</p>
            </div>
            )
            }
        </>
    );
}

export default PostList;