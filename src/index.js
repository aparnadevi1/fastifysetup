const fastify = require("fastify")({ logger: true }); //calling fastify constructure
const app = require("./app");
const PORT = 3000;

fastify.register(app);

fastify.listen({ port: PORT }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`server up at port ${PORT}`);
});
