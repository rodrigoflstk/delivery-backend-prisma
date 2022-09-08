import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

const middlewareToValidateClient = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const token = request.headers.authorization;
  const secretKey = "c4e70ca5e4aef7ce6dcb11e2dab50955";

  if (!token) {
    return response.status(401).json({
      message: "Token is missing!!",
    });
  }

  const [, tokenContent] = token.split(" ");

  try {
    const { sub } = verify(tokenContent, secretKey) as IPayload;

    request.client_id = sub;

    return next();
  } catch (error) {
    return response.status(401).json({
      message: "Invalid token !!",
    });
  }
};

export { middlewareToValidateClient };
