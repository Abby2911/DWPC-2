var express = require('express');
const { response } = require('../app');
var router = express.Router();
//GET "/about/tec"
router.get('/tec', function(_, res) {
    res.render('tec', {nombre: "Marcos Adan Martinez Garcia y Vianney Abigail Reyes Landín"});
  });

router.get('/api/tec', function(_, res) {
    res.json({
      name:"Instituo Tecnologico de Gustavo A. Madero",
      descripcion:"Instituto Tecnológico De Gustavo A. Madero es una institución de formación profesional, con presencia según matrículas en 2022 en Ciudad de México (1,867), centrando la mayor parte del estudiantado en los municipios de Gustavo A. Madero (1,867).",
      missions:"Formar con responsabilidad y excelencia a profesionistas capaces de enfrentar y resolver los retos que se presentan en el ámbito nacional e internacional.",
      values:"Respeto,Liderazgo,Perseverancia,Responsabilidad",
      images:"https://i.ytimg.com/vi/zwui433EmSA/maxresdefault.jpg"
    });

});

  module.exports = router;

