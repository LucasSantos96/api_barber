import prismaClient from "../prisma";

import { Decimal } from "../generated/prisma/runtime/library";

interface PlanProps {
  id: string;
  name: string;
  price: Decimal;
}

class CreatePlanServices{
    async execute({id, name, price}:PlanProps){
         if(!name || !price  ){
            throw new Error('Preencha todos os campos!')
        }
        const plans = await prismaClient.plan.create({
            data:{
                id,
                name, 
                price
            }
        })
        return plans
    }
}

export{CreatePlanServices}