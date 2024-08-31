const servicePlugin = require("./services/servicePlugin");
const fastifyPlugin = require("fastify-plugin");

/**
 *
 * @param {Fastify object} fastify
 * @param {*} options
 */
async function app(fastify, options) {
  fastify.register(require("@fastify/cors"));

  //register test routes

  fastify.register(servicePlugin);
  fastify.register(require("./routes/api/apiRoutes"), {
    prefix: "/api",
  });
}
//to make app function a fastify plugin
module.exports = fastifyPlugin(app);
