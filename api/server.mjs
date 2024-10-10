import Fastify from "fastify";

export function createServer() {
  const fastify = Fastify({
    logger:true
  })

  fastify.get("/feature/:code", async function handler(request, reply) {
    const { code } = request.params;
    return reply.send({ "code":code, "enabled": true });
  });

  return fastify;
}