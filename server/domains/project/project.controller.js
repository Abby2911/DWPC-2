// Actions methods

// GET /project/projects
//  GET /project/dashboard

const showDashboard = (req, res) => {
  res.send("🚧 UNDER CONSTRUCTION '/project/projects' '/project/dashboar'  🚧");
};
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
// GET /project/add-form
// GET /project/add
const addForm = (req, res) => {
  res.render('project/addView');
};

// Controlador Home
export default {
  showDashboard,
  addForm,
  addPost,
};
