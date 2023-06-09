type Props = {
  src: string;
  lastText: string;
  friendName: string;
};

function Chat({ src, lastText, friendName }: Props) {
  return (
    <>
      <div className="chat">
        <div className="image">
          <img src={src} alt="Friend's Image" />
        </div>
        <div className="info">
          <div className="info__header">
            <h4 className="name">{friendName}</h4>
            <p className="data">
              {
                [
                  "10:40",
                  "12:20",
                  "11:10",
                  "06:05",
                  "09:40",
                  "07:45",
                  "08:42",
                  "12:49",
                ][Math.floor(Math.random() * 8)]
              }{" "}
              {["AM", "PM"][Math.floor(Math.random() * 2)]}
            </p>
          </div>
          <p className="info__body">{lastText}</p>
        </div>
      </div>
    </>
  );
}

export default Chat;
