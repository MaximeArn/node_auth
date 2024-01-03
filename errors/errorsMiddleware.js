const AuthenticationError = require("./authError");

const errorsMiddleware = (error, req, res, next) => {
  try {
    // 11000 is the mongodb code for unique index constraint violation
    if (error.code === 11000 && error.keyPattern.username) {
      throw new AuthenticationError("Le nom d'utilisateur est déjà pris.", 400);
    } else if (error.code === 11000 && error.keyPattern.email) {
      throw new AuthenticationError("L'adresse e-mail est déjà utilisée.", 400);
    } else {
      next(error);
    }
  } catch (error) {
    next(error);
  }
};
module.exports = errorsMiddleware;
