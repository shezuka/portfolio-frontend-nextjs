"use client";

import { Provider } from "react-redux";
import { ChildrenOnlyProps } from "@/types";
import { store } from "@/store/store";

const StoreProvider = (props: ChildrenOnlyProps) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default StoreProvider;
