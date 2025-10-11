import { useContext, useState } from "react";
import "./EnterNamePopup.css";
import { useNavigate } from "react-router";
import { AuthContext } from "../../Context";

const EnterNamePopup = ({ dialogRef }) => {
  const auth = useContext(AuthContext);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  function handleClose() {
    dialogRef.current.close();
  }

  async function handleEnter() {
    try {
      const userResponse = await fetch(
        `http://localhost:3000/users/${auth.user.userId}`,
        {
          method: "PUT",
          body: JSON.stringify({
            id: auth.user.userId,
            name: name,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (userResponse.ok) {
        navigate("/leader-board");
      }
    } catch (err) {
      console.log(err);
    }
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
          <input
            type="text"
            placeholder="Enter your name..."
            className="border rounded w-full py-2 px-3 mb-6"
            onChange={(e) => setName(e.target.value)}
          />
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleEnter}
          >
            Enter
          </button>
        </div>
      </dialog>

      {/* <button onClick={handleOpen}>Show the dialog</button> */}
    </>
  );
};

export default EnterNamePopup;
