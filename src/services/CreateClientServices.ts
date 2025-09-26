import prismaClient from '../prisma';


interface CreateClientProps{
    name:string,
    number:string,
    planId?:string
}

class CreateClientServices{
    async execute({name,number,planId}: CreateClientProps){

        if(!name || !number  ){
            throw new Error('Preencha todos os campos!')
        }
        const client = await prismaClient.client.create({
            data:{
                name,
                number,
                planId: planId || null
            }
        })

        return client
    }
}

export {CreateClientServices}