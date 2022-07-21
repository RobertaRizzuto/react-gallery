import "./index.css";

const Modal = ({source, visibility,closeModal}) => {
   
  return (
    <>
    {visibility ? ( <div className="Modal" onClick={closeModal}><img src={source} alt="image" /> </div>) : (null)}
      
   </>
  );
};

export default Modal;
