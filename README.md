# USE MOBX REACT

install:
```
npm install use-mobx-react
```


example:
```ts
import { configure, makeAutoObservable } from "mobx";
import { useMobxReact } from "use-mobx-react";

configure({ enforceActions: "observed" });

interface UserInfo {
  username: string;
  age: number;
}
class UserStore {
  constructor() {
    makeAutoObservable(this);
  }
  userInfo: UserInfo = {
    username: "OhMyName",
    age: 0,
  };
}


const store = new UserStore();
const { useStore, storeContext } = useMobxReact(store);
export { useStore, store, storeContext };
```

in react components:
```ts
import { observer } from "mobx-react-lite";
import * as React from "react";
import { useStore } from "./store";

const UserInfo: React.FC = () => {
  const { userStore } = useStore();
  return (
    <div>
      {userStore.userInfo.username} {userStore.userInfo.age}
    </div>
  );
};

export default observer(UserInfo);
```
