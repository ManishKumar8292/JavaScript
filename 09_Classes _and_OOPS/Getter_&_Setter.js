class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
  get password() {
    return `${this._password + "anishm"}`.toUpperCase();
  }
  set password(value) {
    this._password = value;
  }
}

const newUser = new User("M@mail.com", "878ds");
console.log(newUser.email); //M@MAIL.COM
console.log(newUser.password); //878DSANISHM
