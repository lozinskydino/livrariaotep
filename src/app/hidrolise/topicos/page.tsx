"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import InfoCard from "../components/InfoCard";
import InfoCardTitle from "../components/InfoCardTitle";
import InfoCardText from "../components/InfoCardText";
import FooterNavegacao from "../components/FooterNavegacao";

export default function HidroliseTopicos() {
  const router = useRouter();
  const handleVoltar = () => router.push("/hidrolise/info");
  const handleAvancar = () => router.push("/hidrolise/final");
  const handleAbrirIndustriaAlimenticia = () => router.push("/hidrolise/topicos/industria-alimenticia");
  const handleAbrirIndustriaFarmaceutica = () => router.push("/hidrolise/topicos/industria-farmaceutica");
  const handleAbrirEfluentesGordurosos = () => router.push("/hidrolise/topicos/efluentes-gordurosos");

  return (
    <div
      className="relative overflow-hidden flex flex-col justify-center items-center min-h-screen mx-auto"
      style={{ backgroundColor: "#f4efdf" }}
    >
      {/* Lona central responsiva */}
      <div className="w-full relative min-h-screen flex justify-center">
        {/* Background decorativo com os mesmos elementos da landing */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Padrão de fundo principal (expansível) */}
          <div
            className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-full"
            style={{
              backgroundImage: "url('/assets/images/hidrolise/bg-pattern.svg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
            aria-hidden
          />

          {/* Container que limita os elementos decorativos laterais ao conteúdo */}
          <div className="max-w-[909px] min-h-[100vh] relative mx-auto">
            {/* DNA superior esquerdo */}
            <div className="absolute left-[-10%] top-[-3%] w-[200px] h-[140px]">
              <Image
                src="/assets/images/hidrolise/elemento-left.svg"
                alt=""
                width={200}
                height={140}
                className="object-contain"
              />
            </div>

            {/* Átomo superior direito */}
            <div className="absolute right-[-10%] top-[-5%] w-[170px] h-[170px]">
              <Image
                src="/assets/images/hidrolise/elemento-top.svg"
                alt=""
                width={170}
                height={170}
                className="object-contain"
              />
            </div>

            {/* Microscópio inferior direito */}
            <div className="absolute right-[-30%] bottom-[-4%] w-[200px] h-[250px]">
              <Image
                src="/assets/images/hidrolise/microscopio.svg"
                alt=""
                width={129}
                height={314}
                className="object-contain"
              />
            </div>

            {/* Elemento inferior esquerdo */}
            <div
              className="absolute left-[-5%] bottom-[-5%] w-[140px] h-[140px]"
              style={{ transform: "rotate(349.464deg)", transformOrigin: "center" }}
            >
              <Image
                src="/assets/images/hidrolise/elemento-bottom.svg"
                alt=""
                width={140}
                height={140}
                className="object-contain"
              />
            </div>
      </div>
        </div>
        {/* Conteúdo principal */}
        <div className="relative z-10 w-full max-w-[909px] min-h-screen px-6 py-10 flex flex-col gap-6">
          {/* Intro dos tópicos */}
          <InfoCard containerBg="#646363" innerBg="#e6e6e6" innerBorder="#343434" radius={16} padding={16}>
            <InfoCardTitle>Aplicações da hidrólise ácida e alcalina</InfoCardTitle>
            <InfoCardText mb>
              Você sabia que a hidrólise vai muito além da fabricação de sabões e de <span className="font-extrabold underline">flavonoides</span>?
            </InfoCardText>
            <InfoCardText className="mt-2">
              Essa reação química tem aplicações que se estendem à produção de fármacos e à crescente área da química verde. Tanto a hidrólise ácida quanto a alcalina têm mostrado grande potencial no tratamento de afluentes e resíduos industriais, ajudando a minimizar seus impactos no meio ambiente. Confira alguns exemplos em que a hidrólise desempenha um papel essencial:
            </InfoCardText>
          </InfoCard>

          <Image
            src="/assets/images/hidrolise/cursor.svg"
            alt=""
            width={313}
            height={56}
            className="object-contain"
          />

          {/* Carrossel horizontal (arraste para o lado) */}
            <div
              className="overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth overscroll-x-contain px-6"
              role="region"
              aria-label="Carrossel de aplicações industriais"
              style={{ scrollPaddingLeft: 0, scrollPaddingRight: 0 }}
            >
              <div className="flex gap-6">
                {/* Slide 1 */}
                <div
                  className="snap-start snap-always shrink-0 w-[309px] cursor-pointer"
                  style={{ scrollSnapStop: "always" }}
                  role="button"
                  tabIndex={0}
                  aria-label="Abrir página Indústria alimentícia"
                  onClick={handleAbrirIndustriaAlimenticia}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleAbrirIndustriaAlimenticia(); } }}
                >
                  <InfoCard containerBg="#646363" innerBg="#d7e8f0" innerBorder="#343434" radius={16} padding={16}>
                    {/* Mídia (placeholder) */}
                    <div className="box-border flex flex-col gap-2 h-[160px] items-center justify-center p-2 rounded-[16px] w-full relative overflow-hidden mb-4">
                      <Image
                        src={`/assets/images/hidrolise/slide1.png`}
                        alt="placeholder"
                        className="rounded-[16px]"
                        priority={false}
                        width={281}
                        height={160}
                      />
                    </div>
                    <InfoCardTitle>Indústria alimentícia</InfoCardTitle>
                    <InfoCardText className="mt-2 mb-10">
                    A hidrólise é fundamental na obtenção de compostos bioativos presentes em alimentos, como os flavonoides. Um exemplo é a <b>quercetina</b>, encontrada em frutas como uva, maçã e amora. Esse flavonoide é liberado por meio de uma hidrólise ácida, tornando-se mais biodisponível e aproveitável pelo organismo, além de ser amplamente utilizado em alimentos funcionais e suplementos.
                    </InfoCardText>
                  </InfoCard>
                </div>
                {/* Slide 2 (placeholder para próxima informação, pode ser trocado por imagem/texto do Figma) */}
                <div
                  className="snap-start snap-always shrink-0 w-[309px] cursor-pointer"
                  style={{ scrollSnapStop: "always" }}
                  role="button"
                  tabIndex={0}
                  aria-label="Abrir página Indústria farmacêutica"
                  onClick={handleAbrirIndustriaFarmaceutica}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleAbrirIndustriaFarmaceutica(); } }}
                >
                  <InfoCard containerBg="#646363" innerBg="#d7e8f0" innerBorder="#343434" radius={16} padding={16}>
                      {/* Mídia (placeholder) */}
                      <div className="box-border flex flex-col gap-2 h-[160px] items-center justify-center p-2 rounded-[16px] w-full relative overflow-hidden mb-4">
                        <Image
                          src={`/assets/images/hidrolise/slide2.png`}
                          alt="placeholder"
                          className="rounded-[16px]"
                          priority={false}
                          width={281}
                          height={160}
                        />
                      </div>
                      <InfoCardTitle>Indústria farmacêutica</InfoCardTitle>
                      <InfoCardText className="mt-2 mb-5">
                      Na produção e descarte de medicamentos, as reações de hidrólise são muito comuns. Um exemplo é o <b>antibiótico amoxicilina</b> (nome comercial do ácido penicilânico), que passa por um processo de hidrólise básica no tratamento de efluentes. Esse processo reduz sua toxicidade e evita problemas ambientais, como a contaminação de ecossistemas e o surgimento de microrganismos super-resistentes.
                      </InfoCardText>
                    </InfoCard>
                </div>
                {/* Slide 3 (placeholder para próxima informação, pode ser trocado por imagem/texto do Figma) */}
                <div
                  className="snap-start snap-always shrink-0 w-[309px] cursor-pointer"
                  style={{ scrollSnapStop: "always" }}
                  role="button"
                  tabIndex={0}
                  aria-label="Abrir página Efluentes gordurosos"
                  onClick={handleAbrirEfluentesGordurosos}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleAbrirEfluentesGordurosos(); } }}
                >
                  <InfoCard containerBg="#646363" innerBg="#d7e8f0" innerBorder="#343434" radius={16} padding={16}>
                    {/* Mídia (placeholder) */}
                    <div className="box-border flex flex-col gap-2 h-[160px] items-center justify-center p-2 rounded-[16px] w-full relative overflow-hidden mb-4">
                      <Image
                        src={`/assets/images/hidrolise/slide3.png`}
                        alt="placeholder"
                        className="rounded-[16px]"
                        priority={false}
                        width={281}
                        height={160}
                      />
                    </div>
                    <InfoCardTitle>Outras aplicações industriais</InfoCardTitle>
                    <InfoCardText className="mt-2">
                    A hidrólise alcalina é amplamente utilizada no <b>tratamento de resíduos industriais</b>, especialmente para a decomposição de compostos orgânicos complexos, como proteínas e gorduras. Esse processo é empregado em indústrias alimentícias e químicas para transformar resíduos em materiais menos nocivos ao meio ambiente. Além disso, é uma técnica essencial na neutralização de produtos tóxicos antes do descarte, contribuindo para práticas mais sustentáveis e seguras.
                    </InfoCardText>
                  </InfoCard>
                </div>
              </div>
            </div>

          <InfoCard containerBg="#646363" innerBg="#e6e6e6" innerBorder="#343434" radius={16} padding={16}>
              <InfoCardTitle>Glossário para a palavra “flavonoides”</InfoCardTitle>
              <InfoCardText>
                Substâncias naturais encontradas em diversas frutas. São responsáveis pela cor e pela proteção das plantas, além disso propiciam benefícios à saúde humana, por exemplo, protegem as células contra danos, reduzem inflamações, fortalecem o sistema imunológico e ajudam na saúde do coração e dos ossos.
              </InfoCardText>
          </InfoCard>

          {/* Rodapé com botões (componente reutilizável) */}
          <FooterNavegacao onVoltar={handleVoltar} onAvancar={handleAvancar} />
        </div>
      </div>
    </div>
  );
}
