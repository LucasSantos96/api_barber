import prismaClient from '../prisma';

interface ActiveProps{
    status: string;
    expires_at: Date;
    
}

class ActivePlanService{
    
    async execute(planId: string){
        if(!planId){
            throw new Error("Id do plano não informado!");
        }
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate()+30); //Dia de hoje + 30 dias

        const plan = await prismaClient.plan.update({
            where:{id: planId},
            data:{
                status: "active",
                expires_at: expiresAt
            }
        });

        return plan;
    }
}

export {ActivePlanService}