import "react";
import { observer } from "mobx-react-lite";
import reactLogo from "./assets/react.svg";
import { useStore } from "./store";
import "./App.css";
import UserInfo from "./components/UserInfo";
import { UserInfoClass } from "./components/UserInfoClass";

function App() {
  const { userStore } = useStore();
  const addAge = () => {
    userStore.addAge();
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={addAge}>change</button>
        <UserInfo />
        <UserInfoClass />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default observer(App);
