import Fastify from 'fastify';
//inicia o fastify
const fastify = Fastify({logger: true})

import cors from '@fastify/cors'

//importa o dotenv
import * as dotenv from 'dotenv';
dotenv.config()//inicia dotenv

const port = Number(process.env.PORT) || 3333

//importa as rotas
import { routes } from './routes/ClientRoutes';
import { planRoutes } from './routes/PlanRoutes';




fastify.register(cors,{
    // libera qualquer origem (apenas em DEV)
    origin:"*",
  methods:["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"]// adicione os métodos que vai usar
})

//registra a saída das rotas
fastify.register(routes, planRoutes)





//rota principal
fastify.get('/',async (request,reply)=>{
    reply.send('Hello world!')
})



//ouvinte do servidor
fastify.listen({port},(err,address)=>{
    if(err){
        fastify.log.error(err)
        process.exit(1)
    }
    console.log(` 🚀Servidor rodando em ${address}`)
})