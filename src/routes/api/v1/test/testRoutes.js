const fastifyPlugin = require("fastify-plugin");
const testController = require("../../../../controllers/testController");

async function testRoute(fastify, options) {
  fastify.get("/ping", testController.pingRequest);
}
// no need to make plugin for routes
module.exports = testRoute;
