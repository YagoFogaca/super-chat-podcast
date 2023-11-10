export class UserRepository {
  constructor(prisma) {
    this.prisma = prisma;
  }

  async create(user) {
    return await this.prisma.user.create({ data: user });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findById(id) {
    return await this.prisma.user.findUnique({ where: { id: id } });
  }

  async update(id, user) {
    return await this.prisma.user.update({
      where: { id: id },
      data: {
        data: user,
      },
    });
  }

  async delete(id) {
    return await this.prisma.user.delete({
      where: { id: id },
    });
  }

  async email(email) {
    return await this.prisma.user.findUnique({ where: { email: email } });
  }
}
