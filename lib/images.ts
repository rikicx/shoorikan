// Todas as imagens são REAIS, extraídas do site e materiais oficiais da
// Academia Shoorikan (academiashoorikan.com.br). Nada de banco de imagens.

export const LOGO = "/logo/shoorikan-logo.png";

export const PHOTOS = {
  // Sessão de treino no dojo, com o logo na parede — foto oficial
  treino: "/fotos/treino-dojo.jpg",
  // Sensei Jairo Andrade (retrato panorâmico, em frente ao logo)
  senseiJairoWide: "/fotos/sensei-jairo-wide.jpg",
  // Equipe + turma de crianças em frente ao logo
  equipeTurma: "/fotos/equipe-turma.jpg",
  // Aula com o sensei e alunos sentados no tatame
  dojoAula: "/fotos/dojo-aula.jpg",
  // Projeção de judô (dois adultos)
  judoProjecao: "/fotos/judo-projecao.jpg",
  // Turma kids em atividade
  kidsTreino: "/fotos/kids-treino.jpg",
  // Professor de Muay Thai no dojo (parede de tijolos)
  muaythai: "/fotos/muaythai.jpg",
} as const;

export const TEAM_PHOTOS: Record<string, string> = {
  "Sensei Jairo Andrade": "/equipe/Jairo-Andrade.jpg",
  "Danilo Terron": "/equipe/Danilo-Terron.jpg",
  "Diego González": "/equipe/Diego-Gonzales.jpg",
  "Luis Garcia": "/equipe/Luis-Garcia.jpg",
  "Raphael Mansur": "/equipe/Raphael-Mansur.jpg",
  "André Luis Carnelós": "/equipe/Andre-Luis-Carnelos.jpg",
  "Ana Lucia Coimbra": "/equipe/Ana-Lucia-Coimbra.jpg",
  "Marcos Oquendo": "/equipe/Marcos-Oquendo.jpg",
  "Marcelo Fruehwirth": "/equipe/Marcelo-Fruehwirth.jpg",
};

// Galeria "O Dojo" — fotos reais das instalações e treinos
export const GALLERY = [
  PHOTOS.treino,
  PHOTOS.dojoAula,
  PHOTOS.judoProjecao,
  PHOTOS.kidsTreino,
  PHOTOS.equipeTurma,
  PHOTOS.muaythai,
];
