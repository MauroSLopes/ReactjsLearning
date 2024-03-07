import { useState, useEffect } from 'react';
import NewPosts from "./NewPosts";
import Post from "./Post";
import Modal from "./Modal";
import styles from "./PostList.module.css";

function PostList({isPosting , onStopPosting}) { 
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts(){
            const response = await fetch('http://localhost:8080/posts')
            const responseData = await response.json();
            setPosts(responseData.posts);
        }
        fetchPosts()
    }, []);

    function addPostsHandler(postData){
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        setPosts((existingPosts) => ([postData, ...existingPosts]));
    }

    function modalContent(visibility) {
        let modalHandler;
        if (visibility) {
            modalHandler = (
                <Modal onVisible={onStopPosting}>
                    <NewPosts
                    onCancel={onStopPosting}
                    onAddPost={addPostsHandler}
                    />
                </Modal>)
        }
        return modalHandler
    }

    return (
        <>
            {modalContent(isPosting)}
            {posts.length > 0 && (
            <ul className={styles.posts}>
                {
                    posts.map((post) => (<Post key={post.id} author={post.author} body={post.body}/>))
                }
            </ul>
            )}
            {posts.length === 0 && (<div style={{textAlign: 'center', color: 'white'}}>
                <h2>No posts yet..</h2>
                <p>Start adding some!</p>
            </div>
            )}
             
        </>
    );
}

export default PostList;