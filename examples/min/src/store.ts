import { configure, makeAutoObservable } from "mobx";
import { useMobxReact } from "../../../src/index";

configure({ enforceActions: "observed" });

interface UserInfo {
  username: string;
  age: number;
}
class UserStore {
  constructor() {
    makeAutoObservable(this);
  }

  // @observable
  userInfo: UserInfo = {
    username: "OhMyName",
    age: 0,
  };

  // @action.bound
  addAge() {
    this.userInfo.age += 1;
  }
}

const store = {
  userStore: new UserStore(),
};

const { useStore } = useMobxReact(store);

export { useStore };
