import prismaClient from '../prisma';

interface ActiveProps{
    status: string;
    expires_at: Date;
    
}

class ActiveClientService{
    
    async execute(clientId: string){
        if(!clientId){
            throw new Error("Id do plano não informado!");
        }
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate()+30); //Dia de hoje + 30 dias

        const plan = await prismaClient.client.update({
            where:{id: clientId},
            data:{
                status: "active",
                expires_at: expiresAt
            }
        });

        return plan;
    }
}

export {ActiveClientService}