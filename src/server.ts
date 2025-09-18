import Fastify from 'fastify';
const fastify = Fastify({logger: true})
import * as dotenv from 'dotenv';
dotenv.config()
const port = Number(process.env.PORT) || 3333






fastify.get('/',async (request,reply)=>{
    reply.send('Hello world!')
})












fastify.listen({port},(err,address)=>{
    if(err){
        fastify.log.error(err)
        process.exit(1)
    }
    console.log(` 🚀Servidor rodando em ${address}`)
})