import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";
import { createGoalCompletion } from "../../functions/create-goal-completion";

export const createGoalCompletionRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    "/goal-completions",
    {
      schema: {
        body: z.object({
          goalId: z.string(),
        }),
      },
    },
    async (request, reply) => {
      const { goalId } = request.body;

      await createGoalCompletion({ goalId });
    }
  );
};