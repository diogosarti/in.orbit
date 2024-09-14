import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { getWeakPendingGoals } from "../../functions/get-weak-pending-goals";

export const getPendingGoals: FastifyPluginAsyncZod = async (app) => {
  app.get("/pending-goals", async (request, reply) => {
    const pendingGoals = await getWeakPendingGoals();

    return pendingGoals;
  });
};
