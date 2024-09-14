import fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import z from "zod";
import { getWeakPendingGoals } from "../functions/get-weak-pending-goals";
import { createGoalRoute } from "./routes/create-goal";
import { createGoalCompletionRoute } from "./routes/create-goal-completion";
import { getPendingGoals } from "./routes/get-week-pending-goals";
import { getWeekSummaryRoute } from "./routes/get-week-summary";
import fastifyCors from "@fastify/cors";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: "*",
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(getPendingGoals);
app.register(createGoalCompletionRoute);
app.register(createGoalRoute);
app.register(getWeekSummaryRoute);

app.listen({ port: 3000 }, (err, address) => {
  console.log(`${address}`);
});
