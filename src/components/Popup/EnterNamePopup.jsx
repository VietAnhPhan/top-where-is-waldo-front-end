import { useRef } from "react";
import "./EnterNamePopup.css";

const EnterNamePopup = ({dialogRef}) => {
//   const dialogRef = useRef(null);

//   function handleOpen() {
//     dialogRef.current.showModal();
//   }

  function handleClose() {
    dialogRef.current.close();
  }

  return (
    <>
      <dialog ref={dialogRef}>
        <button autoFocus onClick={handleClose} className="">
          Close
        </button>
        <div className="p-40 flex flex-col">
            <p className="text-5xl">Congratulate!</p>
            <p className="mb-6">You complete this round</p>
            <input type="text" placeholder="Enter your name..." className="border rounded w-full py-2 px-3 mb-6"/>
            <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enter</button>
        </div>
      </dialog>

      {/* <button onClick={handleOpen}>Show the dialog</button> */}
    </>
  );
};

export default EnterNamePopup;
