import "./App.css";
import SideBar from "./comp/SideBar";
import Chats from "./comp/Chats";
function App() {
  return (
    <div className="app">
      <div className="app_body">
        <SideBar />
        <Chats />
      </div>
    </div>
  );
}

export default App;
