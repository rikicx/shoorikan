// Conteúdo editorial — 100% baseado nas informações públicas da Academia Shoorikan
// (site oficial academiashoorikan.com.br: páginas Academia, Equipe, Horários, Projeto Social;
// e perfil @academiashoorikan no Instagram). Nada aqui foi inventado.

import { PHOTOS } from "./images";

/* ------------------------------------------------------------------ */
/* NAVEGAÇÃO                                                           */
/* ------------------------------------------------------------------ */

export type NavItem = { id: string; label: string; route: string };

export const NAV: NavItem[] = [
  { id: "historia", label: "História", route: "/historia" },
  { id: "principios", label: "Princípios", route: "/principios" },
  { id: "modalidades", label: "Modalidades", route: "/modalidades" },
  { id: "programas", label: "Programas", route: "/programas" },
  { id: "equipe", label: "Equipe", route: "/equipe" },
  { id: "projeto-social", label: "Projeto Social", route: "/projeto-social" },
  { id: "estrutura", label: "O Dojo", route: "/estrutura" },
  { id: "horarios", label: "Horários", route: "/horarios" },
  { id: "visite", label: "Visite", route: "/visite" },
];

/* ------------------------------------------------------------------ */
/* ÍNDICE DO SITE (usado na home para linkar todas as páginas)         */
/* ------------------------------------------------------------------ */

export const SITE_PAGES = [
  {
    href: "/historia",
    title: "História",
    desc: "Trinta anos de tradição, desde o antigo Yamasaki Judô Clube.",
  },
  {
    href: "/principios",
    title: "Princípios",
    desc: "A filosofia de Jigoro Kano que guia cada treino.",
  },
  {
    href: "/modalidades",
    title: "Modalidades",
    desc: "Judô, jiu-jitsu e muay thai — conheça cada arte.",
  },
  {
    href: "/programas",
    title: "Programas",
    desc: "Turmas para cada fase da vida, do Kids ao alto rendimento.",
  },
  {
    href: "/equipe",
    title: "Equipe",
    desc: "Sensei Jairo Andrade e o corpo técnico da Shoorikan.",
  },
  {
    href: "/projeto-social",
    title: "Projeto Social",
    desc: "Como o judô transforma vidas na Vila Prudente.",
  },
  {
    href: "/estrutura",
    title: "O Dojo",
    desc: "Conheça o espaço onde a Shoorikan treina.",
  },
  {
    href: "/horarios",
    title: "Horários",
    desc: "A grade completa de aulas, sete dias por semana.",
  },
  {
    href: "/visite",
    title: "Visite",
    desc: "Endereço, contato e como agendar sua aula experimental.",
  },
];

/* ------------------------------------------------------------------ */
/* MANIFESTO                                                           */
/* ------------------------------------------------------------------ */

export const MANIFESTO = [
  "No judô, a saudação vem antes e depois de cada técnica.",
  "“Shoori” é vencedor da vida. “Kan”, o lugar onde se aprende.",
  "Aqui, vencer é vencer a si mesmo —",
  "com o respeito e a disciplina que se levam para fora do tatame.",
];

export const INTRO_PARAGRAPH =
  "A Academia de Judô Shoorikan une a prática tradicional do judô, do jiu-jitsu e do muay thai a instalações modernas. Tudo é pensado para que o aluno se desenvolva técnica e fisicamente em um ambiente profissional e aconchegante. Portas abertas para crianças e adultos de todas as idades — dos que querem aprender uma arte marcial aos que se preparam para a competição.";

/* ------------------------------------------------------------------ */
/* NÚMEROS (todos verificáveis nas fontes públicas)                    */
/* ------------------------------------------------------------------ */

export const FACTS = [
  { value: "1996", label: "Origem no antigo Yamasaki Judô Clube" },
  { value: "30 anos", label: "A completar em 2026" },
  { value: "6º Dan", label: "Graduação Kodansha do sensei fundador" },
  { value: "+60", label: "Crianças já atendidas pelo Projeto Social" },
  { value: "3", label: "Modalidades: judô, jiu-jitsu e muay thai" },
  { value: "7 dias", label: "De treino por semana, em vários horários" },
];

/* ------------------------------------------------------------------ */
/* HISTÓRIA                                                            */
/* ------------------------------------------------------------------ */

export const TIMELINE = [
  {
    year: "1996",
    title: "A origem",
    text: "Do antigo Yamasaki Judô Clube, dirigido pelo lendário sensei Shigueto Yamasaki, nasce a Shoorikan.",
  },
  {
    year: "O encontro",
    title: "Andrade & Niitsuma",
    text: "Com a saída de Yamasaki, o então jovem Jairo Andrade convida o sensei Tsutomu Niitsuma para, juntos, desenvolver a academia.",
  },
  {
    year: "O nome",
    title: "Vencedor da vida",
    text: "“Shoori”, vencedor da vida — não do adversário. “Kan”, onde se aprende. O nome lembra que, no judô, se treina com o outro, nunca contra o valor dele.",
  },
  {
    year: "A escola",
    title: "O verdadeiro judô",
    text: "Filiação à Federação Paulista de Judô e o compromisso com o verdadeiro judô — suas atitudes mentais e seu comportamento.",
  },
  {
    year: "Além do tatame",
    title: "Projeto Social",
    text: "O judô como ferramenta de transformação: crianças da comunidade chegam ao dojo em parceria com a ONG Arca do Saber.",
  },
  {
    year: "2026",
    title: "30 anos",
    text: "Três décadas mantendo o legado vencedor e a tradição. Mais de 40 anos de judô nas mãos do sensei Jairo Andrade.",
  },
];

/* ------------------------------------------------------------------ */
/* PRINCÍPIOS (Jigoro Kano / Kodokan)                                  */
/* ------------------------------------------------------------------ */

export const PRINCIPLES = {
  quote:
    "O judoca não se aperfeiçoa para lutar, luta para se aperfeiçoar.",
  quoteAuthor: "Jigoro Kano, criador do judô",
  intro:
    "Mais do que conquistar campeonatos, o sensei Jairo e toda a equipe seguem os princípios do criador do judô, o mestre Jigoro Kano. Crianças e adultos se preparam não apenas para o tatame, mas para a vida.",
  items: [
    {
      kanji: "精力善用",
      romaji: "Seiryoku Zen'yō",
      title: "Máxima eficiência",
      text: "O melhor uso da energia: técnica, tempo e equilíbrio no lugar da força bruta — dentro e fora do tatame.",
    },
    {
      kanji: "自他共栄",
      romaji: "Jita Kyōei",
      title: "Prosperidade mútua",
      text: "A solidariedade humana para o melhor bem individual e universal. Quem entra para a Shoorikan também ajuda o outro a evoluir.",
    },
    {
      kanji: "礼",
      romaji: "Rei",
      title: "Respeito e amizade",
      text: "A saudação abre e encerra cada treino. Aqui se preza pelo respeito, pela disciplina e pela amizade.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* MODALIDADES                                                         */
/* ------------------------------------------------------------------ */

export const MODALITIES = [
  {
    id: "judo",
    name: "Judô",
    kanji: "柔道",
    lead: "A arte principal da casa desde 1996.",
    text: "Do judô lúdico das crianças ao alto rendimento: Gokyo, Ne Waza e Kata. Academia filiada à Federação Paulista de Judô, com turmas Kids, Infantil, Juvenil e Adulto.",
    photo: PHOTOS.judoProjecao,
  },
  {
    id: "jiu-jitsu",
    name: "Jiu-Jitsu",
    kanji: "柔術",
    lead: "Do fundamento ao avançado, no chão.",
    text: "Turmas Kids I e II, infanto-juvenil, juvenil e adulto. Trabalho técnico detalhado para quem quer aprender a arte suave ou aprimorar a luta de solo.",
    photo: PHOTOS.treino,
  },
  {
    id: "muay-thai",
    name: "Muay Thai",
    kanji: "ムエタイ",
    lead: "Técnica em pé e condicionamento.",
    text: "Aulas com boa didática, unindo o lado técnico à comunicação e ao ritmo. Turmas adultas em vários horários ao longo da semana.",
    photo: PHOTOS.muaythai,
  },
];

/* ------------------------------------------------------------------ */
/* PROGRAMAS / TURMAS                                                  */
/* ------------------------------------------------------------------ */

export const PROGRAMS = [
  {
    tag: "Kids I",
    age: "3 a 5 anos",
    title: "O primeiro contato",
    text: "O judô apresentado ao pequeno praticante por uma metodologia que une fundamento técnico, disciplina e caráter lúdico — mantendo o interesse da criança que ainda desenvolve corpo e concentração.",
  },
  {
    tag: "Kids II",
    age: "5 a 7 anos",
    title: "Fundamentos com jogo",
    text: "A criança avança nos fundamentos do esporte de forma agradável e de fácil assimilação, ganhando repertório motor e autonomia no tatame.",
  },
  {
    tag: "Infantil",
    age: "7 a 12 anos",
    title: "A base do competidor",
    text: "Contato com técnicas mais avançadas e avaliações técnicas e comportamentais. Os iniciados convivem com crianças em nível de competição para se espelharem em bons exemplos.",
  },
  {
    tag: "Juvenil",
    age: "a partir de 10 anos",
    title: "Pré-juvenil e juvenil",
    text: "Turmas de fundamentos e de rendimento que preparam o jovem judoca para a rotina de treino e para os campeonatos.",
  },
  {
    tag: "Adultos",
    age: "todas as idades",
    title: "Aprender ou aperfeiçoar",
    text: "Para quem busca o judô como condicionamento físico ou como esporte competitivo. Treinamento de alto nível, com instrução técnica detalhada e respeito às capacidades de cada um. Aulas com o próprio sensei Jairo Andrade e equipe.",
  },
  {
    tag: "Alto rendimento",
    age: "sob agendamento",
    title: "Atleta de competição",
    text: "Para o competidor de judô que quer refinar a técnica e para o atleta de MMA que quer aprimorar a luta de chão. Horário especial mediante agendamento.",
  },
];

/* ------------------------------------------------------------------ */
/* EQUIPE (bios fiéis à página Equipe do site oficial)                 */
/* ------------------------------------------------------------------ */

export const FOUNDER = {
  name: "Sensei Jairo Andrade",
  role: "Fundador e instrutor técnico · 6º Dan",
  bio: "Sócio-proprietário da Shoorikan e praticante de artes marciais há mais de 40 anos. Kodansha — faixa vermelha e branca — 6º Dan de judô e faixa preta 4º grau de jiu-jitsu. Tem curso de especialização técnica no Japão pela Budo University e é campeão de diversos campeonatos nacionais. Natural de Juazeiro, Bahia. Registro no CREF nº 013470-P/SP.",
  photo: "/equipe/Jairo-Andrade.jpg",
};

export const TEAM = [
  {
    name: "Danilo Terron",
    role: "Judô 3º Dan · Jiu-jitsu faixa preta",
    bio: "Sensei há 39 anos, especializado em treinamento infantil. No judô, campeão paulista, campeão paulistano e vice-campeão brasileiro por equipes. No jiu-jitsu, tricampeão paulista, formado pelo mestre Rocian Gracie.",
  },
  {
    name: "Diego González",
    role: "Judô 1º Dan",
    bio: "De Santiago do Chile, pratica judô há 20 anos, formado pelo Club de Judo Judokan Santiago. Competiu em campeonatos nacionais e latino-americanos até 2019.",
  },
  {
    name: "Luis Garcia",
    role: "Judô 1º Dan",
    bio: "Licenciado em Artes Visuais, iniciou no judô aos 7 anos em São Vicente e lutou por Santos. Atualmente atleta da classe veterano, é campeão paulista em sua categoria.",
  },
  {
    name: "Raphael Mansur",
    role: "Muay Thai e Boxe",
    bio: "Pratica muay thai e boxe há 10 anos e cursa bacharelado em Educação Física. Boa didática, unindo o lado técnico à comunicação e à diversão nas aulas.",
  },
  {
    name: "André Luis Carnelós",
    role: "Jiu-jitsu faixa preta",
    bio: "Líder do “Team Pé de Chumbo” São Paulo e praticante de artes marciais há 17 anos. Responsável pelos treinos de Kids I e II, infanto-juvenil e adultos. Também atua como personal trainer.",
  },
  {
    name: "Ana Lucia Coimbra",
    role: "Diretora Técnica · Judô 1º Dan",
    bio: "Enfermeira especialista em cardiologia. Iniciou a arte marcial em 1997 com os senseis Yamasaki, Jairo Andrade e Tsutomu Niitsuma. Pratica Kata — Nage No Kata, Katame No Kata e Ju No Kata — e é medalhista no Campeonato Paulista de Nage No Kata, categoria Yudansha dupla mista.",
  },
  {
    name: "Vitória Medrado",
    role: "Judô 1º Dan",
    bio: "Sensei desde 2021, especializada em treinamento infantil. Atleta de judô desde os oito anos, com passagem pelo alto rendimento e diversas medalhas. Formada na área de educação.",
  },
  {
    name: "Marcos Oquendo",
    role: "Judô 1º Dan",
    bio: "Iniciou o judô em 1983 com os senseis Carlos Penna e Juarez Jesus. Foi campeão dos antigos campeonatos “zonal”, “regional” e “paulista”. Competidor de Kata (Nage No Kata e Katame No Kata) e auxiliar do corpo técnico.",
  },
  {
    name: "Marcelo Fruehwirth",
    role: "Diretor Técnico · Judô 1º Dan",
    bio: "Pratica judô há 23 anos, boa parte da formação pela Associação de Judô Kaikan de Cascavel (PR). Medalhista no Campeonato Paulista nas modalidades Nage No Kata misto e Ju No Kata masculino. Biólogo e professor, PhD em Engenharia Agrícola.",
  },
];

/* ------------------------------------------------------------------ */
/* PROJETO SOCIAL                                                      */
/* ------------------------------------------------------------------ */

export const SOCIAL = {
  lead:
    "Acreditamos no judô como ferramenta de transformação social e de formação de caráter.",
  paragraphs: [
    "O judô está na vida do sensei Jairo Andrade há 40 anos, e ele conhece bem o potencial de transformação do esporte. Natural de Juazeiro, na Bahia, Jairo carrega um sonho: compartilhar o judô com o maior número de crianças possível e deixar um legado na vida de quem, naturalmente, não teria a oportunidade de ter contato com este esporte.",
    "O projeto começou por indicação da mãe de um aluno, com a parceria firmada com a ONG Arca do Saber, na Comunidade da Vila Prudente, zona leste de São Paulo. Já foram mais de 60 crianças impactadas positivamente. Semanalmente, cerca de 20 crianças saem da comunidade rumo à Shoorikan, em transporte provido pela academia, e têm contato não apenas com técnicas de judô, mas com disciplina e respeito.",
    "Quem entra para a Shoorikan ajuda, mesmo que indiretamente, muitas crianças a terem mais uma opção na vida. A academia está aberta a expandir o Projeto Social com outras ONGs e conta com apoiadores que adotam turmas de crianças para ampliar o impacto.",
  ],
  transparency: [
    "Publicação no Diário Oficial da União",
    "Termo de fomento do Ministério do Esporte",
    "Extrato de proposta do Ministério do Esporte",
  ],
  transparencyNote:
    "Documentos de transparência disponíveis na página Projeto Social do site oficial.",
};

/* ------------------------------------------------------------------ */
/* ESTRUTURA                                                           */
/* ------------------------------------------------------------------ */

export const STRUCTURE = {
  lead: "Um espaço pensado para a prática de artes marciais de excelência.",
  items: [
    "Instalações modernas e espaços de alta qualidade",
    "Tatames dedicados para judô e jiu-jitsu",
    "Vestiários masculino e feminino",
    "Ambiente profissional e, ao mesmo tempo, aconchegante",
    "Vila Mariana — fácil acesso, no coração de São Paulo",
  ],
};

/* ------------------------------------------------------------------ */
/* HORÁRIOS (reconstruído a partir da grade publicada no site)         */
/* ------------------------------------------------------------------ */

export type Slot = { time: string; title: string; mod: "Judô" | "Jiu-Jitsu" | "Muay Thai"; group: string };

export const SCHEDULE: { day: string; slots: Slot[] }[] = [
  {
    day: "Segunda",
    slots: [
      { time: "06:00", title: "Jiu-Jitsu", mod: "Jiu-Jitsu", group: "Juvenil e Adulto · Interm./Avançado" },
      { time: "09:00", title: "Jiu-Jitsu", mod: "Jiu-Jitsu", group: "Kids I e Kids II" },
      { time: "16:30", title: "Judô", mod: "Judô", group: "Kids I" },
      { time: "17:30", title: "Judô", mod: "Judô", group: "Kids II" },
      { time: "18:30", title: "Judô", mod: "Judô", group: "Infantil" },
      { time: "19:30", title: "Muay Thai", mod: "Muay Thai", group: "Adulto" },
      { time: "19:30", title: "Judô", mod: "Judô", group: "Juvenil e Adulto · Avançado" },
      { time: "20:00", title: "Judô", mod: "Judô", group: "Juvenil e Adulto · Intermediário" },
    ],
  },
  {
    day: "Terça",
    slots: [
      { time: "09:00", title: "Judô", mod: "Judô", group: "Kids I, Kids II e Infantil" },
      { time: "17:00", title: "Jiu-Jitsu", mod: "Jiu-Jitsu", group: "Kids I e Kids II" },
      { time: "18:00", title: "Jiu-Jitsu", mod: "Jiu-Jitsu", group: "Infanto-Juvenil" },
      { time: "19:00", title: "Judô", mod: "Judô", group: "Pré-Juvenil e Juvenil · Fundamentos" },
      { time: "20:00", title: "Jiu-Jitsu", mod: "Jiu-Jitsu", group: "Juvenil e Adulto · Interm./Avançado" },
      { time: "20:00", title: "Judô", mod: "Judô", group: "Juvenil e Adulto · Intermediário" },
    ],
  },
  {
    day: "Quarta",
    slots: [
      { time: "06:00", title: "Jiu-Jitsu", mod: "Jiu-Jitsu", group: "Juvenil e Adulto · Interm./Avançado" },
      { time: "09:00", title: "Jiu-Jitsu", mod: "Jiu-Jitsu", group: "Kids I e Kids II" },
      { time: "16:30", title: "Judô", mod: "Judô", group: "Kids I" },
      { time: "17:30", title: "Judô", mod: "Judô", group: "Kids II" },
      { time: "18:30", title: "Judô", mod: "Judô", group: "Infantil" },
      { time: "19:30", title: "Muay Thai", mod: "Muay Thai", group: "Adulto" },
      { time: "19:30", title: "Judô", mod: "Judô", group: "Juvenil e Adulto · Avançado" },
      { time: "20:00", title: "Judô", mod: "Judô", group: "Juvenil e Adulto · Intermediário" },
    ],
  },
  {
    day: "Quinta",
    slots: [
      { time: "09:00", title: "Judô", mod: "Judô", group: "Kids I, Kids II e Infantil" },
      { time: "17:00", title: "Jiu-Jitsu", mod: "Jiu-Jitsu", group: "Kids I e Kids II" },
      { time: "18:00", title: "Jiu-Jitsu", mod: "Jiu-Jitsu", group: "Infanto-Juvenil" },
      { time: "19:00", title: "Judô", mod: "Judô", group: "Pré-Juvenil e Juvenil · Fundamentos" },
      { time: "20:00", title: "Jiu-Jitsu", mod: "Jiu-Jitsu", group: "Juvenil e Adulto · Interm./Avançado" },
      { time: "20:00", title: "Judô", mod: "Judô", group: "Juvenil e Adulto · Intermediário" },
    ],
  },
  {
    day: "Sexta",
    slots: [
      { time: "06:00", title: "Jiu-Jitsu", mod: "Jiu-Jitsu", group: "Juvenil e Adulto · Interm./Avançado" },
      { time: "19:30", title: "Muay Thai", mod: "Muay Thai", group: "Adulto" },
      { time: "19:30", title: "Judô", mod: "Judô", group: "Juvenil e Adulto · Avançado" },
    ],
  },
  {
    day: "Sábado",
    slots: [
      { time: "08:00", title: "Judô", mod: "Judô", group: "Kids I" },
      { time: "08:00", title: "Judô", mod: "Judô", group: "Gokyo, Ne Waza e Kata" },
      { time: "09:00", title: "Judô", mod: "Judô", group: "Kids I" },
      { time: "09:00", title: "Judô", mod: "Judô", group: "Juvenil e Adulto · Fundamentos" },
      { time: "10:00", title: "Judô", mod: "Judô", group: "Kids I, Kids II e Infantil" },
      { time: "11:00", title: "Muay Thai", mod: "Muay Thai", group: "Adulto" },
      { time: "11:00", title: "Judô", mod: "Judô", group: "Kids I, Kids II e Infantil" },
    ],
  },
  {
    day: "Domingo",
    slots: [
      { time: "10:30", title: "Judô", mod: "Judô", group: "Juvenil e Adulto · Avançado" },
    ],
  },
];

export const SCHEDULE_NOTE =
  "Grade de referência reconstruída a partir do quadro publicado pela academia. Confirme sempre os horários e as vagas pelo WhatsApp.";

export const AGE_LEGEND = [
  "Kids I — crianças de 3 a 5 anos",
  "Kids II — crianças de 5 a 7 anos",
  "Infantil — crianças de 7 a 12 anos",
  "Pré-Juvenil · Juvenil · Adulto — a partir de 10 anos",
];
