import prismaClient from "../prisma";
 

class ListPlansServices{
    async execute(){
        const plans = await prismaClient.plan.findMany()

        return plans   
    }

}

export {ListPlansServices}