# Plano — Página de Muay Thai

Criar uma nova página independente de Muay Thai dentro do site, seguindo o mesmo padrão visual e funcional das páginas de Jiu-Jitsu e Capoeira.

## Alterações

- Criar a rota `/muay-thai` com cabeçalho, apresentação principal, informações da modalidade, benefícios, área reservada para galeria, chamada para aula experimental e rodapé.
- Manter o tema preto e azul, o logotipo do Cruzeirinho, animações e o botão de WhatsApp já usados nas outras modalidades.
- Como as fotos serão enviadas depois, usar áreas visuais identificadas para receber as imagens, sem inventar fotos.
- Adicionar “Muay Thai” à seção “Conheça Nossos Projetos” e ao menu de modalidades no celular.
- Incluir título, descrição e informações de compartilhamento próprias da nova página.
- Confirmar que o erro informado em `utils.ts` não está mais presente e validar a nova página em computador e celular.

## Detalhes técnicos

- A nova página será um arquivo de rota TanStack próprio, mantendo a abertura em nova aba usada pelos outros projetos.
- O código atual de `utils.ts` será preservado se a verificação continuar sem erro, pois ele contém apenas a função de combinação de classes e não possui a linha problemática mencionada.
