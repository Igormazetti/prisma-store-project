import jwt from "jsonwebtoken";

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}
1;

const secret = process.env.JWT_SECRET || "secret";

export class Token {
  createToken = (id: string) => {
    const token = jwt.sign({ data: id }, secret, {
      expiresIn: "30d",
      algorithm: "HS256",
    });
    return token;
  };

  validateToken = (token: string) => {
    try {
      const decoded = jwt.verify(token, secret);
      const { sub } = decoded as ITokenPayload;
      return sub;
    } catch (_err) {
      return undefined;
    }
  };
}
