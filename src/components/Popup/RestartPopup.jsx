import "./EnterNamePopup.css";

const RestartPopup = ({ dialogRef, onRestart }) => {
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
          <p className="text-5xl mb-8">Are you want to restart?</p>

          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer"
            onClick={onRestart}
          >
            Yes, I want to restart
          </button>
        </div>
      </dialog>
    </>
  );
};

export default RestartPopup;
