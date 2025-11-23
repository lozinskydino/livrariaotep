"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import FooterNavegacao from "../components/FooterNavegacao";
import ModalContent from "../components/ModalContent";

interface Hotspot {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

const PADDING = 16;

// Coordenadas extraídas do Figma (frame Mobile 4:15185), em pixels no espaço do SVG (viewBox ~ 997 x 488)
const HOTSPOTS: Hotspot[] = [
  { id: 1, x: 75, y: 87, width: 54.421241760253906, height: 43.44245910644531 },
  { id: 2, x: 111.33837890625, y: 87.895751953125, width: 87.24806213378906, height: 57.10301208496094 },
  { id: 3, x: 133.2890625, y: 129.35888671875, width: 86.77383422851562, height: 40.72230911254883 },
  { id: 4, x: 128.8779296875, y: 156.142578125, width: 109.7513198852539, height: 72.8573226928711 },
  { id: 5, x: 200.08837890625, y: 152.05078125, width: 75.12732696533203, height: 41.60454559326172 },
  { id: 6, x: 247, y: 307, width: 67, height: 62 },
  { id: 7, x: 277, y: 353, width: 51, height: 50 },
  { id: 8, x: 431.25, y: 247, width: 73, height: 50 },
  { id: 9, x: 479.25, y: 241, width: 46, height: 56 },
  { id: 10, x: 495.25, y: 290, width: 58, height: 57 },
  { id: 11, x: 524.25, y: 227, width: 43, height: 96 },
  { id: 12, x: 511.25, y: 339, width: 46, height: 30 },
  { id: 13, x: 535.15283203125, y: 107.598876953125, width: 75.57623291015625, height: 57.216468811035156 },
  { id: 14, x: 590.83349609375, y: 78.29022979736328, width: 121.62481689453125, height: 82.83670043945312 },
  { id: 15, x: 632.40185546875, y: 66, width: 128.27532958984375, height: 92.103515625 },
  { id: 16, x: 712.23095703125, y: 66.01178741455078, width: 96.8268814086914, height: 64.90309143066406 },
  { id: 17, x: 796.43408203125, y: 70.89501953125, width: 52.56587600708008, height: 31.518903732299805 },
  { id: 18, x: 760.39404296875, y: 115.013671875, width: 83.881103515625, height: 55.35117721557617 },
  { id: 19, x: 683.1572265625, y: 209.8203125, width: 53.83711624145508, height: 37.179988861083984 },
  { id: 20, x: 752.09423828125, y: 198.254638671875, width: 66.5164566040039, height: 39.99562454223633 },
  { id: 21, x: 655.99462890625, y: 187.811279296875, width: 46.24274826049805, height: 57.008705139160156 },
  { id: 22, x: 724.4873046875, y: 164.11572265625, width: 78.27979278564453, height: 46.13187789916992 },
  { id: 23, x: 856, y: 392, width: 30, height: 32 },
  { id: 24, x: 561.166015625, y: 182.0308074951172, width: 44.57184600830078, height: 41.24319076538086 },
  { id: 25, x: 479, y: 150.267578125, width: 57.76752471923828, height: 30.633773803710938 },
  { id: 26, x: 506.25, y: 374, width: 34, height: 29 },
];

const imgViewBoxWidth = 997.2935180664062;
const imgViewBoxHeight = 488.0903015136719;

const baciasTopicos = Array.from({ length: 26 }, (_, index) => {
  const id = index + 1;

  if (id === 1) {
    return {
      id: 1,
      titulo: "Yukon",
      descricao:
        "A área da bacia hidrográfica é de 832 700 km². O rio Yukone corre na América do Norte, na província canadense da Colúmbia Britânica, no território canadense de Yukon e no estado norte-americano do Alasca, desembocando no mar de Bering, no oceano Pacífico. O seu comprimento estimado é de 3 190 quilômetros, fazendo dele o vigésimo do mundo em comprimento. Seu volume médio de água é de 6 400-7 000 m³/s.",
      mapaSrc: "/assets/images/bacias-hidrograficas/mundi-1.svg",
      imagemSrc: "/assets/images/bacias-hidrograficas/yukon-1.png",
      imagemAlt: "Paisagem da região da bacia do rio Yukon",
      mapOffset: 0,
      mapHorizontalOffset: -30,
    };
  }

  if (id === 2) {
    return {
      id: 2,
      titulo: "Mackenzie",
      descricao:
        "A bacia hidrográfica do rio Mackenzie localiza-se no noroeste do Canadá e drena uma vasta área de lagos e rios que escoam para o mar de Beaufort, no oceano Ártico. O sistema do Mackenzie inclui grandes lagos, como o Grande Lago do Escravo e o Grande Lago do Urso, e estende-se por milhares de quilômetros desde as Montanhas Rochosas até o litoral ártico, constituindo uma das principais bacias de altas latitudes do planeta.",
      mapaSrc: "/assets/images/bacias-hidrograficas/mundi-2.svg",
      imagemSrc: "/assets/images/bacias-hidrograficas/mackenzie.png",
      imagemAlt: "Paisagem da região da bacia do rio Mackenzie",
      mapOffset: 0,
      mapHorizontalOffset: 0,
    };
  }

  if (id === 3) {
    return {
      id: 3,
      titulo: "Nelson",
      descricao:
        "A área da bacia hidrográfica é de 892 300 km². O rio Nelson é localizado na província de Manitoba, no Canadá. Ele nasce no Lago Winnipeg e deságua na Baía de Hudson. Seu volume médio de água é de 2 370 m³/s.",
      mapaSrc: "/assets/images/bacias-hidrograficas/mundi-3.svg",
      imagemSrc: "/assets/images/bacias-hidrograficas/nelson.png",
      imagemAlt: "Paisagem da região da bacia do rio Nelson",
      mapOffset: 10,
      mapHorizontalOffset: 0,
    };
  }

  if (id === 4) {
    return {
      id: 4,
      titulo: "Mississipi",
      descricao:
        "A área da bacia hidrográfica é de 2 981 000 km². O rio Mississipi é o segundo mais longo curso de água dos Estados Unidos, perdendo a primeira posição para o rio Missouri, que é afluente do Mississipi. Considerados juntos, os dois formam a maior bacia hidrográfica da América do Norte. Seu volume médio de água é de 12 700 m³/s.",
      mapaSrc: "/assets/images/bacias-hidrograficas/mundi-4.svg",
      imagemSrc: "/assets/images/bacias-hidrograficas/mississipi.png",
      imagemAlt: "Paisagem da região da bacia do rio Mississipi",
      mapOffset: 0,
      mapHorizontalOffset: 0,
    };
  }

  if (id === 5) {
    return {
      id: 5,
      titulo: "St. Lawrence – São Lourenço",
      descricao:
        "A área da bacia hidrográfica é de 1 600 000 km². O rio São Lourenço conecta os Grandes Lagos com o oceano Atlântico. Sua foz é o golfo de São Lourenço, o maior estuário do mundo. Ele passa pelo lago Ontário e possui um comprimento de 1 197 quilômetros. Seu volume médio de água é de 17,6 milhões m³/s.",
      mapaSrc: "/assets/images/bacias-hidrograficas/mundi-5.svg",
      imagemSrc: "/assets/images/bacias-hidrograficas/sao-lourenco.png",
      imagemAlt: "Paisagem da região da bacia do rio São Lourenço",
      mapOffset: 10,
      mapHorizontalOffset: 0,
    };
  }

  if (id === 6) {
    return {
      id: 6,
      titulo: "Amazonas",
      descricao:
        "A área da bacia hidrográfica é de 7 050 000 km². O rio Amazonas está localizado na América do Sul e é o maior rio em vazão de água da Terra e o segundo mais extenso do mundo, após o rio Nilo. Com 6 992,06 quilômetros, ele percorre o norte da América do Sul e a floresta amazônica, e deságua no Oceano Atlântico. O volume de água do rio Amazonas é de cerca de 210 000 m³/s.",
      mapaSrc: "/assets/images/bacias-hidrograficas/mundi-6.svg",
      imagemSrc: "/assets/images/bacias-hidrograficas/amazonas.png",
      imagemAlt: "Paisagem da região da bacia do rio Amazonas",
      mapOffset: 140,
      mapHorizontalOffset: 0,
    };
  }

  if (id === 7) {
    return {
      id: 7,
      titulo: "Paraná",
      descricao:
        "A área da bacia hidrográfica é de 2 583 000 km². O rio Paraná é o principal curso de água formador da Bacia do rio Prata. Ele é considerado, em sua extensão total até a foz do Estuário do Prata, o oitavo maior rio do mundo em extensão e o maior da América do Sul depois do Amazonas. O volume médio do rio Paraná é de 16 000 m³/s.",
      mapaSrc: "/assets/images/bacias-hidrograficas/mundi-7.svg",
      imagemSrc: "/assets/images/bacias-hidrograficas/parana.png",
      imagemAlt: "Paisagem da região da bacia do rio Paraná",
      mapOffset: 300,
      mapHorizontalOffset: 0,
    };
  }

  if (id === 8) {
    return {
      id: 8,
      titulo: "Níger",
      descricao:
        "A área da bacia hidrográfica é de cerca de 118 000 km². O rio Níger é o terceiro rio mais longo da África e o principal da África Ocidental, com cerca de 4 184 quilômetros de comprimento. Ele nasce perto da fronteira entre a Guiné e a Serra Leoa e atravessa cinco países: Guiné, Mali, Níger, Benim e Nigéria. O volume médio de água do Níger é de cerca de 6 000 m³/s. No entanto, seu fluxo varia de acordo com a época do ano.",
      mapaSrc: "/assets/images/bacias-hidrograficas/mundi-8.svg",
      imagemSrc: "/assets/images/bacias-hidrograficas/niger.png",
      imagemAlt: "Paisagem da região da bacia do rio Níger",
      mapOffset: 30,
      mapHorizontalOffset: 0,
    };
  }

  if (id === 9) {
    return {
      id: 9,
      titulo: "Lago Chade",
      descricao:
        "A área da bacia hidrográfica é de 1 350 km². O lago é localizado no continente africano, nas proximidades do centro geográfico do continente. Ele é importante para a economia por fornecer água para cerca de 20 milhões de pessoas nos quatro países localizados ao seu redor: Chade, Camarões, Níger e Nigéria. O volume médio do rio Níger é de cerca de 72 000 m³/s.",
      mapaSrc: "/assets/images/bacias-hidrograficas/mundi-9.svg",
      imagemSrc: "/assets/images/bacias-hidrograficas/lago-chade.png",
      imagemAlt: "Paisagem da região da bacia do Lago Chade",
      mapOffset: 30,
      mapHorizontalOffset: 0,
    };
  }

  if (id === 10) {
    return {
      id: 10,
      titulo: "Congo",
      descricao:
        "A área da bacia hidrográfica é de 3 690 750 km². O rio Congo é o maior em volume de água, mas o segundo em extensão, características que favorecem a navegação e a geração de energia hidrelétrica. Conhecido como rio Zaire, ele é o segundo maior rio da África e o sétimo do mundo, com uma extensão total de 4 700 quilômetros. Além disso, é o segundo maior rio do mundo em volume de água, com uma caudal de 67 000 m³/s.",
      mapaSrc: "/assets/images/bacias-hidrograficas/mundi-10.svg",
      imagemSrc: "/assets/images/bacias-hidrograficas/congo.png",
      imagemAlt: "Paisagem da região da bacia do rio Congo",
      mapOffset: 70,
      mapHorizontalOffset: 0,
    };
  }

  if (id === 11) {
    return {
      id: 11,
      titulo: "Nilo",
      descricao:
        "A área da bacia hidrográfica é de, aproximadamente, 3 349 000 km². O rio Nilo é um dos mais extensos do mundo, com 6 650 quilômetros de comprimento. Ele atravessa o norte da África e deságua no Mar Mediterrâneo. Além disso, é famoso por sua história antiga e pelos sítios arqueológicos que existem em suas margens. O volume médio de água do Nilo é de 3 100 m³/s.",
      mapaSrc: "/assets/images/bacias-hidrograficas/mundi-11.svg",
      imagemSrc: "/assets/images/bacias-hidrograficas/nilo.png",
      imagemAlt: "Paisagem da região da bacia do rio Nilo",
      mapOffset: 30,
      mapHorizontalOffset: 0,
    };
  }

  if (id === 12) {
    return {
      id: 12,
      titulo: "Zambeze",
      descricao:
        "A área da bacia hidrográfica é de 1 390 000 km². O Zambeze é um grande rio da África Austral e deságua no Oceano Índico. O volume médio de água é de cerca de 7 000 m³/s.",
      mapaSrc: "/assets/images/bacias-hidrograficas/mundi-12.svg",
      imagemSrc: "/assets/images/bacias-hidrograficas/zambeze.png",
      imagemAlt: "Paisagem da região da bacia do rio Zambeze",
      mapOffset: 150,
      mapHorizontalOffset: 0,
    };
  }

  if (id === 13) {
    return {
      id: 13,
      titulo: "Volga",
      descricao:
        "A área da bacia hidrográfica é de 1 360 000 km². O rio Volga tem 3 688 quilômetros de comprimento e é o mais longo rio da Europa. Além disso, ele é o maior do continente em caudal e em área de bacia hidrográfica. Nasce no planalto de Valdai, no norte da Rússia, corre pela planície russa e deságua no mar Cáspio. O volume médio de água do rio Volga é de 8 000 m³/s.",
      mapaSrc: "/assets/images/bacias-hidrograficas/mundi-13.svg",
      imagemSrc: "/assets/images/bacias-hidrograficas/volga.png",
      imagemAlt: "Paisagem da região da bacia do rio Volga",
      mapOffset: 10,
      mapHorizontalOffset: 0,
    };
  }

  if (id === 14) {
    return {
      id: 14,
      titulo: "Ob",
      descricao:
        "A área da bacia hidrográfica é de 2 972 000 km². O rio Ob é um dos principais da Sibéria ocidental, na Rússia, e o quarto mais longo do país. Ele tem um volume médio de água de 12 500 m³/s.",
      mapaSrc: "/assets/images/bacias-hidrograficas/mundi-14.svg",
      imagemSrc: "/assets/images/bacias-hidrograficas/ob.png",
      imagemAlt: "Paisagem da região da bacia do rio Ob",
      mapOffset: 10,
      mapHorizontalOffset: 0,
    };
  }

  if (id === 15) {
    return {
      id: 15,
      titulo: "Ienissei",
      descricao:
        "A área da bacia hidrográfica é de 2 580 000 km². O rio Ienissei é um dos principais da Ásia, tendo a sua desembocadura no Oceano Ártico. Com 4 093 quilômetros de extensão, ele é o 10º mais longo do mundo e tem um volume médio de água de 19 600 m³/s.",
      mapaSrc: "/assets/images/bacias-hidrograficas/mundi-15.svg",
      imagemSrc: "/assets/images/bacias-hidrograficas/lenissei.png",
      imagemAlt: "Paisagem da região da bacia do rio Ienissei",
      mapOffset: 10,
      mapHorizontalOffset: 0,
    };
  }

  if (id === 16) {
    return {
      id: 16,
      titulo: "Lena",
      descricao:
        "A área da bacia hidrográfica é de 2 490 000 km². O rio Lena se situa na Sibéria e é o décimo mais longo do mundo e o nono em área de bacia hidrográfica. Ele nasce a 1 640 metros de altitude nas montanhas Baikal, no sul do planalto Central Siberiano, 20 quilômetros a oeste do lago Baikal, e flui para nordeste, recebendo caudal do Kirenga e do Vitim. O volume médio de água do rio Lena é de 17 000 m³/s.",
      mapaSrc: "/assets/images/bacias-hidrograficas/mundi-16.svg",
      imagemSrc: "/assets/images/bacias-hidrograficas/lena.png",
      imagemAlt: "Paisagem da região da bacia do rio Lena",
      mapOffset: 10,
      mapHorizontalOffset: 0,
    };
  }

  if (id === 17) {
    return {
      id: 17,
      titulo: "Kolyma",
      descricao:
        "A área da bacia hidrográfica é de 644 000 km². O rio Kolyma se encontra no noroeste da Sibéria, e a sua bacia cobre partes da República de Sakha, Chukotka e do Oblast de Magadan. Ele tem 2 129 quilômetros de comprimento e drena uma bacia de 679 934 km². Seu volume médio de água é de 4 060 m³/s.",
      mapaSrc: "/assets/images/bacias-hidrograficas/mundi-17.svg",
      imagemSrc: "/assets/images/bacias-hidrograficas/kolyma.png",
      imagemAlt: "Paisagem da região da bacia do rio Kolyma",
      mapOffset: 0,
      mapHorizontalOffset: 0,
    };
  }

  if (id === 18) {
    return {
      id: 18,
      titulo: "Amur",
      descricao:
        "A área da bacia hidrográfica é de 1 855 000 km². O rio Amur é um grande curso de água que forma uma parte da fronteira entre a Rússia e a República Popular da China e, ao final do percurso, entra em território russo. Seu volume médio de água é de 11 400 m³/s.",
      mapaSrc: "/assets/images/bacias-hidrograficas/mundi-18.svg",
      imagemSrc: "/assets/images/bacias-hidrograficas/amur.png",
      imagemAlt: "Paisagem da região da bacia do rio Amur",
      mapOffset: 10,
      mapHorizontalOffset: 0,
    };
  }

  if (id === 19) {
    return {
      id: 19,
      titulo: "Ganges e Brahmaputra",
      descricao:
        "A área da bacia hidrográfica é de 1 320 000 km². O rio Ganges é considerado sagrado para o hinduísmo (principal religião local), com 2 525 quilômetros de comprimento, e é importante para a irrigação. Seu volume médio de água é de 12 020 m³/s.",
      descricaoSecundaria:
        "A área da bacia hidrográfica é de 651 334 km². O rio Brahmaputra se localiza na Ásia Meridional, com 3 900 quilômetros de extensão. Sua nascente é nos Himalaias, no Kailash, a 5 000 metros de altitude, no glaciar Kubingangri; a princípio, é conhecido como Yarlung Tsangpo e, no Tibete do Sul, como Dihang. Seu volume médio de água é de 19 300 m³/s.",
      mapaSrc: "/assets/images/bacias-hidrograficas/mundi-19.svg",
      imagemSrc: "/assets/images/bacias-hidrograficas/ganges-e-brahmaputra-1.png",
      imagemAlt: "Vista de peregrinos às margens do rio Ganges",
      imagemSecundariaSrc: "/assets/images/bacias-hidrograficas/ganges-e-brahmaputra-2.png",
      imagemSecundariaAlt: "Paisagem de montanhas na região da bacia do rio Brahmaputra",
      mapOffset: 10,
      mapHorizontalOffset: 0,
    };
  }

  if (id === 20) {
    return {
      id: 20,
      titulo: "Yang-Tsé",
      descricao:
        "A área da bacia hidrográfica é de 1 808 000 km². O rio Yang-Tsé tem a maior parte de seu curso na China e é fundamental para o transporte, a geração de energia e, sobretudo, a fertilização dos solos para produção de alimentos. Seu volume médio de água é de 30 770 m³/s.",
      mapaSrc: "/assets/images/bacias-hidrograficas/mundi-20.svg",
      imagemSrc: "/assets/images/bacias-hidrograficas/yang-tse.png",
      imagemAlt: "Vista de ponte sobre o rio Yang-Tsé ao entardecer",
      mapOffset: 10,
      mapHorizontalOffset: 0,
    };
  }

  if (id === 21) {
    return {
      id: 21,
      titulo: "Murray–Darling",
      descricao:
        "A área da bacia hidrográfica é de 1 061 000 km². O rio Darling é o terceiro maior rio australiano, com uma extensão de 1 390 quilômetros. O rio parte do norte de Nova Gales do Sul e conflui com o rio Murray, em Wentworth, no mesmo estado, que tem um volume médio de água de 767 m³/s.",
      mapaSrc: "/assets/images/bacias-hidrograficas/mundi-21.svg",
      imagemSrc: "/assets/images/bacias-hidrograficas/murray-darling.png",
      imagemAlt: "Paisagem da região da bacia do rio Murray–Darling",
      mapOffset: 5,
      mapHorizontalOffset: 0,
    };
  }

  if (id === 22) {
    return {
      id: 22,
      titulo: "Huang-Ho",
      descricao:
        "A área da bacia hidrográfica é de 752 000 km². O rio Huang-Ho, também denominado rio Amarelo, é o segundo mais longo rio da China e o sexto maior do mundo, medindo 5 464 quilômetros. Ele é de grande importância para a economia chinesa, pois o seu vale tem terras férteis, bons pastos e importantes jazidas minerais. O volume médio de água deste rio é de 2 571 m³/s.",
      mapaSrc: "/assets/images/bacias-hidrograficas/mundi-22.svg",
      imagemSrc: "/assets/images/bacias-hidrograficas/huang-ho.png",
      imagemAlt: "Paisagem da região da bacia do rio Huang-Ho",
      mapOffset: 10,
      mapHorizontalOffset: 0,
    };
  }

  if (id === 23) {
    return {
      id: 23,
      titulo: "Indo",
      descricao:
        "A área da bacia hidrográfica é de 1 165 000 km². O rio Indo é o mais longo e importante do Paquistão, com 3 180 quilômetros, e um dos mais destacados rios do subcontinente indiano. Seu volume médio de água é de 6 600 m³/s.",
      mapaSrc: "/assets/images/bacias-hidrograficas/mundi-23.svg",
      imagemSrc: "/assets/images/bacias-hidrograficas/indo.png",
      imagemAlt: "Paisagem da região da bacia do rio Indo",
      mapOffset: -730,
      mapHorizontalOffset: 0,
    };
  }

  if (id === 24) {
    return {
      id: 24,
      titulo: "Tigre e Eufrates",
      descricao:
        "A área da bacia hidrográfica é de 375 000 km². O rio Tigre é o mais oriental dos dois grandes cursos de água que delineiam a Mesopotâmia, junto do Eufrates, que corre desde as montanhas da Anatólia através do Iraque. De fato, o nome Mesopotâmia significa terra entre os rios. O Tigre tem 1 900 km de extensão e um volume médio de água de aproximadamente 26 bilhões m³/s.",
      mapaSrc: "/assets/images/bacias-hidrograficas/mundi-24.svg",
      imagemSrc: "/assets/images/bacias-hidrograficas/tigres-e-eufrates.png",
      imagemAlt: "Paisagem da região da bacia dos rios Tigre e Eufrates",
      mapOffset: 10,
      mapHorizontalOffset: 0,
    };
  }

  if (id === 25) {
    return {
      id: 25,
      titulo: "Danúbio",
      descricao:
        "A área da bacia hidrográfica é de 817 000 km². O rio Danúbio atravessa vários países europeus, servindo como uma importante área de comunicação entre a Europa Ocidental e a Oriental. O volume médio do rio Danúbio é de 6 700 m³/s.",
      mapaSrc: "/assets/images/bacias-hidrograficas/mundi-25.svg",
      imagemSrc: "/assets/images/bacias-hidrograficas/danubio.png",
      imagemAlt: "Paisagem da região da bacia do rio Danúbio",
      mapOffset: 10,
      mapHorizontalOffset: 0,
    };
  }

  if (id === 26) {
    return {
      id: 26,
      titulo: "Orange",
      descricao:
        "A área da bacia hidrográfica é de 973 000 km². O rio Orange é o maior da África do Sul. Ele foi descoberto por indígenas, mas explorado cientificamente por europeus em 1760 e deve o seu nome ao coronel Robert Gordon, da Casa de Orange. Seu volume médio de água é de 800 m³/s.",
      mapaSrc: "/assets/images/bacias-hidrograficas/mundi-26.svg",
      imagemSrc: "/assets/images/bacias-hidrograficas/orange.png",
      imagemAlt: "Paisagem da região da bacia do rio Orange",
      mapOffset: 1050,
      mapHorizontalOffset: 0,
    };
  }

  return {
    id,
    titulo: `Bacia ${id}`,
    descricao: "",
    mapaSrc: "/assets/images/bacias-hidrograficas/mapa-mundi.svg",
    imagemSrc: `/assets/images/bacias-hidrograficas/${id}.svg`,
    imagemAlt: `Bacia ${id}`,
    mapOffset: 0,
    mapHorizontalOffset: 0,
  };
});

export default function BaciasHidrograficasTopicos() {
  const router = useRouter();

  const handleVoltar = () => router.push("/bacias-hidrograficas/intro");
  const handleAvancar = () => router.push("/bacias-hidrograficas/final");

  const [modalAberto, setModalAberto] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [imgSize, setImgSize] = useState<{ w: number; h: number }>({ w: imgViewBoxWidth, h: imgViewBoxHeight });
  const dragRef = useRef({
    dragging: false,
    startX: 0,
    startY: 0,
    origX: 0,
    origY: 0,
    startedOnHotspot: false,
    moved: false,
  });
  const baseViewRef = useRef<{ scale: number; pos: { x: number; y: number } } | null>(null);
  const [manualZoomActive, setManualZoomActive] = useState(false);
  const pointersRef = useRef<Map<number, { x: number; y: number }>>(new Map());
  const pinchRef = useRef<{ pinching: boolean; startDistance: number; startScale: number; center: { x: number; y: number } }>(
    { pinching: false, startDistance: 0, startScale: 1, center: { x: 0, y: 0 } }
  );

  const [containerPad, setContainerPad] = useState<number>(16);
  const [hoveredHotspot, setHoveredHotspot] = useState<number | null>(null);

  useEffect(() => {
    const isVeryNarrow = window.innerWidth <= 391;
    const isNarrow = window.innerWidth <= 461;
    setContainerPad(isVeryNarrow ? 4 : isNarrow ? 6 : 16);
  }, []);

  const clampScale = (s: number) => Math.min(4, Math.max(0.5, s));

  const zoomAt = useCallback((cx: number, cy: number, delta: number) => {
    setScale((prevScale) => {
      const el = containerRef.current;
      if (!el) return prevScale;
      const newScale = clampScale(prevScale + delta);
      setPos((prevPos) => {
        const worldX = (cx - PADDING - prevPos.x) / prevScale;
        const worldY = (cy - PADDING - prevPos.y) / prevScale;
        return {
          x: cx - PADDING - worldX * newScale,
          y: cy - PADDING - worldY * newScale,
        };
      });
      return newScale;
    });
  }, []);

  const onWheel = useCallback(
    (e: WheelEvent) => {
      e.preventDefault();
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      const delta = e.deltaY > 0 ? -0.12 : 0.12;
      zoomAt(cx, cy, delta);
    },
    [zoomAt]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("wheel", onWheel as EventListener, { passive: false });
    return () => el.removeEventListener("wheel", onWheel as EventListener);
  }, [onWheel]);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const update = () => {
      const w = img.naturalWidth || imgViewBoxWidth;
      const h = img.naturalHeight || imgViewBoxHeight;
      setImgSize({ w, h });
    };

    if (img.complete) update();
    else img.addEventListener("load", update as EventListener, { once: true });
  }, []);

  const fitToContainer = useCallback(() => {
    const el = containerRef.current;
    if (!el || !imgSize.w || !imgSize.h) return;

    const cw = Math.max(0, el.clientWidth - PADDING * 2);
    const ch = Math.max(0, el.clientHeight - PADDING * 2);
    if (cw === 0 || ch === 0) return;

    // Foco inicial semelhante ao Figma: Américas centralizadas
    const focus = { cxFrac: 0.32, cyFrac: 0.60, wFrac: 0.55, hFrac: 0.55 };

    const target = clampScale(
      Math.min(cw / (imgSize.w * focus.wFrac), ch / (imgSize.h * focus.hFrac))
    );

    const worldCX = imgSize.w * focus.cxFrac;
    const worldCY = imgSize.h * focus.cyFrac;
    const screenCX = cw / 2;
    const screenCY = ch / 2;

    const posX = screenCX - worldCX * target;
    const posY = screenCY - worldCY * target;
    setScale(target);
    setPos({ x: posX, y: posY });
    baseViewRef.current = { scale: target, pos: { x: posX, y: posY } };
    setManualZoomActive(false);
  }, [imgSize.w, imgSize.h]);

  useEffect(() => {
    if (!imgSize.w || !imgSize.h) return;
    fitToContainer();
  }, [imgSize.w, imgSize.h, fitToContainer]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => fitToContainer());
    ro.observe(el);
    return () => ro.disconnect();
  }, [fitToContainer]);

  const startDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement | null;
    dragRef.current.startedOnHotspot = !!(target && target.closest("button"));
    dragRef.current.moved = false;

    pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pointersRef.current.size === 2) {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const pts = Array.from(pointersRef.current.values()) as { x: number; y: number }[];
      const dx = pts[1].x - pts[0].x;
      const dy = pts[1].y - pts[0].y;
      const dist = Math.hypot(dx, dy);
      const cx = (pts[0].x + pts[1].x) / 2 - rect.left;
      const cy = (pts[0].y + pts[1].y) / 2 - rect.top;
      pinchRef.current = {
        pinching: true,
        startDistance: dist,
        startScale: scale,
        center: { x: cx, y: cy },
      };
      dragRef.current.dragging = false;
      return;
    }

    if ((scale <= 1 && !manualZoomActive) || pointersRef.current.size !== 1) return;
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
    dragRef.current.dragging = true;
    dragRef.current.startX = e.clientX;
    dragRef.current.startY = e.clientY;
    dragRef.current.origX = pos.x;
    dragRef.current.origY = pos.y;
  };

  const onDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (pointersRef.current.has(e.pointerId)) {
      pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    }

    if (pinchRef.current.pinching && pointersRef.current.size >= 2) {
      const el = containerRef.current;
      if (!el) return;
      const pts = Array.from(pointersRef.current.values());
      const dx = pts[1].x - pts[0].x;
      const dy = pts[1].y - pts[0].y;
      const dist = Math.hypot(dx, dy);
      const factor = dist / Math.max(1, pinchRef.current.startDistance);
      const targetScale = clampScale(pinchRef.current.startScale * factor);
      const cx = pinchRef.current.center.x;
      const cy = pinchRef.current.center.y;

      setScale((prevScale) => {
        const newScale = targetScale;
        setPos((prevPos) => {
          const worldX = (cx - PADDING - prevPos.x) / prevScale;
          const worldY = (cy - PADDING - prevPos.y) / prevScale;
          return {
            x: cx - PADDING - worldX * newScale,
            y: cy - PADDING - worldY * newScale,
          };
        });
        if (baseViewRef.current) {
          setManualZoomActive(newScale > baseViewRef.current.scale + 0.02);
        }
        return newScale;
      });
      return;
    }

    if (!dragRef.current.dragging) return;
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;

    if (!dragRef.current.moved) {
      const distanceSq = dx * dx + dy * dy;
      const threshold = 4 * 4; // ~4px de deslocamento
      if (distanceSq > threshold) {
        dragRef.current.moved = true;
      }
    }

    setPos({ x: dragRef.current.origX + dx, y: dragRef.current.origY + dy });
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    pointersRef.current.delete(e.pointerId);
    if (pinchRef.current.pinching && pointersRef.current.size < 2) {
      pinchRef.current.pinching = false;
    }
    dragRef.current.dragging = false;
    try {
      (e.currentTarget as HTMLDivElement).releasePointerCapture(e.pointerId);
    } catch {}
  };

  const toggleZoom = () => {
    const el = containerRef.current;
    if (!el || !imgSize.w || !imgSize.h) return;

    const cw = Math.max(0, el.clientWidth - PADDING * 2);
    const ch = Math.max(0, el.clientHeight - PADDING * 2);
    const screenCX = cw / 2;
    const screenCY = ch / 2;

    // Foco específico no hotspot 1 (América do Norte), aproximando o Figma
    const focus = { cxFrac: 0.18, cyFrac: 0.32, wFrac: 0.18, hFrac: 0.18 };
    console.log('manualZoom');

    if (manualZoomActive) {
      // Segundo clique: forçar zoom-out total (voltar mapa para longe)
      setScale(1);
      setPos({ x: 0, y: 0 });
      setManualZoomActive(false);
      console.log('zoom out');
      return;
    }

    const target = clampScale(
      Math.min(cw / (imgSize.w * focus.wFrac), ch / (imgSize.h * focus.hFrac))
    );

    const worldCX = imgSize.w * focus.cxFrac;
    const worldCY = imgSize.h * focus.cyFrac;
    const posX = screenCX - worldCX * target;
    const posY = screenCY - worldCY * target;
    setScale(target);
    setPos({ x: posX, y: posY });
    setManualZoomActive(true);
    console.log('zoom in');
  };

  const getHotspotStyle = (h: Hotspot) => {
    if (!imgSize.w || !imgSize.h) {
      return {
        left: h.x,
        top: h.y,
        width: h.width,
        height: h.height,
        zIndex: h.id === hoveredHotspot ? 20 : 1,
      } as React.CSSProperties;
    }

    const centerX = ((h.x + h.width / 2) / imgSize.w) * 100;
    const centerY = ((h.y + h.height / 2) / imgSize.h) * 100;
    const wPercent = (h.width / imgSize.w) * 100;
    const hPercent = (h.height / imgSize.h) * 100;

    return {
      left: `${centerX}%`,
      top: `${centerY}%`,
      width: `${wPercent}%`,
      height: `${hPercent}%`,
      transform: "translate(-50%, -50%)",
      zIndex: h.id === hoveredHotspot ? 20 : 1,
    } as React.CSSProperties;
  };

return (
  <div
    className="relative overflow-hidden flex flex-col justify-center items-center min-h-screen mx-auto"
    style={{
      backgroundImage:
        "linear-gradient(180deg, rgba(230, 245, 235, 0) 0%, rgba(204, 218, 163, 1) 100%), linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%)",
    }}
  >
    <div className="w-full relative min-h-screen flex justify-center">
      <div className="absolute inset-0" aria-hidden>
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(230, 245, 235, 0) 0%, rgba(204, 218, 163, 1) 100%), linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%)",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[992px] mx-auto px-4 md:px-6 pt-10 pb-8 min-h-screen flex flex-col">
        <div className="mb-4 flex flex-col items-center gap-1">
          <img
            src="/assets/images/bacias-hidrograficas/info-clique.svg"
            alt="Instrução de clique na numeração para interagir com as bacias hidrográficas"
            className="block h-auto w-auto"
          />
        </div>

        <div className="relative w-full flex-1 min-h-[380px] md:min-h-[500px]">
            <div
              ref={containerRef}
              className="absolute inset-0 overflow-hidden rounded-[16px] touch-none pointer-events-none cursor-grab active:cursor-grabbing"
              style={{ padding: containerPad }}
              onPointerDown={startDrag}
              onPointerMove={onDrag}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
            >
              <div
                className="origin-center touch-none select-none pointer-events-auto relative"
                style={{
                  width: imgSize.w ? `${imgSize.w}px` : "100%",
                  height: imgSize.h ? `${imgSize.h}px` : "100%",
                  transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
                  transformOrigin: "center center",
                }}
              >
                <img
                  ref={imgRef}
                  src="/assets/images/bacias-hidrograficas/mapa-mundi.svg"
                  alt="Mapa mundi das principais bacias hidrográficas"
                  className="w-full h-full object-contain pointer-events-none"
                  draggable={false}
                />

                {HOTSPOTS.map((h) => (
                  <button
                    key={h.id}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();

                      // Se houve arraste iniciado sobre um hotspot, não abrir modal
                      if (dragRef.current.startedOnHotspot && dragRef.current.moved) {
                        return;
                      }

                      setModalAberto(h.id);
                    }}
                    onMouseEnter={() => setHoveredHotspot(h.id)}
                    onMouseLeave={() =>
                      setHoveredHotspot((current: number | null) =>
                        current === h.id ? null : current
                      )
                    }
                    className="absolute pointer-events-auto cursor-pointer"
                    style={getHotspotStyle(h)}
                    aria-label={`Abrir informações da bacia ${h.id}`}
                  >
                    <img
                      src={`/assets/images/bacias-hidrograficas/${h.id}.svg`}
                      alt={`Bacia ${h.id}`}
                      className="w-full h-full object-contain"
                      draggable={false}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Botão de lupa fora da área de pan/zoom para não interferir com pointer events */}
            <button
              onClick={toggleZoom}
              className="absolute left-4 bottom-4 w-10 h-10 rounded-full bg-white shadow-[0px_2px_3.6px_rgba(0,0,0,0.65)] border border-[#09163C]/20 flex items-center justify-center active:translate-y-px cursor-pointer"
              aria-label={manualZoomActive ? "Reduzir zoom" : "Aumentar zoom"}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11" cy="11" r="7" stroke="#09163C" strokeWidth="2" />
                <line
                  x1="20"
                  y1="20"
                  x2="16.5"
                  y2="16.5"
                  stroke="#09163C"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="8"
                  y1="11"
                  x2="14"
                  y2="11"
                  stroke="#09163C"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {!manualZoomActive && (
                  <line
                    x1="11"
                    y1="8"
                    x2="11"
                    y2="14"
                    stroke="#09163C"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>

          <div className="mt-8">
            <FooterNavegacao onVoltar={handleVoltar} onAvancar={handleAvancar} />
          </div>
        </div>
      </div>

      {modalAberto !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 overflow-y-auto flex justify-center">
          {(() => {
            const topico = baciasTopicos.find((t) => t.id === modalAberto)!;
            return (
              <ModalContent
                id={topico.id}
                titulo={topico.titulo}
                descricao={topico.descricao}
                descricaoSecundaria={topico.descricaoSecundaria}
                mapaSrc={topico.mapaSrc}
                imagemSrc={topico.imagemSrc}
                imagemAlt={topico.imagemAlt}
                imagemSecundariaSrc={topico.imagemSecundariaSrc}
                imagemSecundariaAlt={topico.imagemSecundariaAlt}
                mapOffset={topico.mapOffset}
                mapHorizontalOffset={topico.mapHorizontalOffset ?? 0}
                onClose={() => setModalAberto(null)}
              />
            );
          })()}
        </div>
      )}
    </div>
  );
}
