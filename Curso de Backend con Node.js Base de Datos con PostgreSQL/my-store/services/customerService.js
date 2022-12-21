const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class CustomerService {

  constructor() { }

  async create(data) {
    const newCustomer = await models.Customer.create(data, {
      include: ['user'] // con esto le decimos que cree el usuario el solo
    });
    return newCustomer;
  }

  async find() {
    const allCustomers = await models.Customer.findAll({
      include: ['user'] // incluimos la asociacion de user para que la devuelva en el get
    });
    return allCustomers;
  }

  async findOne(id) {
    const customer = await models.Customer.findByPk(id, {
      include: ['user', 'orders']
    });
    if (!customer) {
      throw boom.notFound('Customer not found');
    }
    return customer;
  }

  async update(id, changes) {
    const customer = await this.findOne(id);
    const rta = await customer.update(changes);
    return rta;
  }

  async delete(id) {
    const customer = await this.findOne(id);
    await customer.destroy();
    return { id };
  }
}

module.exports = CustomerService;
