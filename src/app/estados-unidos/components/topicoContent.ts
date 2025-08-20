export type TopicoId =
  | "grandes-fortunas"
  | "exploracao-operarios"
  | "diferencas-sociais"
  | "cultura-arte-inovacoes"
  | "trabalhadores-domesticos"
  | "proibicao-escravizacao"
  | "faroeste";

export type Block =
  | { type: "p"; text: string }
  | {
      type: "image";
      /** camada base */
      bg: string;
      /** overlay opcional (ex.: moldura) */
      overlay?: string;
      /** classes de layout/posicionamento específicas da imagem */
      className?: string;
      /** acessibilidade */
      aria: string;
    };

export type TopicoContent = {
  title: string;
  blocks: Block[];
};

export const topicosContent: Record<TopicoId, TopicoContent> = {
  "grandes-fortunas": {
    title: "Um período de grandes fortunas",
    blocks: [
      {
        type: "p",
        text:
          "Em meados do século XIX, os Estados Unidos estabilizavam economicamente. O desbravamento da região central do país, com a construção de inúmeras linhas férreas, aliado à industrialização crescente, fez nomes como John Davidson Rockefeller, na indústria petrolífera, Andrew Carnegie, na siderurgia, Cornelius Vanderbilt, na indústria ferroviária, e John Jacob Astor, no comércio de peles, conquistarem enormes fortunas, patrocinarem o desenvolvimento do país e alçarem espaço de notoriedade social.",
      },
      {
        type: "image",
        bg: "/assets/figma/01324f84d2890b4b31138ae60e6962f136682245.png",
        overlay: "/assets/figma/d247f6129e6d51012ed097ba43962476c9f5b015.png",
        className:
          "bg-[position:0%_12.71%,_50%_50%] bg-no-repeat bg-size-[135.94%_346.19%,cover] box-border flex flex-col gap-2 h-40 items-center justify-center p-[8px] rounded-2xl shrink-0 w-full mt-4",
        aria: "Andrew Carnegie",
      },
      {
        type: "p",
        text: "Andrew Carnegie começou a vida como catador de carretéis de linha.",
      },
      {
        type: "image",
        bg: "/assets/figma/ea904b761f85bfed320eb7fd24f6fa8fad9ad6c8.png",
        overlay: "/assets/figma/d247f6129e6d51012ed097ba43962476c9f5b015.png",
        className:
          "bg-[position:0%_0.85%,_50%_50%] bg-no-repeat bg-size-[100%_258.03%,cover] box-border flex flex-col gap-2 h-40 items-center justify-center p-[8px] rounded-2xl shrink-0 w-full mt-4",
        aria: "James Truslow Adams",
      },
      {
        type: "p",
        text:
          "James Truslow Adams, escritor e historiador americano. Ele popularizou a frase “Sonho Americano” em seu livro de 1931 The Epic of America.",
      },
    ],
  },
  "exploracao-operarios": {
    title: "Exploração dos operários",
    blocks: [
      {
        type: "p",
        text:
          "As indústrias americanas, apesar de praticarem salários maiores que as europeias, ainda explorava a mão de obra, pois o salário não acompanhava a qualidade de vida das pessoas. Não havia investimento em prevenção de acidentes, a jornada de trabalho era exaustiva, e a escolaridade, tanto dos operários como de seus filhos, era baixa por falta de oferta de qualificação. Assim, começaram a se popularizar os sindicatos, que negociavam com os empresários e organizavam greves.",
      },
    ],
  },
  "diferencas-sociais": {
    title: "As diferenças sociais e o elitismo",
    blocks: [
      {
        type: "p",
        text:
          "Enquanto trabalhadores lutavam para garantir qualidade de vida e mais tempo com suas famílias ou atividades de lazer, a alta sociedade se ocupava de grandes festas, banquetes e eventos de caridade. Com a chegada de imigrantes e arrivistas (como eram conhecidos os ricos sem sobrenome antigo), a sociedade se movimentava com a rivalidade entre os ricos por herança e os novos ricos. Especialmente em Nova York ficou famosa a rivalidade entre Lina Astor (da velha Nova York) e Alva Vanderbilt (dos novos ricos).",
      },
      {
        type: "image",
        bg: "/assets/figma/7f1c94f6c2bb6ac18ab93a41f2aae931960e14b6.png",
        overlay: "/assets/figma/d247f6129e6d51012ed097ba43962476c9f5b015.png",
        className:
          "bg-[position:50%_50%,_50%_50%] bg-no-repeat bg-size-[cover,cover] box-border flex flex-col gap-2 h-46 items-center justify-center p-[8px] rounded-2xl shrink-0 w-full mt-4",
        aria: "Alva Vanderbilt",
      },
      {
        type: "p",
        text: "Alva Vanderbilt, ativista pelo voto feminino, desafiava as convenções da época.",
      },
      {
        type: "image",
        bg: "/assets/figma/35ed772fd4590dd8ea2ad0a6fa1cb27aab3d4bf8.png",
        overlay: "/assets/figma/d247f6129e6d51012ed097ba43962476c9f5b015.png",
        className:
          "bg-[position:0%_31.97%,_50%_50%] bg-no-repeat bg-size-[100%_273.97%,cover] box-border flex flex-col gap-2 h-40 items-center justify-center p-[8px] rounded-2xl shrink-0 w-full mt-4",
        aria: "Caroline Astor",
      },
      {
        type: "p",
        text:
          "Caroline Astor, conhecida como Lina Astor, ou senhora Astor, foi a líder da alta sociedade de Nova York e tentou codificar o comportamento e a etiqueta adequados, determinando quem era aceitável entre os novos ricos.",
      },
      { type: "p", text: "Vocabulário:" },
      { type: "p", text: "Arrivista – quem triunfa a qualquer preço, mesmo em prejuízo de outros." },
    ],
  },
  "cultura-arte-inovacoes": {
    title: "A cultura, a arte e as inovações",
    blocks: [
      {
        type: "p",
        text:
          "O século XIX, nos EUA, foi cenário para produções culturais, invenções e movimentos que modificaram sua organização. É desse período a inauguração de grandes obras como Metropolitan Museu e Metropolitan Opera, dois grandes centros para as artes, que possibilitaram o princípio de popularização do acesso aos bens culturais.",
      },
      {
        type: "p",
        text:
          "Além disso, a escuridão das noites estava com os dias contados depois que Thomas Edison dominou a energia elétrica, possibilitando, com a ajuda de Lewis Latimer, a criação da lâmpada. Em 1882, a eletricidade iluminava a Wall Street.",
      },
      {
        type: "image",
        bg: "/assets/figma/d2262e753e0b6c5718dbc286da8379b0af8621ef.png",
        overlay: "/assets/figma/d247f6129e6d51012ed097ba43962476c9f5b015.png",
        className:
          "bg-[0%_8.68%,_50%_50%] bg-no-repeat bg-size-[100%_225.8%,cover] box-border flex flex-col gap-2 h-40 items-center justify-center p-[8px] rounded-2xl shrink-0 w-full mt-4",
        aria: "Clara Barton",
      },
      {
        type: "p",
        text:
          "Clara Barton angariou fundos para a implantação de centros de atendimento à saúde da Cruz Vermelha no país, oferecendo gratuitamente assistência a todos que necessitassem.",
      },
      {
        type: "image",
        bg: "/assets/figma/c01ff62983a11fb2a16cff3cf6b0cfb959addb87.png",
        overlay: "/assets/figma/d247f6129e6d51012ed097ba43962476c9f5b015.png",
        className:
          "bg-[position:0%_50%,_50%_50%] bg-no-repeat bg-size-[100%_232.86%,cover] box-border flex flex-col gap-2 h-40 items-center justify-center p-[8px] rounded-2xl shrink-0 w-full mt-4",
        aria: "Thomas Edison",
      },
      { type: "p", text: "Thomas Edison" },
      {
        type: "image",
        bg: "/assets/figma/a1cd9637209ccbe0e85c6574b168841be8c991b8.png",
        overlay: "/assets/figma/d247f6129e6d51012ed097ba43962476c9f5b015.png",
        className:
          "bg-center bg-cover bg-no-repeat box-border flex flex-col gap-2 h-40 items-center justify-center p-[8px] rounded-2xl shrink-0 w-full mt-4",
        aria: "Emily Roebling",
      },
      {
        type: "p",
        text:
          "Emily Roebling coordenou o projeto de construção da ponte do Brooklyn, no lugar de seu marido, que havia adoecido.",
      },
    ],
  },
  "trabalhadores-domesticos": {
    title: "Os trabalhadores domésticos",
    blocks: [
      {
        type: "p",
        text:
          "Nesse período, as casas mais abastadas contavam com inúmeros funcionários: mordomo, cozinheiro, arrumadeira, camareira, valete e copeiro. Esses funcionários não tinham horário para descanso: precisavam ficar à disposição dos donos da casa, levantando-se horas antes e descansando somente quando todos da casa já tivessem se recolhido.",
      },
      {
        type: "image",
        bg: "/assets/figma/b289141b96b8dec7750a9cef64ad53b3e0a3f716.png",
        overlay: "/assets/figma/d247f6129e6d51012ed097ba43962476c9f5b015.png",
        className:
          "bg-center bg-cover bg-no-repeat box-border flex flex-col gap-2 h-[206px] items-center justify-center p-[8px] rounded-2xl shrink-0 w-full mt-4",
        aria: "Trabalhadores domésticos (1914)",
      },
      {
        type: "p",
        text:
          "Trabalhadores domésticos nos EUA, no ano de 1914. A partir do início do século XX, as mudanças tecnológicas e a vida moderna mudaram a configuração das casas, reduzindo o número de funcionários.",
      },
    ],
  },
  "proibicao-escravizacao": {
    title: "Proibição da escravização",
    blocks: [
      {
        type: "p",
        text:
          "Em 1865, a escravização foi proibida nos EUA. Ainda assim, pessoas negras só podiam ocupar o último vagão dos trens. Outras proibições, como frequentar escolas e usar banheiros públicos, ainda eram presentes em diferentes regiões do país.",
      },
    ],
  },
  faroeste: {
    title: "Faroeste",
    blocks: [
      {
        type: "p",
        text:
          "O Far West, também conhecido como Velho Oeste, ou Faroeste Selvagem, é marcado pela expansão dos Estados Unidos para o Oeste e pela colonização de novas terras entre os anos de 1865 e 1900. A região era árida e selvagem, com pradarias extensas, montanhas imponentes e cidades marcadas por profundas desigualdades sociais e econômicas. Além disso, as minorias étnicas enfrentavam discriminação e falta de oportunidades.",
      },
      {
        type: "image",
        bg: "/assets/figma/d7b6a5451864500ecbb13d791da979cb4ea2047c.png",
        overlay: "/assets/figma/d247f6129e6d51012ed097ba43962476c9f5b015.png",
        className:
          "bg-center bg-cover bg-no-repeat box-border flex flex-col gap-2 h-46 items-center justify-center p-[8px] rounded-2xl shrink-0 w-full mt-4",
        aria: "Cowboy na fronteira americana, John C.H. Grabill, c. 1887.",
      },
      {
        type: "p",
        text:
          "Representação do cowboy, símbolo por excelência da fronteira americana. Foto de John C.H. Grabill, c. 1887.",
      },
      {
        type: "image",
        bg: "/assets/figma/80c47d4e3d9ecad460364549d623a81f422e5f7f.png",
        overlay: "/assets/figma/d247f6129e6d51012ed097ba43962476c9f5b015.png",
        className:
          "bg-center bg-cover bg-no-repeat box-border flex flex-col gap-2 h-45 items-center justify-center p-[8px] rounded-2xl shrink-0 w-full mt-4",
        aria: "Chefes nativos americanos (1865)",
      },
      { type: "p", text: "Chefes nativos americanos, 1865." },
    ],
  },
};

export const modalIds = new Set<TopicoId>([
  "grandes-fortunas",
  "exploracao-operarios",
  "diferencas-sociais",
  "cultura-arte-inovacoes",
  "trabalhadores-domesticos",
  "proibicao-escravizacao",
  "faroeste",
]);
