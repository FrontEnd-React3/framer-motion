import { motion } from "framer-motion";
import "./backdrop/backdrop.css";
import Backdrop from "./backdrop/Backdrop";
// dropin allows you to have multiple annimation states
const dropin = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: { duration: 6, type: "spring", damping: 20, stiffness: 500 }
  },
  exit: { y: "100vh", opacity: 0 }
};
const Modal = ({ handleClose, text }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        drag
        className="modal orange-gradient"
        onClick={e => e.stopPropagation()}
        variants={dropin}
        initial="hidden"
        animate="visible"
        exit="exit"
      ></motion.div>
      {/* to avoid eventbubeling, to prevent the modal to close every time an event inside of it is clicked  */}
    </Backdrop>
  );
};
export default Modal;
