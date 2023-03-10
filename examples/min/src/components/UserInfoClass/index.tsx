import * as React from "react";
import { observer } from "mobx-react";
import { store } from "../../store";

class UserInfoClassImpl extends React.Component {
  render(): React.ReactNode {
    const { userStore } = store;

    return (
      <div>
        {userStore.userInfo.username} {userStore.userInfo.age}
      </div>
    );
  }
}

// class UserInfoInjectImpl extends React.Component {
//   render(): React.ReactNode {
//     const { userStore } = store;

//     return (
//       <div>
//         {userStore.userInfo.username} {userStore.userInfo.age}
//       </div>
//     );
//   }
// }

const UserInfoClass = observer(UserInfoClassImpl);
// const UserInfoInject = inject("userStore")(UserInfoInjectImpl);

export {
  UserInfoClass,
  // UserInfoInject
};
