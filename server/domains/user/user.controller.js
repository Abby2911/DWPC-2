// Actions methods
import log from '../../config/winston';
// GET "/login"
const login = (req, res) => {
  log.info('Se entrega formulario de login');
  res.render('users/login');
};

// GET "/logout"
const logout = (req, res) => {
  res.send("🚧 UNDER CONSTRUCTION '/user/logout' 🚧");
};

// GET "/register"
const register = (req, res) => {
  log.info('Se entrega formulario de registro');
  res.render('users/register');
};

export default {
  login,
  logout,
  register,
};
