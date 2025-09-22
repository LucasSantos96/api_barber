import { FastifyRequest, FastifyReply } from "fastify";
import { ListPlansServices } from "../services/ListPlanServices";

class ListPlansController{
    async handle(request:FastifyRequest, reply:FastifyReply){
        const listPlans = new ListPlansServices();
        const plans = await listPlans.execute()

        reply.send(plans)
    }
}

export{ListPlansController}