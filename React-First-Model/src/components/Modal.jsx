import styles from "./Modal.module.css";

function Modal({ children, onVisible}) {
    return <>
        <div className={styles.backdrop} onClick={onVisible}/>
        <dialog open className={styles.modal}>
            {children}
        </dialog>
    </>
};

export default Modal;