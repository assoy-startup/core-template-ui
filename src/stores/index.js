import React from "react";
import userStore from "./userStore";
import commonStore from "./commonStore";
import websocketStore from "./websocketStore";


class RootStore {
  constructor() {
    this.userStore = userStore;
    this.websocketStore = websocketStore;
    this.commonStore = commonStore;
  }
}

const StoresContext = React.createContext(new RootStore());
export const useStores = () => React.useContext(StoresContext);
