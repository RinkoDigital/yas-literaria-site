# YAS Literária

Biblioteca digital multilíngue da Rinko Digital com uma experiência literária em estantes e a assistente documental YAS.

## O que está incluído

- página inicial cinematográfica e responsiva;
- biblioteca em estantes com busca e filtros;
- apresentação da personagem Yas, sua personalidade original e os Fragmentos de Memória;
- manifestação progressiva da Yas: voz (1 fragmento), silhueta (5), presença (12) e forma completa (25);
- interface em português, inglês, espanhol, francês, alemão, árabe, chinês e japonês;
- chat literário e documental com personalidade própria, memória curta da conversa, RAG, citações e linguagem simples;
- API protegida no servidor, sem expor a chave da OpenAI no navegador;
- aviso educativo e distinção entre fatos processuais, alegações, argumentos e depoimentos.

Os livros exibidos atualmente são exemplos visuais. Arquivos integrais de livros, transcrições judiciais e a chave da API não fazem parte deste repositório.

## Executar no computador

1. Instale as dependências com `npm install`.
2. Copie `.env.example` para `.env.local`.
3. Preencha as variáveis com uma chave e um banco vetorial autorizados.
4. Execute `npm run dev` e abra `http://localhost:3000`.

## Direitos e responsabilidade

Use apenas materiais próprios, de domínio público ou devidamente licenciados. Uma transcrição registra o que foi dito em tribunal; ela não comprova automaticamente cada declaração. O projeto tem finalidade educativa e não oferece aconselhamento jurídico.

Site e IA desenvolvidos pela Rinko Digital.

## Publicar no Netlify

1. No Netlify, escolha **Add new site → Import an existing project**.
2. Conecte o GitHub e selecione `RinkoDigital/yas-literaria-site`.
3. O arquivo `netlify.toml` já configura o build `npm run build`, a pasta `.next` e o Node.js 22.
4. Em **Site configuration → Environment variables**, crie:
   - `OPENAI_API_KEY` — marque como segredo e cole a chave da Rinko Digital;
   - `OPENAI_VECTOR_STORE_ID` — identificador do acervo documental;
   - `OPENAI_CHAT_MODEL` — modelo usado pela YAS.
5. Inicie o deploy. A rota `/api/chat` será publicada como função do servidor, mantendo a chave fora do navegador.

Nunca adicione a chave da OpenAI ao GitHub, ao `netlify.toml` ou a qualquer arquivo público. Para trocar a chave depois, altere somente a variável de ambiente no painel do Netlify e publique novamente.
