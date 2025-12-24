# Report System - Event Driven Architecture

Sistema de geração de relatórios assíncrono baseado em eventos, utilizando Node.js, Redis (Pub/Sub) e Workers dedicados.

## 📋 Arquitetura

O fluxo de execução é:
1.  **API**: Recebe o pedido e publica no Redis.
2.  **Fetcher Worker**: Baixa dados externos.
3.  **PDF Worker**: Gera o arquivo PDF.
4.  **Email Worker**: Envia o e-mail final (Simulado via Ethereal).

## ⚙️ Configuração do Redis

⚠️ **Atenção:** Por padrão, o projeto está configurado para conectar em uma instância de **Redis na Nuvem** (`redis://52.55.103.172:443`), conforme definido em `src/config/redis.ts`.

### Usando Redis Local (Opcional)

Se você preferir rodar seu próprio Redis localmente, altere a URL no arquivo de configuração para `redis://localhost:6379` e suba o serviço via Docker:

```bash
docker run --name redis-local -p 6379:6379 -d redis
```

## 🚀 Instalação e Execução

Abra o VSCode na raiz do projeto. Em seguida abra o terminal e siga os passos abaixo:

1.  Instale as dependências:
    ```bash
    npm install
    ```

2.  Prepare o Banco de Dados (SQLite):
    ```bash
    npx prisma generate
    npx prisma migrate dev --name init
    ```

3.  Execute o projeto:
    ```bash
    npm run dev
    ```

## 🧪 Como Testar

1.  Acesse `http://localhost:3000`.
2.  Preencha o e-mail e clique em "Enviar Relatório".
3.  Acompanhe os logs no terminal (`[Fetcher]`, `[PDF]`, `[Email]`).
4.  Quando finalizar, clique no link do **Ethereal** gerado no log para visualizar o e-mail "fake" com o anexo.

## 📂 Estrutura de Arquivos

* `src/workers/`: Contém a lógica de cada etapa do processamento.
* `storage/`: Onde os arquivos temporários (imagens e PDFs) são salvos.
* `public/`: Contém o frontend básico.
