export class UserController {
  constructor(service) {
    this.service = service;
  }

  async create(req, res) {
    try {
      const user = await this.service.create(req.body);
      return res.status(201).send({
        message: "TESTE CRIAR",
        data: user,
        code: 201,
      });
    } catch (error) {
      console.error(error);
      return res.status(404).send({
        error: error.message,
        code: 400,
      });
    }
  }

  async findAll(req, res) {
    try {
      const users = await this.service.findAll();
      return res.status(200).send({
        message: "TESTE BUSCA TOTAL",
        data: users,
        code: 200,
      });
    } catch (error) {
      return res.status(404).send({
        error: error.message,
        code: 404,
      });
    }
  }

  async findById(req, res) {
    try {
      const id = req.params.id;
      const user = await this.service.findById(+id);

      return res.status(200).send({
        message: "TESTE BUSCA POR ID",
        data: user,
        code: 200,
      });
    } catch (error) {
      return res.status(404).send({
        error: error.message,
        code: 404,
      });
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      return res.status(200).send({
        message: "TESTE UPDATE",
        data: { id: id },
        code: 200,
      });
    } catch (error) {
      return res.status(404).send({
        error: error.message,
        code: 404,
      });
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      const userDeleted = await this.service.delete(+id);
      return res.status(200).send({
        message: "TESTE DELETE",
        data: userDeleted,
        code: 200,
      });
    } catch (error) {
      return res.status(404).send({
        error: error.message,
        code: 404,
      });
    }
  }
}
