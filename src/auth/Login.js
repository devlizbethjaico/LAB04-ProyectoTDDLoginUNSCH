var validarLogin = (usuario, password) => {
  if (!usuario) return { exito: false, mensaje: 'El usuario es requerido' };
  if (!password) return { exito: false, mensaje: 'La contraseña es requerida' };
  if (!/^\d{10}$/.test(usuario)) return { exito: false, mensaje: 'Formato de código inválido' };
  return { exito: true };
};

var iniciarSesion = (usuario, password, db) => {
  var user = db[usuario];
  if (!user || user.password !== password) return { exito: false, mensaje: 'Credenciales incorrectas' };
  return { exito: true, mensaje: 'Bienvenido, ' + user.nombre, rol: user.rol };
};

module.exports = { validarLogin, iniciarSesion };