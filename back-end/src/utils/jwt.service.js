import jwt from "jsonwebtoken";

export class Token {
  createToken = (email) => {
    const token = jwt.sign({ data: email }, process.env.JWT_SECRET, {
      expiresIn: "30d",
      algorithm: "HS256",
    });
    return token;
  };

  validateToken = (token) => {
    try {
      const { data } = jwt.verify(token, process.env.JWT_SECRET);
      return data;
    } catch (_err) {
      return undefined;
    }
  };
}
