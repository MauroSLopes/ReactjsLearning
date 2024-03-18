import { useNavigate } from "react-router-dom";
import styles from "./Modal.module.css";

function Modal({ children }) {
    const navigate = useNavigate();

    function modalCloserHandler(){
        navigate('..');
    }
    // A children prop component applier
    return <>
        <div className={styles.backdrop} onClick={modalCloserHandler}/>
        <dialog open className={styles.modal}>
            {children}
        </dialog>
    </>
};

export default Modal;