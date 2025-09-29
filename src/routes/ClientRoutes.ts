import { 
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply
} from "fastify";// Importa tipos do Fastify
import { request } from "http";

//Controllers
import { CreateClientController } from "../controllers/CreateClientController";

import {ListClientsController} from '../controllers/ListClientsController'

import { DeleteClientController } from "../controllers/DeleteClientController";

import { UpdateClienteController } from "../controllers/UpdateClientController";

import{ ActiveClientController} from '../controllers/ActiveClientController'
//--//


// Função para definir rotas
export async function routes(
    fastify: FastifyInstance,
    options: FastifyPluginOptions
){

fastify.get('/teste',(request:FastifyRequest, reply:FastifyReply)=>{
    return {ok:true} //rota de test
});


fastify.post('/add-client', async(request:FastifyRequest, reply: FastifyReply)=>{
    return new CreateClientController().handle(request,reply)
})

fastify.get('/list-clients', async(request:FastifyRequest, reply: FastifyReply)=>{
    return new ListClientsController().handle(request,reply)

})

fastify.delete('/delete-client', async(request:FastifyRequest, reply: FastifyReply)=>{
    return new DeleteClientController().handle(request,reply)

})


fastify.patch('/update-client/:id', async(request:FastifyRequest, reply: FastifyReply)=>{
    return new UpdateClienteController().handle(request,reply)

})
fastify.post("/active-client", async (request: FastifyRequest, reply: FastifyReply)=>{
    return new ActiveClientController().handle(request, reply)
  }) 

}

