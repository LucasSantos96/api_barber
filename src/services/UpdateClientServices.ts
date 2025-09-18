import prismaClient from "../prisma";

interface UpdateClientProps{
    id:string;
    name?: string;
    number?: string;
    planId?: string;
}


class UpdateClientServices{
    async execute({id, name, number, planId}:UpdateClientProps){

        await prismaClient.client.update({where:{id},
        data:{
            //Usamos spread condicional (name && { name }) para atualizar apenas os campos que foram enviados
            ...(name && {name}),
            ...(number && {number}),
            ...(planId && {planId})
        }
        });

    }
}
export { UpdateClientServices };