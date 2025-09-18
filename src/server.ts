import Fastify from 'fastify';
//inicia o fastify
const fastify = Fastify({logger: true})

//importa o dotenv
import * as dotenv from 'dotenv';
dotenv.config()//inicia dotenv

const port = Number(process.env.PORT) || 3333

//importa as rotas
import { routes } from './routes/ClientRoutes';
//registra a saída das rotas
fastify.register(routes)



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