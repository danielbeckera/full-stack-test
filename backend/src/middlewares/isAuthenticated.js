const { verify } = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new Error("JWT token is missing.");
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = verify(token, "1297221fa29191e45862e856e65a1440");

    const { id, name, email, username } = decoded;

    req.user = {
      id,
      name,
      email,
      username,
    };

    return next();
  } catch {
    throw new Error("Invalid JWT token.");
  }
};
