import { observer } from "mobx-react-lite";
import * as React from "react";
import { useStore } from "../../store";

const UserInfo: React.FC = () => {
  const { userStore } = useStore();
  return (
    <div>
      {userStore.userInfo.username} {userStore.userInfo.age}
    </div>
  );
};

export default observer(UserInfo);
