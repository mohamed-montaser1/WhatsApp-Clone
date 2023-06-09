import { FiEdit, FiMoreHorizontal } from "react-icons/fi";
import Chat from "./Chat";
import myImage from "/myImage.jpg";

type User = {
  name: string;
  src: string;
  lastText: string;
};

let users: Array<User> = [
  {
    name: "Mohamed Montaser",
    lastText: "عامل ايه يمعلم",
    src: myImage,
  },
  {
    name: "khalid Mohamed",
    lastText: "كنت بفكر اشتري كورسي تنصحني بإيه ؟",
    src: myImage,
  },
  {
    name: "Yonis Yassir",
    lastText:
      "كنت بفكر اجيب كيبورد ميكانيكال blue switch تنصحني بإيه بس تكون حاجه محترمه 🙂",
    src: myImage,
  },
  {
    name: "Hessein Nasser",
    lastText: "تمام يباشا ❤️",
    src: myImage,
  },
  {
    name: "Abdallah",
    lastText: "خلصانه يسطا هستناك عند المكان اللي اتفقنا نروحه️",
    src: myImage,
  },
  {
    name: "Waleed",
    lastText: "Can You Teach Me The Function In Js Because It's A SH*T",
    src: myImage,
  },
  {
    name: "AMR Youssif",
    lastText: "ناوي تيجي الجيم النهارده ولا فاكس ؟",
    src: myImage,
  },
  {
    name: "XAFRAID Client",
    lastText: "What Is The Salary Of This Project ?",
    src: myImage,
  },
  {
    name: "khalid Abdo",
    lastText: "يلا يسطا علشان نروح الدرس لسه فاضل 5 دقائق بس انجز",
    src: myImage,
  },
];

export default function Chats() {
  return (
    <>
      <div className="chats">
        <div className="header">
          <h2>Chats</h2>
          <div className="icons">
            <button>
              <FiEdit />
            </button>
            <button>
              <FiMoreHorizontal />
            </button>
          </div>
        </div>
        <input type="text" placeholder="Search Or Start A New Chat" />
        {/* <Chat /> */}
        {users.map((user: User) => {
          return (
            <Chat
              friendName={user.name}
              lastText={user.lastText}
              src={user.src}
            />
          );
        })}
      </div>
    </>
  );
}
