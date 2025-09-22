import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";


import { CreatePlanController } from "../controllers/CreatePlanController";
import { request } from "http";


export async function planRoutes(
    fastify: FastifyInstance
){
    



    fastify.post('/add-plan',async(request:FastifyRequest, reply:FastifyReply)=>{
        return new CreatePlanController().handle(request,reply)
    })
}