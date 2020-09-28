const controllerpelicula = require('./controlerpelicula.js');
const controllerAdministrador = require('./controllerAdministrador.js');


module.exports = (app) =>{
   var claseadm = new controllerAdministrador();
    let clasePelicula = new controllerpelicula();
    app.post('/api/nuevoadm',  claseadm.Guardar);
    app.post('/api/loginadm',  claseadm.Login);
    app.post('/api/nuevapelicula', clasePelicula.Guardar);
    app.post('/api/modificapelicula', clasePelicula.Modificar);
    app.post('/api/eliminapelicula', clasePelicula.Eliminar);
    app.post('/api/seleccionapelicula', clasePelicula.Seleccionartodos);
    app.post('/api/seleccionarporfecha', clasePelicula.Seleccionarporfecha);
    app.post('/api/seleccionarporid', clasePelicula.Seleccionarporid);
    app.post('/api/ssleccionarpornombre', clasePelicula.Seleccionarpornombre);
    app.get('*', (req,res) =>{res.sendfile('./login.html');});
};
