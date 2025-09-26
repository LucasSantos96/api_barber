import prismaClient from "../prisma";



class ListClientsServices{
    async execute(){
        const clients = await prismaClient.client.findMany({
            include:{
                plan:true
            }
        })

        return clients
    }

}

export {ListClientsServices}