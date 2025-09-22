import { FastifyRequest, FastifyReply } from "fastify";

import {CreatePlanServices} from '../services/CreatePlanServices';

import { Decimal } from "../generated/prisma/runtime/library";

class CreatePlanController {
    async handle(request:FastifyRequest, reply:FastifyReply){
        const {id,name,price} = request.body as {id:string, name:string, price:Decimal}

        const planServices = new CreatePlanServices()
        const plan = await planServices.execute({id,name,price})

        reply.send(plan)
    }
}
export {CreatePlanController}