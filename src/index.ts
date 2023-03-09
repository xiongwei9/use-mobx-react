import * as React from "react";

function useMobxReact<T>(store: T) {
  const context = React.createContext(store);

  return {
    useStore: function () {
      return React.useContext(context);
    },
  };
}

export { useMobxReact };
