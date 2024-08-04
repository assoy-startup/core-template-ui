import { observable, action, makeAutoObservable } from "mobx";
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
import agent from "../agent";
import commonStore from "./commonStore";
import websocketStore from "./websocketStore";
export class UserStore {
  @observable inProgress = false;
  @observable inProgressUserCreate = false;
  @observable inProgressGetModalsFileImport = false;
  @observable inProgressUserUpdate = false;
  @observable inProgressGetDashboard = false;
  @observable inProgressGetModalsList = false;
  @observable inProgressGetModalsListPageWise = false;
  @observable inProgressGetUserRole = false;
  @observable inProgressGetClientName = false;
  @observable inProgressGetModelTyles = false;
  @observable inProgressGetBranches = false;
  @observable inProgressGetUserList = false;
  @observable inProgressCreateModule = false;
  @observable serviceProgress = false;
  @observable inProgressMobileNoCheck = false;
  @observable isMobileNumberFound = false;
  @observable requestProgress = false;
  @observable branchProgress = false;
  @observable inProgressDeleteUser = false;
  @observable extensionProgress = false;
  @observable loginFailed = false;
  @observable createProgress = false;
  @observable userImageProfile = "";
  @observable qrModalNo = "";
  @observable modalTypeEditId = "";
  @observable statusText;
  @observable userRoles = [];
  @observable clientName = [];
  @observable modelTypes = [];
  @observable modalsList = [];
  @observable modalsFileImport = [];
  @observable modalsListPage = [];
  @observable modalsListPageContent = [];
  @observable dashboardData = [];
  @observable accounts = [];
  @observable branches = [];
  @observable captchaImg = "";
  @observable uniqueId = "";
  @observable token;
  @observable user = {};
  @observable pagesAccessList = [];
  @observable loginDetails = {
    email: "",
    password: "",
  };
  @observable registerFailed = false;
  @observable inProgressModalUpdate = false;
  @observable logoutSuccess = false;
  @observable logoutProgress = false;
  @observable emailVerified = false;
  @observable userList = [];
  @observable openAssignDialog = false;
  @observable userDetails = {};
  @observable changePasswordDialog = false;
  @observable userMenuArray = [];
  @observable serviceIds = [];
  @observable snackbarOptions = {
    open: false,
    message: "",
  };
  constructor() {
    let userLocal = window.localStorage.getItem("user");
    if (userLocal) {
      userLocal = JSON.parse(userLocal);
      this.token = userLocal.token;
    }
    makeAutoObservable(this);
  }

  setQrModalNo=(val)=>{
  this.qrModalNo=val;
  }
  setModalPageContent=(val)=>{
  this.modalsListPageContent=val;
  }
  setPageContent=(val)=>{
  this.modalsListPageContent=val;
  }
  setDashboardData=(val)=>{
  this.dashboardData=val;
  }
  setModalTypeEditId=(val)=>{
  this.modalTypeEditId=val;
  }
  SetIsMobileNumberFound=(val)=>{
  this.isMobileNumberFound=val;
  }

  goToLogin() {
    this.token = undefined;
    window.localStorage.clear();
    window.location.reload();
    this.removeLocalStorage();
  }

  removeLocalStorage = () => {
    console.log("Removing Local Storage");
    this.token = undefined;
    window.localStorage.clear();
  };

  resetUserErrors = () => {
    this.loginFailed = false;
    this.statusText = "";
  };
  //User Login 
  login(email, password) {
    this.inProgress = true;
    this.loginFailed = false;
    this.errors = undefined;
    this.statusText = "";
    let data={
      "mobile": email,
      "password": password
    }
    return agent.Auth.login(data)
      .then(
        action((response) => {
          if (response && response.data.accessToken) {
            this.token = response.data.accessToken;
            // this.user = response.user;
            if (this.token) {
              window.localStorage.setItem(
                "user",
                JSON.stringify({
                  // user: this.user,
                  token: this.token,
                })
              );
            } else {
              window.localStorage.removeItem("user");
            }
            return {
              status: "success",
            };
          } else {
            this.statusText = response.message;
            this.loginFailed = true;
          }
        })
      )
      .catch(
        action((err) => {
          this.loginFailed = true;
          this.statusText = "Failed to login";
          if (err.response && err.response.body) {
            this.statusText = err.response.body.message;
            this.loginFailed = true;
          }
          this.errors =
            err.response && err.response.body && err.response.body.message;
          //throw err;
        })
      )
      .finally(
        action(() => {
          this.inProgress = false;
        })
      );
  }
  //Create User
  CreateUser(data) {
    this.inProgressUserCreate = true;
    this.errors=undefined;
    this.statusText="";
    return agent.User.createUser(data)
      .then(
        action((response) => {
          console.log("response",response.data);
          console.log("response",response.statusCodeValue);
          if (response && response.statusCodeValue==201) return {status:"success"}
          return {status:'error',message:response.message}
        })
      )
      .catch(
        action((err) => {
          this.inProgressUserCreate = true;
          this.statusText = "Failed to create user";
          if (err.response && err.response.body) {
            this.statusText = err.response.body.message;
          }
          this.errors=err.response && err.response.body && err.response.body.message;
          if(err.message && err.response.body && err.response.body.message){
            commonStore.handleOpenSnackBar(err.response.body.message,"error");
          }
        })
      )
      .finally(
        action(() => {
          this.inProgressUserCreate = false;
        })
      );
  }
  createModule(data) {
    this.inProgressCreateModule = true;
    this.errors=undefined;
    this.statusText="";
    return agent.User.createModule(data)
      .then(
        action((response) => {
          console.log("response",response.data);
          console.log("response",response.statusCodeValue);
          if (response && response.statusCodeValue==201) return {status:"success",response:response.data}
          return {status:'error',message:response.message}
        })
      )
      .catch(
        action((err) => {
          this.inProgressCreateModule = true;
          this.statusText = "Failed to create user";
          if (err.response && err.response.body) {
            this.statusText = err.response.body.message;
          }
          this.errors=err.response && err.response.body && err.response.body.message;
          if(err.message && err.response.body && err.response.body.message){
            commonStore.handleOpenSnackBar(err.response.body.message,"error");
          }
        })
      )
      .finally(
        action(() => {
          this.inProgressCreateModule = false;
        })
      );
  }
  UpdateUserNameAndMobileNo(data) {
    this.inProgressUserUpdate = true;
    this.errors=undefined;
    this.statusText="";
    return agent.User.UpdateUserNameAndMobileNo(data)
      .then(
        action((response) => {
          console.log("response",response.data);
          console.log("response",response.statusCodeValue);
          if (response && response.statusCodeValue==200) return {status:"success",response:response.data}
          return {status:'error',message:response.message}
        })
      )
      .catch(
        action((err) => {
          this.inProgressUserUpdate = true;
          this.statusText = "Failed to create user";
          if (err.response && err.response.body) {
            this.statusText = err.response.body.message;
          }
          this.errors=err.response && err.response.body && err.response.body.message;
          if(err.message && err.response.body && err.response.body.message){
            commonStore.handleOpenSnackBar(err.response.body.message,"error");
          }
        })
      )
      .finally(
        action(() => {
          this.inProgressUserUpdate = false;
        })
      );
  }
  EditModal(data) {
    this.inProgressModalUpdate = true;
    this.errors=undefined;
    this.statusText="";
    return agent.User.EditModal(data)
      .then(
        action((response) => {
          console.log("response",response.data);
          console.log("response",response.statusCodeValue);
          if (response && response.statusCodeValue==200) return {status:"success",response:response.data}
          return {status:'error',message:response.message}
        })
      )
      .catch(
        action((err) => {
          this.inProgressModalUpdate = true;
          this.statusText = "Failed to create user";
          if (err.response && err.response.body) {
            this.statusText = err.response.body.message;
          }
          this.errors=err.response && err.response.body && err.response.body.message;
          if(err.message && err.response.body && err.response.body.message){
            commonStore.handleOpenSnackBar(err.response.body.message,"error");
          }
        })
      )
      .finally(
        action(() => {
          this.inProgressModalUpdate = false;
        })
      );
  }
  mobileNoCheck(mobileno) {
    this.inProgressMobileNoCheck = true;
    this.errors = undefined;
    this.statusText = "";
    return agent.User.checkMobileNo(mobileno)
      .then(
        action((response) => {
          console.log("response", response.data);
          console.log("response", response.statusCodeValue);
          if (response && response.Status == 202) return { status: "exist" };
          if (response && response.Status == 200) return { status: "available" };
          return { status: 'error', message: response.message };
        })
      )
      .catch(
        action((err) => {
          this.inProgressMobileNoCheck = true;
          this.statusText = "Failed to check Mobile No Exist";
          if (err.response && err.response.body) {
            this.statusText = err.response.body.message;
          }
          this.errors = err.response && err.response.body && err.response.body.message;
          if (err.message && err.response.body && err.response.body.message) {
            commonStore.handleOpenSnackBar(err.response.body.message, "error");
          }
        })
      )
      .finally(
        action(() => {
          this.inProgressMobileNoCheck = false;
        })
      );
  }
  

  deleteUser(userEntityId) {
    this.inProgressDeleteUser = true;
    this.errors=undefined;
    this.statusText="";
    return agent.User.deleteUser(userEntityId)
      .then(
        action((response) => {
          console.log("response",response.data);
          console.log("response",response.statusCodeValue);
          if (response && response.statusCodeValue==200) {
            return {status:"success"}
          }else{
            return {status:'error',message:response.message}
          }
        })
      )
      .catch(
        action((err) => {
          this.inProgressDeleteUser = true;
          localStorage.setItem("Error",err);
          this.statusText = "Failed to delete User";
          if (err.response && err.response.body) {
            this.statusText = err.response.body.message;
          }
          this.errors=err.response && err.response.body && err.response.body.message;
          if(err.message && err.response.body && err.response.body.message){
            commonStore.handleOpenSnackBar(err.response.body.message,"error");
          }
        })
      )
      .finally(
        action(() => {
          this.inProgressDeleteUser = false;
        })
      );
  }
  //Get User Roles 
  getUserRoles = () => {
    this.inProgressGetUserRole = true;
    return agent.User.getRoles()
      .then(
        action((response) => {
          if (response && response.statusCodeValue == 200)
            console.log("Response ",response);
            this.userRoles = response.data;
          console.log("User Role :",this.userRoles);
        })
      )
      .catch(
        action((err) => {
          this.errors =
            err.response && err.response.body && err.response.body.message;
        })
      )
      .finally(
        action(() => {
          this.inProgressGetUserRole = false;
        })
      );
  };
  // Get Modules 
  getModelTypes = (modelCategory) => {
    this.inProgressGetModelTyles = true;
    return agent.User.getModelTypes(modelCategory)
      .then(
        action((response) => {
          if (response && response.statusCodeValue == 200)
            console.log("Response ",response);
            this.modelTypes = response.data;
          console.log("User Role :",this.modelTypes);
        })
      )
      .catch(
        action((err) => {
          this.errors =
            err.response && err.response.body && err.response.body.message;
        })
      )
      .finally(
        action(() => {
          this.inProgressGetModelTyles = false;
        })
      );
  };
  // Get Branch
  getBranches = () => {
    this.inProgressGetBranches = true;
    return agent.User.getBranches()
      .then(
        action((response) => {
          console.log("branches ",response);
          if (response && response.statusCodeValue == 200){
            console.log("Response ",response);
            this.branches = response.data;
          console.log("Branches :",this.branches);
          }
        })
      )
      .catch(
        action((err) => {
          console.log("Error :",err);
          localStorage.setItem("Error",err);
          this.errors =
            err.response && err.response.body && err.response.body.message;
        })
      )
      .finally(
        action(() => {
          this.inProgressGetBranches = false;
        })
      );
  };
  // Get User List
  getUserList = () => {
    this.inProgressGetUserList = true;
    return agent.User.getUserList()
      .then(
        action((response) => {
          if (response && response.statusCodeValue == 200)
            console.log("Response ",response);
            this.userList= response.data;
          console.log("User List :",this.userList);
        })
      )
      .catch(
        action((err) => {
          this.errors =
            err.response && err.response.body && err.response.body.message;
        })
      )
      .finally(
        action(() => {
          this.inProgressGetUserList = false;
        })
      );
  };
  // Get User List  By Mobile No
  getUserListByMobileNo = (data) => {
    this.inProgressGetUserList = true;
    return agent.User.getUserListByMobileNo(data)
      .then(
        action((response) => {
          if (response && response.statusCodeValue == 200)
            console.log("Response ",response);
            this.userList= response.data;
          console.log("User List :",this.userList);
        })
      )
      .catch(
        action((err) => {
          this.errors =
            err.response && err.response.body && err.response.body.message;
        })
      )
      .finally(
        action(() => {
          this.inProgressGetUserList = false;
        })
      );
  };
  // Get Client Name
  getUserNames = () => {
    this.inProgressGetClientName = true;
    return agent.User.getUserNames()
      .then(
        action((response) => {
          if (response && response.statusCodeValue == 200)
            console.log("Response ",response);
            this.clientName= response.data;
          console.log("User List :",this.userList);
        })
      )
      .catch(
        action((err) => {
          this.errors =
            err.response && err.response.body && err.response.body.message;
        })
      )
      .finally(
        action(() => {
          this.inProgressGetClientName = false;
        })
      );
  };
  // Get Modals 
  getModalsList = (modelCategoryNumber) => {
    this.inProgressGetModalsList = true;
    return agent.User.getModalsList(modelCategoryNumber)
      .then(
        action((response) => {
          if (response && response.statusCodeValue == 200)
            this.modalsList= response.data;
        })
      )
      .catch(
        action((err) => {
          this.errors =
            err.response && err.response.body && err.response.body.message;
        })
      )
      .finally(
        action(() => {
          this.inProgressGetModalsList = false;
        })
      );
  };
  // Import Modal File 
  ImportModalFile = (data) => {
    this.inProgressGetModalsFileImport = true;
    return agent.User.ModalBulkUploadFile(data)
      .then(
        action((response) => {
          if (response && response.statusCodeValue == 200)
            {
              return {status:'success'}
            }
        })
      )
      .catch(
        action((err) => {
          this.errors =
            err.response && err.response.body && err.response.body.message;
        })
      )
      .finally(
        action(() => {
          this.inProgressGetModalsFileImport = false;
        })
      );
  };
  // Get Modals Page Wise
  getModalsListPageWise = (data) => {
    this.inProgressGetModalsListPageWise = true;
    return agent.User.getModalsListPageWise(data)
      .then(
        action((response) => {
          if (response && response.statusCodeValue === 200) {
            this.modalsListPageContent =[];
            this.modalsListPage =[];
            console.log("Response modals :", response.data);
            // Update modalsListPage with the response data
            // this.modalsListPage = [{
            //   Modals: response.data.content,
            //   TotalRecords: response.data.totalPages ,
            //   TotalElements: response.data.totalElements,
            //   RowPerPage:response.data.size
            // }]
            this.modalsListPageContent=response.data.content;
            this.modalsListPage = response.data;
            };
            console.log("Modal Page Wise :", this.modalsListPage.content);
        })
      )
      .catch(
        action((err) => {
          this.errors =
            err.response && err.response.body && err.response.body.message;
        })
      )
      .finally(
        action(() => {
          this.inProgressGetModalsListPageWise = false;
        })
      );
  };
  
  // Get Dashboard Data 
  getDashboardData = () => {
    this.inProgressGetDashboard = true;
    return agent.User.getDashboardData()
      .then(
        action((response) => {
          if (response && response.statusCodeValue == 200) {
            this.setDashboardData([]);
            const data = response.data;
            this.setDashboardData ([
              { title: "Total Model", value: data.totalModel },
              { title: "Eco", value: data.totalEco },
              { title: "Bhauraya", value: data.totalBhauraya },
              { title: "AB", value: data.totalAb },
              { title: "Other", value: data.totalOther },
              { title: "Total User", value: data.totalUser },
              { title: "Owner", value: data.totalOwner },
              { title: "Manager", value: data.totalManager },
              { title: "Client", value: data.totalClient },
              { title: "Total Stocks", value: data.totalStocks },
              { title: "Eco", value: data.totalEcoCountStock },
              { title: "Bhaurya", value: data.totalBhauryaCountStock },
              { title: "AB", value: data.totalAbCountStock },
              { title: "Other", value: data.totalotherCountStock },
              { title: "Orders", value: data.totalOrders },
              { title: "Eco", value: data.totalEcoCountOrder },
              { title: "Bhaurya", value: data.totalBhauryaCountOrder },
              { title: "AB", value: data.totalAbCountOrder },
              { title: "Other", value: data.totalOtherCountOrder },
            ]);
          }
        })
      )
      .catch(
        action((err) => {
          this.errors =
            err.response && err.response.body && err.response.body.message;
        })
      )
      .finally(
        action(() => {
          this.inProgressGetDashboard = false;
        })
      );
  };
  

}

export default new UserStore();
