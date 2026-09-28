# Cópia local do site institucional

Referência: https://pedro-henrique-da-silva-oliveira.plpainel.com/

O HTML e o CSS preservam o conteúdo e o layout responsivo da página de referência. Os links de WhatsApp e Instagram apontam para os destinos originais. Os e-mails usam `mailto:`. Privacidade e termos abrem em janelas com suporte ao teclado.

## Executar

Com Node.js instalado, execute `npm run dev` e acesse http://localhost:3000. Não é necessário instalar dependências.

Também é possível abrir `index.html` diretamente no navegador ou publicar `index.html` e a pasta `assets` em uma hospedagem estática.

## Arquivos

- `index.html`: conteúdo e estrutura editáveis.
- `assets/styles.css`: estilos da referência, incluindo regras responsivas.
- `assets/local.css`: ajustes de foco e navegação por âncoras.
- `assets/app.js`: acessibilidade das janelas de privacidade e termos.
- `server.mjs`: servidor local sem dependências.

A cópia funciona sem o servidor original para carregar seus arquivos. Scripts de publicidade, rastreamento e runtime Next.js não são necessários nesta versão estática.
