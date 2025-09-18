import { FastifyRequest, FastifyReply } from "fastify"

import{UpdateClientServices} from '../services/UpdateClientServices'

class UpdateClienteController{
    async handle(request:FastifyRequest,reply:FastifyReply){

        const {id} = request.params as {id:string }

        const {name, number, planId} = request.body as {name?:string, number?: string, planId?:string}

        const updateCliente = new UpdateClientServices();
        const client = await updateCliente.execute({id,name,number,planId})

        reply.send(client)

    }

}

export{UpdateClienteController}
