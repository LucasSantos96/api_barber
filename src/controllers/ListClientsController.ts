import { FastifyRequest, FastifyReply } from "fastify";
import { ListClientsServices } from "../services/ListClientsServices";

class ListClientsController{
    async handle(request:FastifyRequest, reply:FastifyReply){
        const listClients = new ListClientsServices();
        const clients = await listClients.execute()

        reply.send(clients)
    }
}

export{ListClientsController}