// Source unique des articles de blog : alimente la liste (/blog), les pages
// d'article (/blog/[slug]), le sitemap et le JSON-LD BlogPosting (SEO/GEO).

export type Block =
  | { t: "lead"; text: string }
  | { t: "p"; text: string }
  | { t: "h2"; text: string }
  | { t: "quote"; text: string }
  // Image / graphique au milieu de l'article (src = chemin dans /public ou URL).
  | { t: "image"; src: string; alt?: string; caption?: string };

export type Article = {
  slug: string;
  title: string;
  category: string;
  date: string; // ISO (pour <time> + JSON-LD)
  dateLabel: string; // affichage FR
  readTime: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  cover?: string; // image de couverture (chemin /public ou URL)
  blocks: Block[];
};

export const AUTHOR = 'RAYANE "RAYSS"';

export const articles: Article[] = [
  {
    slug: "gestion-du-risque-la-variable-que-tu-controles",
    title: "Gestion du risque : la seule variable que tu contrôles vraiment",
    category: "Rigueur",
    date: "2026-06-20",
    dateLabel: "20 juin 2026",
    readTime: "6 min",
    excerpt:
      "Tu ne contrôles ni la direction du marché, ni le résultat d'un trade isolé. Tu contrôles ton risque. C'est là, et nulle part ailleurs, que se joue ta survie.",
    metaTitle: "Gestion du risque en trading : la variable que tu contrôles | KILLEURUSD",
    metaDescription:
      "Risque par trade, position sizing, pensée en R, drawdown : pourquoi la gestion du risque — et non la prédiction — sépare les traders qui durent de ceux qui sautent.",
    blocks: [
      { t: "lead", text: "Tu peux passer dix ans à perfectionner ta lecture du marché : tu ne sauras jamais à l'avance si le prochain trade gagne ou perd. La direction, le timing exact, le résultat d'une position isolée : rien de tout cela n'est sous ton contrôle. Une seule chose l'est vraiment, à chaque clic : le risque que tu acceptes de mettre sur la table." },
      { t: "h2", text: "La prédiction est une illusion, le risque est une décision" },
      { t: "p", text: "Le débutant cherche à avoir raison. Le professionnel cherche à rester en jeu. C'est une différence de nature, pas de degré. Anticiper un mouvement reste une probabilité, jamais une certitude ; en revanche, décider qu'un trade ne te coûtera pas plus de 1 % de ton capital, ça, c'est une certitude absolue que tu imposes au marché. Tu déplaces ton énergie de ce que tu subis vers ce que tu décides." },
      { t: "quote", text: "Un bon trade peut perdre. Un mauvais trade peut gagner. Seul le risque que tu engages est entièrement sous ton contrôle." },
      { t: "h2", text: "Le risque par trade : la règle du capital fractionné" },
      { t: "p", text: "Fixer un risque constant et faible par position — typiquement 0,5 à 1 % du capital — n'est pas de la prudence excessive, c'est de l'arithmétique de survie. Avec 1 % par trade, il faut une série noire de plusieurs dizaines de pertes consécutives pour entamer sérieusement le compte. Avec 10 % par trade, une mauvaise semaine suffit à te mettre à terre. Le marché ne récompense pas celui qui parie gros ; il élimine celui qui parie gros assez longtemps." },
      { t: "h2", text: "Penser en R, pas en euros" },
      { t: "p", text: "Exprime chaque trade en multiples de risque (R), où 1R = la somme que tu perds si ton invalidation est touchée. Une cible à +2R, une perte à -1R : tu raisonnes en ratio, pas en montant. Cette abstraction fait deux choses. Elle te détache émotionnellement du chiffre en euros qui fait paniquer. Et elle rend ta performance lisible : une stratégie qui gagne 40 % du temps à +2R reste largement positive sur la durée, indépendamment de la taille de ton compte." },
      { t: "h2", text: "Le drawdown : survivre d'abord, performer ensuite" },
      { t: "p", text: "La perte est mathématiquement asymétrique. Perdre 50 % de ton capital exige ensuite +100 % juste pour revenir à l'équilibre. C'est pour cette raison que la préservation du capital prime toujours sur la recherche du gain maximal. Plafonner son drawdown, réduire la voilure après une série de pertes, refuser de « se refaire » : ce ne sont pas des signes de faiblesse, ce sont les réflexes de ceux qui sont encore là dix ans plus tard." },
      { t: "p", text: "Aucune méthode d'analyse, aussi fine soit-elle, ne te sauve d'une gestion du risque absente. À l'inverse, une gestion du risque rigoureuse te laisse le temps — celui dont ton avantage a besoin pour s'exprimer, trade après trade. C'est la variable la moins spectaculaire du trading, et c'est la seule qui décide réellement de qui reste sur le marché." },
    ],
  },
  {
    slug: "pourquoi-90-pourcent-des-traders-echouent",
    title: "Pourquoi 90% des traders échouent et comment intégrer le décile supérieur",
    category: "Psychologie",
    date: "2023-10-12",
    dateLabel: "12 octobre 2023",
    readTime: "5 min",
    excerpt:
      "L'échec en trading n'est presque jamais un problème d'analyse. C'est un échec systématique d'exécution. Décryptage.",
    metaTitle: "Pourquoi 90% des traders échouent | KILLEURUSD",
    metaDescription:
      "Analyse psychologique et technique sur les raisons de l'échec en trading et comment inverser la tendance par la discipline d'exécution.",
    blocks: [
      { t: "lead", text: "Le chiffre fait peur, mais il est factuel. Sur les marchés financiers, l'immense majorité des spéculateurs particuliers détruit son capital. Contrairement à la croyance populaire, ce n'est pas dû à un « algorithme truqué ». C'est un échec systématique d'exécution." },
      { t: "h2", text: "Le mythe de l'indicateur miracle" },
      { t: "p", text: "L'erreur cardinale réside dans la quête d'infaillibilité. Un indicateur prédictif parfait n'existe pas. Le marché évolue par définition dans un spectre probabiliste. Un opérateur aguerri intègre la perte comme un frais de fonctionnement inhérent à son activité. L'amateur la redoute, la fuit, et finit par s'exposer à un risque systémique." },
      { t: "quote", text: "L'amateur est obsédé par l'entrée. L'expert est obsédé par l'exposition de son capital." },
      { t: "h2", text: "Le comportement stochastique" },
      { t: "p", text: "L'absence de règles d'engagement strictes transforme l'analyse en jeu de hasard. Entrer sous le coup d'une impulsion haussière, clôturer par aversion au risque : l'action est pilotée par les émotions au lieu d'être régie par des données. La frontière entre la rentabilité et la ruine se situe exactement ici, dans la capacité à respecter un protocole." },
      { t: "h2", text: "Comment rejoindre le décile supérieur" },
      { t: "p", text: "Le top 10 % ne possède pas un setup secret. Il possède un processus : une thèse de marché écrite avant l'ouverture, une invalidation définie avant l'entrée, une taille de position calculée sur le risque et non sur l'envie, et un journal qui transforme chaque trade en donnée. La régularité n'est pas un talent, c'est la conséquence mécanique d'un cadre que l'on refuse de trahir, surtout les jours où l'on en a le moins envie." },
    ],
  },
  {
    slug: "mecanique-price-action-institutionnel",
    title: "La mécanique sous-jacente du Price Action institutionnel",
    category: "Méthode",
    date: "2023-09-28",
    dateLabel: "28 septembre 2023",
    readTime: "8 min",
    excerpt:
      "Derrière chaque mouvement « imprévisible » se cache une logique de liquidité. Lire le prix comme un acteur institutionnel, pas comme un parieur.",
    metaTitle: "La mécanique du Price Action institutionnel | KILLEURUSD",
    metaDescription:
      "Liquidité, offre et demande, zones de déséquilibre : comprendre la mécanique réelle du prix institutionnel au lieu d'empiler les indicateurs.",
    cover: "/blog/price-action-cover.svg",
    blocks: [
      { t: "lead", text: "Le « Price Action » est devenu un mot-valise. Pour la plupart, il se résume à reconnaître trois bougies. Pour un acteur institutionnel, c'est tout l'inverse : une lecture de l'endroit où se trouve la liquidité, et de qui a intérêt à la prendre." },
      { t: "h2", text: "Le marché est une enchère, pas un graphique" },
      { t: "p", text: "Avant d'être une courbe, le marché est un mécanisme d'enchères continu : des ordres d'achat et de vente qui se rencontrent. Un prix monte non pas parce qu'une figure est « haussière », mais parce que la demande absorbe l'offre disponible à ce niveau. Tant que tu raisonnes en figures et non en flux, tu décris le passé au lieu d'anticiper le déséquilibre." },
      { t: "h2", text: "La liquidité : le carburant des mouvements" },
      { t: "p", text: "Les gros intervenants ne peuvent pas exécuter une position massive d'un seul coup sans faire déraper le prix contre eux. Ils ont besoin de contrepartie, c'est-à-dire de liquidité. Or la liquidité se concentre là où les particuliers placent mécaniquement leurs stops : au-dessus des sommets évidents, sous les creux évidents. C'est pourquoi le prix vient si souvent « chercher » ces niveaux avant de repartir dans l'autre sens. Ce n'est pas une malédiction, c'est de l'ingénierie d'exécution." },
      { t: "quote", text: "Le prix ne te piège pas. Il va simplement là où se trouvent les ordres dont les institutions ont besoin pour se remplir." },
      { t: "h2", text: "Déséquilibre, retour, continuation" },
      { t: "p", text: "Une impulsion violente laisse derrière elle une zone de déséquilibre : un intervalle de prix traversé trop vite pour que tous les ordres y soient servis. Le marché a une tendance statistique à revenir y combler ce vide avant de reprendre sa direction. Identifier ces zones, attendre le retour, et n'agir que lorsque le déséquilibre est confirmé : voilà une lecture spatiale qui ne dépend d'aucun indicateur en retard." },
      { t: "image", src: "/blog/price-action-liquidity.svg", alt: "Repli du prix dans une zone de demande puis continuation vers la liquidité", caption: "Repli dans la zone de demande, puis continuation vers la liquidité." },
      { t: "h2", text: "De la théorie à l'exécution" },
      { t: "p", text: "Cette mécanique n'a aucune valeur sans cadre d'exécution. Savoir où se trouve la liquidité ne sert à rien si l'on entre sans invalidation claire ni gestion du risque. La méthode et la discipline sont les deux faces d'une même pièce : l'une dit où regarder, l'autre dit quand agir et combien risquer." },
    ],
  },
  {
    slug: "routine-execution-impermeable",
    title: "Structurer une routine d'exécution imperméable",
    category: "Rigueur",
    date: "2023-09-15",
    dateLabel: "15 septembre 2023",
    readTime: "6 min",
    excerpt:
      "La différence entre un trader régulier et un trader erratique tient rarement à la stratégie. Elle tient à la routine qui l'entoure.",
    metaTitle: "Structurer une routine d'exécution imperméable | KILLEURUSD",
    metaDescription:
      "Pré-marché, exécution, post-marché : construire une routine de trading répétable qui neutralise l'émotion et rend tes résultats mesurables.",
    blocks: [
      { t: "lead", text: "On fantasme la stratégie. On néglige la routine. Pourtant, deux traders avec la même méthode obtiennent des résultats opposés : l'un a un processus, l'autre improvise. Une routine imperméable, c'est ce qui empêche l'émotion de prendre le volant au pire moment." },
      { t: "h2", text: "Avant le marché : la thèse écrite" },
      { t: "p", text: "Une session commence loin du bouton « acheter ». Elle commence par une thèse écrite : quel est le contexte, quels niveaux comptent, quels scénarios j'accepte de trader et lesquels je refuse. Ce qui n'est pas écrit n'existe pas. Une thèse couchée sur le papier devient un filtre : si une opportunité n'y entre pas, elle n'est pas tradée. Point." },
      { t: "h2", text: "Pendant le marché : exécuter, pas décider" },
      { t: "p", text: "Le moment de l'exécution n'est pas celui de la réflexion. Si tu réfléchis encore quand le prix arrive sur ton niveau, tu as déjà perdu. Le travail de décision a été fait avant. Pendant, tu te contentes d'exécuter un plan : entrée définie, stop défini, taille définie, objectif défini. L'émotion ne disparaît pas, mais elle n'a plus de prise sur des paramètres déjà verrouillés." },
      { t: "quote", text: "La discipline, ce n'est pas se forcer dans l'instant. C'est avoir tellement bien préparé l'instant qu'il ne reste rien à forcer." },
      { t: "h2", text: "Après le marché : le journal qui te corrige" },
      { t: "p", text: "Sans journal, tu répètes tes erreurs sans même les voir. Après chaque session : ce que j'ai prévu, ce que j'ai fait, l'écart entre les deux, et pourquoi. Le journal ne sert pas à compter l'argent ; il sert à mesurer la fidélité à ton plan. Un trade perdant exécuté parfaitement est un bon trade. Un trade gagnant pris hors plan est une mauvaise habitude qui te coûtera cher plus tard." },
      { t: "h2", text: "L'imperméabilité vient de la répétition" },
      { t: "p", text: "Une routine ne devient imperméable que par la répétition, jusqu'à ce qu'elle ne demande plus de volonté. C'est précisément le rôle d'un accompagnement : auditer ta routine semaine après semaine, repérer la fissure avant qu'elle ne devienne une fuite, et installer le réflexe à la place de l'impulsion." },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
