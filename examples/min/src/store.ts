import { configure, makeAutoObservable } from "mobx";
import { useMobxReact } from "use-mobx-react";

configure({ enforceActions: "observed" });

interface UserInfo {
  username: string;
  age: number;
}
class UserStore {
  // https://zh.mobx.js.org/enabling-decorators.html
  // 由于decorators标准未定，MobX 6建议不用装饰器
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

const { useStore, storeContext } = useMobxReact(store);

export { useStore, store, storeContext };
