import { FastifyRequest, FastifyReply } from "fastify";

import { CreateClientServices } from "../services/CreateClientServices";


class CreateClientController{
    async handle(request: FastifyRequest, reply:FastifyReply){
        
        const {name,number,planId, status, expires_at} = request.body as {name:string, number:string, planId?:string, status?:string, expires_at?:string}

        const clientServices = new CreateClientServices()
        const client = await clientServices.execute({name,number,planId,status,expires_at})

        reply.send(client)
    } 
}

export{CreateClientController}