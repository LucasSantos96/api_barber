import { FastifyRequest, FastifyReply } from "fastify";

import { ActivePlanService } from "../services/ActivePlanService";

class ActivePlanController{
    async handle( request: FastifyRequest, reply: FastifyReply){
        const {planId} = request.body as {planId:string} //recebe o id pelo body

        const activeService = new ActivePlanService();


        try{
            const activePlan = await activeService.execute(planId);
            reply.send(activePlan);
        }catch(err: any){
            return reply.status(400).send({error: err.message});
        }
    }
}

export{ ActivePlanController}