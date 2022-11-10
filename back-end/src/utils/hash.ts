import bcrypt from "bcrypt";

export class Encrypt {
  public encryptPassword = (password: string) => {
    const salt = bcrypt.genSaltSync(5);
    const encryptedPassword = bcrypt.hashSync(password, salt);
    return encryptedPassword;
  };

  public checkPassword = (password: string, passwordDb: string) => {
    const isMatch = bcrypt.compareSync(password, passwordDb);
    if (!isMatch) {
      return {
        error: "UnauthorizedError",
        message: "Usuário não existe ou senha inválida",
      };
    }
  };
}
