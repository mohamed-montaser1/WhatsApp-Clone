import { BsChatText } from "react-icons/bs";

function MainText() {
  return (
    <>
      <div className="main">
        <div className="icon">
          <BsChatText />
        </div>
        <h1>WhatsApp for Windows</h1>
        <p>
          Send and receive messages without keeping your phone online. <br />{" "}
          use WhatsApp on up to 4 linked devices and 1 phone at the same time.
        </p>
      </div>
    </>
  );
}

export default MainText;
