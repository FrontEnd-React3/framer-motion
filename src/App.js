import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Modal from "./components/Modal";
// AnimatePresence is to keep it open for a while before closing so we can appreciate the closingAnimation
// making folder with the / = making 2 folders
// https://www.youtube.com/watch?v=SuqU904ZHA4
// npm install --save styled-componentspm install --save styled-components
// https://blog.maximeheckel.com/posts/the-physics-behind-spring-animations/
// https://www.w3schools.com/howto/howto_css_image_overlay_icon.asp
const Button = styled(motion.button)`
  background: red;
`;
function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div className="App">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="save-button"
        onClick={() => null}
      >
        Launch modal
      </motion.button>
      {/* this is my personal adding */}
      <Button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="save-button"
        onClick={() => (modalOpen ? close() : open())}
      >
        Launch modal
      </Button>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </div>
    // AnimatePresence = not working
    // it will take the props of modalOpen when closed, handleClose is a specific attribute to Modal
    );
}

export default App;
