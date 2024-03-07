import {useState} from 'react'; 
import styles from './NewPosts.module.css';

function NewPosts({onCancel, onAddPost}){   
    const [currentBody, setCurrentBody] = useState('');
    const [currentAuthor, setCurrentAuthor] = useState('');

    function currentBodyHandler(event) {
        setCurrentBody(event.target.value);
    }

    function currentAuthorHandler(event) {
        setCurrentAuthor(event.target.value);
    }

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
                <button type="button" onClick={onCancel}>Cancel</button>
                <button>Submit</button>
            </p>
        </form>

    );
}

export default NewPosts;