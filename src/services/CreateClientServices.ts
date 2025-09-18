import prismaClient from '../prisma';


interface CreateClientProps{
    name:string,
    number:string,
}

class CreateClientServices{
    async execute({name,number}: CreateClientProps){

        if(!name || !number  ){
            throw new Error('Preencha todos os campos!')
        }
        const client = await prismaClient.client.create({
            data:{
                name,
                number
            }
        })

        return client
    }
}

export {CreateClientServices}