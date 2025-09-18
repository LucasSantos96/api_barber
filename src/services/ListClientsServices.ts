import prismaClient from "../prisma";



class ListClientsServices{
    async execute(){
        const clients = await prismaClient.client.findMany()

        return clients
    }

}

export {ListClientsServices}