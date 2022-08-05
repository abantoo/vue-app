import { defineStore } from "pinia";
// import router from "../routes";

interface IUser {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
}

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    messageLogin: "",
    messageSignup: "",
    isLogged: false,
    userBank: [
      {
        email: "admin@admin.admin",
        firstname: "admin",
        lastname: "admin",
        password: "admin123",
      },
    ],
    currentUser: {
      email: "",
      firstname: "",
      lastname: "",
      password: "",
    },
  }),
  getters: {
    userCount: (state) => state.userBank.length,
    showUsers: (state) => console.log(state.userBank),
    loggedStatus: (state) => state.isLogged,
  },

  actions: {
    addPerson(user: IUser) {
      this.userBank.push(user);
    },

    authUser(email: string, password: string) {
      for (const user in this.userBank) {
        if (
          email === this.userBank[user].email &&
          password === this.userBank[user].password
        ) {
          this.currentUser.email = email;
          this.currentUser.firstname = this.userBank[user].firstname;
          this.currentUser.lastname = this.userBank[user].lastname;
          this.currentUser.password = this.userBank[user].password;
          this.messageLogin = `Login Successful, Welcome back ${this.currentUser.firstname}`;
          return true;
        } else {
          this.messageLogin = `Username / Password didn't match`;
          return false;
        }
      }
    },

    logOut() {
      this.currentUser.email = "";
      this.currentUser.firstname = "";
      this.currentUser.lastname = "";
      this.currentUser.password = "";
      this.messageLogin = "";
    },
  },
  persist: true,
});
