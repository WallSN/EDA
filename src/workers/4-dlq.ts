import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function startDLQWorker(requestId: string) {
    console.log('');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('ALERTA CRÍTICO - PROCESSAMENTO FALHOU');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`Request ID: ${requestId}`);
    console.log('Este pedido precisa de VERIFICAÇÃO MANUAL');

    // Busca informações do pedido para exibir detalhes
    const request = await prisma.request.findUnique({
        where: { id: requestId }
    });

    if (request) {
        console.log(`Email do cliente: ${request.email}`);
        console.log(`Data de criação: ${request.createdAt.toISOString()}`);
        console.log(`Última atualização: ${request.updatedAt.toISOString()}`);
    }

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('');
}