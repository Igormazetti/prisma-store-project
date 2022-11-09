import bcrypt from "bcrypt";

export class Encrypt {
  encryptPassword = (password) => {
    const salt = bcrypt.genSaltSync(5);
    const encryptedPassword = bcrypt.hashSync(password, salt);
    return encryptedPassword;
  };

  checkPassword = (password, passwordDb) => {
    const isMatch = bcrypt.compareSync(password, passwordDb);
    if (!isMatch) {
      return {
        error: "UnauthorizedError",
        message: "Usuário não existe ou senha inválida",
      };
    }
  };
}
