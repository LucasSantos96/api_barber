import prismaClient from "../prisma";

interface DeleteClientProps{
    id:string
}

class DeleteClientServices{
    async execute({id}:DeleteClientProps){
        
        //deleta o usuario referente ao id
        await prismaClient.client.delete({where:{id}});
        return {message:"Cliente deletado!"}
    } catch(err:any){
        if (err.code === "P2025"){
            throw new Error("Cliente não encontrado!")
        }
         throw err;
    }
}

export{DeleteClientServices}