import * as React from "react";

/**
 * @description 创建store context
 * @param store 用户自定义的mobx store对象
 * @returns 返回store context与hook
 */
function useMobxReact<T>(store: T) {
  const storeContext = React.createContext(store);

  return {
    storeContext,
    useStore: function () {
      return React.useContext(storeContext);
    },
  };
}

export { useMobxReact };
