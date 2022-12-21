const boom = require('@hapi/boom');

const validatorHandler = (schema, property) => {//closures: retorna un middleware
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false }); // abortEarly => decirle que no se detenga y que envie todos los errores que haya en los datos
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler;
