const Nes = require("nes");
import userStore from "./userStore";

var client = new Nes.Client(constants.WS_ROOT);

import { observable, action, makeAutoObservable } from "mobx";
import constants from "../constants";
import { roleAccess, superAdminCheck } from "../Utils/utils";

export class WebsocketStore {
  constructor() {
    this.socketHandle = new Nes.Client(constants.WS_ROOT);
    this.maxReconnects = 10;
    this.pingInterval = 7000;
    this.pongInterval = 5000;
    this.pongReceived = false;
    makeAutoObservable(this);
  }

  @observable connected = false;
  @observable disconnected = false;
  @observable reconnecting = false;
  @observable reconnectFailed = false;
  @observable reconnected = false;

  async connectWebsocket(accessToken, tenantId) {
    try {
      await client.connect({
        auth: {
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        },
      });
      console.log("Connected to server!");

      // Handle successful connection here

      // documents real-time updates

      // dashboard stats
      client.subscribe(`/tenants/${tenantId}/dashboard/stats`, (stats) => {
        // setMessages(result => [...result, stats]);
        console.log("DASHBOARD", stats);
      });

      // superadmin stats
      client.subscribe(`/tenants/${tenantId}/superadmin`, (stats) => {
        console.log("Superadmin Socket event");
        if (
          window.location.pathname.startsWith(
            "/home/admin-panel/ocr-statistics"
          )
        ) {
          adminStore.getOcrStatistics();
          adminStore.getOcrFileList(adminStore.ocrFilter);
          adminStore.getProcessingStatus();
        }
      });

      client.subscribe(`/superadmin`, (stats) => {
        console.log("Superadmin Socket event-1");
        if (
          window.location.pathname.startsWith(
            "/home/admin-panel/ocr-statistics"
          )
        ) {
          adminStore.getOcrStatistics();
          adminStore.getOcrFileList(adminStore.ocrFilter);
          adminStore.getProcessingStatus();
        }
      });

      client.subscribe(`/admin/update`, (stats) => {
        if (superAdminCheck() && !adminStore.inProgress) {
          console.log("ADMIN SOCKET EVENT");
          if (
            window.location.pathname.startsWith(
              "/home/admin-panel/ocr-statistics"
            )
          ) {
            adminStore.getOcrStatistics();
            adminStore.getOcrFileList(adminStore.ocrFilter);
            adminStore.getProcessingStatus();
          }
        }
      });

      // upload batch list
    } catch (error) {
      const { message } = error;
      console.error(`ERROR - ${message}`);
      // Handle connection error gracefully (e.g., show a message to the user)
    }
  }

  subscribeToClass = (batchId) => {
    try {
      client.subscribe(
        `/tenants/${userStore.user.tenantId}/batch/${batchId}/bucket`,
        (data) => {}
      );
    } catch (error) {
      const { message } = error;
      console.error(`ERROR - ${message}`);
    }
  };

  async disconnectWebsocket(tenantId) {
    try {
      await client.unsubscribe(`/tenants/${tenantId}/documents/aiStatus`, null);
      await client.unsubscribe(`/tenants/${tenantId}/training/aiStatus`, null);
      await client.unsubscribe(`/tenants/${tenantId}/dashboard/stats`, null);
      await client.disconnect();
      console.log("disconnected");
    } catch (error) {
      const { message } = error;
      console.error(`ERROR - ${message}`);
    }
  }
}
export default new WebsocketStore();
