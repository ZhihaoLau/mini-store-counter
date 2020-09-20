import React from "react";

interface Store {
  state: StoreState;
  dispatch: React.Dispatch<StoreAction>;
}

export interface StoreState {
  count: number;
}

export type StoreAction = { type: "Add" } | { type: "Subtract" };

export const initialState: StoreState = {
  count: 1,
};

export const reducer = (state: StoreState, action: StoreAction) => {
  switch (action.type) {
    case "Add":
      return { count: state.count + 1 };
    case "Subtract":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

export const StoreContext = React.createContext<Store>({
  state: initialState,
  dispatch: () => {},
});
// 以便在 Production 模式下，在 React DevTools 中更方便地查找到 StoreContext
StoreContext.displayName = "StoreContext";
