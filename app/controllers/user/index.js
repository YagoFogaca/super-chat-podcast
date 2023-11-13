export class UserController {
  constructor(service) {
    this.service = service;
  }

  async create(req, res) {
    try {
      const user = await this.service.create(req.body);
      return res.status(201).send({
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
      const user = req.body;
      const userUpdate = await this.service.update(id, user);
      return res.status(200).send({
        data: userUpdate,
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
