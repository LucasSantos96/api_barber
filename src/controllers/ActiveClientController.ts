// ActiveClientController.ts
import { FastifyReply, FastifyRequest } from "fastify";
import prisma from "../prisma";

// Controlador responsável por renovar o plano de um cliente
export class ActiveClientController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    // Extrai o clientId enviado no body da requisição
    const { clientId } = request.body as { clientId: string };

    try {
      // 1. Verifica se o cliente existe no banco
      const client = await prisma.client.findUnique({ where: { id: clientId } });

      if (!client) {
        // Caso não exista, retorna 404 (não encontrado)
        return reply.status(404).send({ error: "Cliente não encontrado" });
      }

      // 2. Calcula a nova data de expiração
      // Aqui está fixo em +30 dias, mas depois podemos mudar
      // para ser baseado na duração do plano (ex: mensal, trimestral, anual).
      const newExpiresAt = new Date();
      newExpiresAt.setDate(newExpiresAt.getDate() + 30);

      // 3. Atualiza os dados do cliente no banco
      // - status: mantém como "active"
      // - expires_at: define a nova data calculada acima
      const updatedClient = await prisma.client.update({
        where: { id: clientId },
        data: { 
          status: "active",
          expires_at: newExpiresAt 
        },
      });

      // 4. Retorna o cliente atualizado para o front
      // O front já vai ter a nova data e recalcular os dias restantes
      return reply.send(updatedClient);

    } catch (err) {
      // Captura qualquer erro inesperado e retorna 500
      console.error(err);
      return reply.status(500).send({ error: "Erro ao renovar plano" });
    }
  }
}
