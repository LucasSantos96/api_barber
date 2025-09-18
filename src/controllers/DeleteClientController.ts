import { FastifyRequest, FastifyReply } from "fastify"
import {DeleteClientServices} from '../services/DeleteClientServices'

class DeleteClientController{
    async handle(request:FastifyRequest,reply:FastifyReply){
        const{id} = request.query as {id:string}

        const deleteClient = new DeleteClientServices()
        const client = await deleteClient.execute({id})

        reply.send(client)
    }
}

export{DeleteClientController}