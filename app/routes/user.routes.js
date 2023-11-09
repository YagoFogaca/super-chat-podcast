export class UserRoutes {
  constructor(router, controller) {
    this.router = router;
    this.controller = controller;
  }

  Routes() {
    this.router.get("/", (req, res) => {
      this.controller.findAll(req, res);
      return;
    });

    this.router.get("/:id", (req, res) => {
      this.controller.findById(req, res);
      return;
    });

    this.router.post("/", (req, res) => {
      this.controller.create(req, res);
      return;
    });

    this.router.patch("/:id", (req, res) => {
      this.controller.update(req, res);
      return;
    });

    this.router.delete("/:id", (req, res) => {
      this.controller.delete(req, res);
      return;
    });

    return this.router;
  }
}
