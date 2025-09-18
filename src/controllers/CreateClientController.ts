import { FastifyRequest, FastifyReply } from "fastify";

import { CreateClientServices } from "../services/CreateClientServices";


class CreateClientController{
    async handle(request: FastifyRequest, reply:FastifyReply){
        
        const {name,number} = request.body as {name:string, number:string}

        const clientServices = new CreateClientServices()
        const client = await clientServices.execute({name,number})

        reply.send(client)
    } 
}

export{CreateClientController}