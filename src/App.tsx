import Chats from "./components/Chats";
import MainText from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="page">
        <Sidebar />
        <Chats />
        <MainText />
      </div>
    </>
  );
}

export default App;
