import {useState} from 'react';
import MainHeader from "./components/MainHeader";
import PostList from "./components/PostList";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
    
  function modalVisibilityHandle() {
      setModalIsVisible(!modalIsVisible);
  }

  return (
    <>
      <MainHeader onCreatePost={modalVisibilityHandle}/>
      <main>
        <PostList isPosting={modalIsVisible} onStopPosting = {modalVisibilityHandle}/>
      </main>
    </>
  );
}

export default App;
