import { observable, makeAutoObservable } from "mobx";

export class CommonStore {
  @observable appLoaded = false;
  @observable snackbarOptions = {
    open: false,
    message: "",
    from: "",
    vertical: 'top',
    horizontal: 'center'
  };
  @observable dialogOptions = {
    dialogOpen: false,
    type: "",
  };
  @observable currentStore = false; //current store to keep track
  @observable goodToGo = false;
  @observable noFooter = false;
  @observable noNet = false;
  @observable activeTab = 0;
  @observable helpDialog = false;
  @observable sideDrawer = true;
  @observable breadCrumb = undefined;
  @observable footerTab = -1;

  constructor() {
    makeAutoObservable(this);
  }

  setNoFooter = (val) => {
    this.noFooter = val;
  };

  setBreadcrumb = (value) => {
    this.breadCrumb = value;
  };

  openHelpDialog(value) {
    this.helpDialog = value;
  }

  setFooterTab = (value) => {
    if (value > -1) this.activeTab = -1;
    this.footerTab = value;
  };

  handleDrawerToggle = () => {
    this.sideDrawer = !this.sideDrawer;
  };

  handleDrawerClickAway = () => {
    this.sideDrawer = false;
  };

  setActiveTab(active) {
    this.activeTab = active;

    this.footerTab = -1;
  }

  setAppLoaded() {
    this.appLoaded = true;
  }

  modifyText = (text) => {
    let temp = [];
    text.split("_").length &&
      text.split("_").forEach((word) => {
        word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        temp.push(word);
      });
    return temp.join(" ");
  };

  handleOpenSnackBar(message, type, from) {
    this.snackbarOptions.open = true;
    this.snackbarOptions.message = message;
    this.snackbarOptions.type = type;
    this.snackbarOptions.from = from;
  }

  handleCloseSnackBar() {
    this.snackbarOptions.open = false;
    this.snackbarOptions.message = "";
    this.snackbarOptions.from = "";
  }

  openDialog(dialogType) {
    this.dialogOptions.dialogOpen = true;
    this.dialogOptions.type = dialogType;
  }

  closeDialog() {
    this.dialogOptions.dialogOpen = false;
    this.dialogOptions.type = "";
  }

  setCurrentStore(storeValue) {
    this.goodToGo = true;
    this.currentStore = storeValue;
  }
  resetFlag() {
    this.goodToGo = false;
  }

  setNoInternet() {
    this.noNet = true;
  }
  resetNoInternet() {
    this.noNet = false;
  }
}
export default new CommonStore();
