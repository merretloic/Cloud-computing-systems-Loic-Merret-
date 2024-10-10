import Fastify from "fastify";
import {getFeature} from "./featureStore.mjs";

export function createServer() {
  const fastify = Fastify({
    logger:true
  })

  fastify.get("/feature/:code", async function handler(request, reply) {
    const { code } = request.params;
    const enabled = await getFeature(code);
    return reply.send({ code, enabled });
  });

  return fastify;
}