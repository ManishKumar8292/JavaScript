const User = {
  _email: "Mahish@gmail.com",
  _password: "1223bdjd",

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
  get password() {
    return this._password.toUpperCase();
  },
  set password(value) {
    this._password = value;
  },
};

const tea = Object.create(User);
console.log(tea.email); //MAHISH@GMAIL.COM
console.log(tea.password); //1223BDJD
