import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import styles from './NewPosts.module.css';
import Modal from '../components/Modal';

function NewPosts({ onAddPost }){   
    const [currentBody, setCurrentBody] = useState('');
    const [currentAuthor, setCurrentAuthor] = useState('');

    // Store a description for a new post card
    function currentBodyHandler(event) {
        setCurrentBody(event.target.value);
    }

    // Store a author for a new post card
    function currentAuthorHandler(event) {
        setCurrentAuthor(event.target.value);
    }

    // Sending the storaged informations to the database via the "./PostList.jsx" file
    function submitHandler(event) {
        event.preventDefault();
        const postData = {
            body: currentBody,
            author: currentAuthor
        };
        onAddPost(postData);
        onCancel();
    }
    
    return(
        <Modal>
        <form className={styles.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={currentBodyHandler}/>
            </p>
            <p>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" required onChange={currentAuthorHandler}  />
            </p>
            <p className={styles.actions}>
                <Link to='..' type="button">Cancel</Link>
                <button>Submit</button>
            </p>
        </form>
        </Modal>
    );
}

export default NewPosts;