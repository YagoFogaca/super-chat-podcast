import bcrypt from "bcrypt";

export class Bcrypt {
  static generate(password) {
    const salt = 10;
    return bcrypt.hashSync(password, salt);
  }

  static compare(password, hash) {
    return bcrypt.hashSync(password, hash);
  }
}
