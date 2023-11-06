// Actions methods
// GET "/"
// GET "/index"

// GET '/projects/dashboard'
const dashboard = (req, res) => {
  res.send("👷‍♀️ UNDER CONSTRUCTION GET '/projects/dashboard' 👷‍♀️");
};
// GET '/projects/addform'
const projects = (req, res) => {
  res.send("👷‍♀️ UNDER CONSTRUCTION GET '/projects/projects' 👷‍♀️");
};
// GET '/projects/register'
const add = (req, res) => {
  res.render('project/addView');
};
// POST "/project/add"
const addPost = (req, res) => {
  // Extrayendo la informacion
  // del formulario
  const { name, description } = req.body;
  // Regresando al cliente la información recabada
  res.status(200).json({
    name,
    description,
  });
};
// Controlador Home
export default {
  dashboard,
  projects,
  add,
  addPost,
};
