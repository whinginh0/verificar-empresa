const facebookVerification = document.createElement('meta');
facebookVerification.name = 'facebook-domain-verification';
facebookVerification.content = 'x9i8hv8g45z7jw0tlosqo5wjwsnhmx';
document.head.appendChild(facebookVerification);

document.body.innerHTML = document.body.innerHTML
  .replaceAll('[INSERIR WHATSAPP]', '(22) 92017-5919')
  .replaceAll('[INSERIR TELEFONE]', '(22) 92017-5919');

const modals = [...document.querySelectorAll('[id$="-modal"]')];
let lastTrigger;

const privacyLink = [...document.querySelectorAll('a')].find(link => link.textContent.trim() === 'Política de Privacidade');
if (privacyLink) privacyLink.href = '#privacy-modal';
const termsLink = [...document.querySelectorAll('a')].find(link => link.textContent.trim() === 'Termos de Uso');
if (termsLink) termsLink.href = '#terms-modal';
const privacyModal = document.querySelector('#privacy-modal');
if (privacyModal) privacyModal.innerHTML = `<a href="/" class="absolute inset-0" aria-label="Fechar política de privacidade"></a><div class="relative max-h-[82vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-white p-7 shadow-[0_30px_60px_rgba(0,0,0,.25)]"><a href="/" aria-label="Fechar" class="absolute right-4 top-3 text-2xl font-bold text-slate-500">×</a><h2 class="pr-8 text-2xl font-black text-slate-950">Política de Privacidade</h2><div class="mt-4 whitespace-pre-line text-sm leading-8 text-slate-700"><p>POLÍTICA DE PRIVACIDADE</p><p>64.701.870 LEONARDO VITOR DA SILVA<br>CNPJ: 64.701.870/0001-70<br>Endereço: Rua Coronel Newton Barbabela, 105 - Loja, Mangueiras (Barreiro), Belo Horizonte - MG, CEP 30666-280</p><p><b>1. Finalidade</b><br>Esta Política de Privacidade descreve como a 64.701.870 LEONARDO VITOR DA SILVA coleta, utiliza, armazena e protege dados pessoais de clientes, parceiros, fornecedores e usuários.</p><p><b>2. Dados Coletados</b><br>Coletamos apenas os dados necessários para as finalidades descritas nesta política, incluindo nome, e-mail, telefone, dados profissionais e registros de comunicação.</p><p><b>3. Uso dos Dados</b><br>Os dados são utilizados para prestação e gestão dos serviços, comunicação operacional, cumprimento de obrigações legais e melhoria dos serviços.</p><p><b>4. Compartilhamento de Dados</b><br>Não comercializamos dados pessoais. O compartilhamento ocorre apenas com parceiros essenciais ou quando exigido por lei.</p><p><b>5. Direitos do Titular (LGPD)</b><br>O titular pode solicitar confirmação de tratamento, acesso, correção, atualização, anonimização, bloqueio, eliminação e revogação de consentimentos.</p><p><b>6. Armazenamento e Segurança</b><br>Adotamos medidas técnicas e administrativas adequadas para proteger os dados pessoais.</p><p><b>7. Alterações</b><br>Esta política pode ser atualizada periodicamente.</p><p><b>8. Contato</b><br>📧 E-mail: contato@leonardo-vitor-da-silva.hyzencompra.shop<br>📞 Telefone: [INSERIR TELEFONE]</p><p>64.701.870 LEONARDO VITOR DA SILVA<br>CNPJ 64.701.870/0001-70<br>© 2026 64.701.870 LEONARDO VITOR DA SILVA. Todos os direitos reservados.</p></div></div>`;
const termsModal = document.querySelector('#terms-modal');
if (termsModal) termsModal.innerHTML = `<a href="/" class="absolute inset-0" aria-label="Fechar termos de uso"></a><div class="relative max-h-[82vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-white p-7 shadow-[0_30px_60px_rgba(0,0,0,.25)]"><a href="/" aria-label="Fechar" class="absolute right-4 top-3 text-2xl font-bold text-slate-500">×</a><h2 class="pr-8 text-2xl font-black text-slate-950">Termos de Uso</h2><div class="mt-4 whitespace-pre-line text-sm leading-8 text-slate-700"><p>Esta página tem finalidade institucional, informativa e comercial. O visitante deve utilizar as informações e canais disponibilizados de forma lícita, respeitosa e relacionada aos serviços, produtos, atendimento ou informações da empresa.</p><p>A 64.701.870 LEONARDO VITOR DA SILVA busca manter os dados cadastrais, canais de contato, descrições e informações comerciais atualizados. Eventuais informações podem ser corrigidas, complementadas ou alteradas a qualquer momento.</p><p>O contato por WhatsApp, telefone, e-mail ou redes sociais deve ser usado para solicitações reais, atendimento comercial, suporte, dúvidas ou continuidade de relacionamento iniciado pelo visitante.</p><p>Esta página pode direcionar para ferramentas externas, como WhatsApp, Instagram, telefone e e-mail. Cada plataforma pode possuir regras, políticas e condições próprias.</p></div></div>`;

for (const modal of modals) {
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  const title = modal.querySelector('h2');
  title.id = `${modal.id}-title`;
  modal.setAttribute('aria-labelledby', title.id);
}

function syncModal() {
  const current = modals.find(modal => `#${modal.id}` === location.hash);
  const privacyRoute = location.pathname === '/privacidade';
  const termsRoute = location.pathname === '/termos';
  const privacy = document.querySelector('#privacy-modal');
  if (privacyRoute && privacy) {
    privacy.classList.remove('invisible', 'opacity-0');
    document.body.style.overflow = 'hidden';
    privacy.querySelector('[aria-label="Fechar"]').focus({ preventScroll: true });
    return;
  }
  const terms = document.querySelector('#terms-modal');
  if (termsRoute && terms) {
    terms.classList.remove('invisible', 'opacity-0');
    document.body.style.overflow = 'hidden';
    terms.querySelector('[aria-label="Fechar"]').focus({ preventScroll: true });
    return;
  }
  document.body.style.overflow = current ? 'hidden' : '';
  if (current) {
    lastTrigger = document.activeElement;
    current.querySelector('[aria-label="Fechar"]').focus({ preventScroll: true });
  } else if (lastTrigger) {
    lastTrigger.focus({ preventScroll: true });
    lastTrigger = null;
  }
}

window.addEventListener('hashchange', syncModal);
document.addEventListener('keydown', event => {
  const current = modals.find(modal => `#${modal.id}` === location.hash);
  if (!current) return;
  if (event.key === 'Escape') {
    if (location.pathname === '/privacidade' || location.pathname === '/termos') location.href = '/';
    else location.hash = 'home';
  }
  if (event.key === 'Tab') {
    const links = [...current.querySelectorAll('a[href]')];
    const first = links[0];
    const last = links[links.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});
syncModal();
