class User {
  constructor() {
    this._users = null;
  }

  getUsers() {
    if (this._users === null) {
      try {
        const storedUsers = localStorage.getItem("users");
        this._users = storedUsers ? JSON.parse(storedUsers) : [];
      } catch (error) {
        return (this._users = []);
      }
    }
    return this._users;
  }

  saveUser(userData) {
    // Melakukan proses validasi (dengan memecah data)
    const { name, username, avatar, password } = userData;

    console.log(name);
  }

  userSignIn() {}
}
