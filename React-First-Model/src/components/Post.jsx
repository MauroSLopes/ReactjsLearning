import styles from './Post.module.css';

function Post(props) {
    return (
        <li className={styles.post}>
            <p className={styles.author}>{props.author}</p>
            <p className={styles.text}>{props.body}</p>
        </li>
    );
}

export default Post;