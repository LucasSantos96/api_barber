import prismaClient from '../prisma';


interface CreateClientProps{
    name:string,
    number:string,
    planId?:string,
    status?:string,
    expires_at?:string,
}

class CreateClientServices{
    async execute({name,number,planId,status,expires_at}: CreateClientProps){

        if(!name || !number  ){
            throw new Error('Preencha todos os campos!')
        }
        const client = await prismaClient.client.create({
            data:{
                name,
                number,
                planId: planId || null,
                status: "active",
                expires_at,
            }
        })

        return client
    }
}

export {CreateClientServices}