"use client";

import Image from "next/image";
// import Layout from "./layout";
import {
  Brain,
  Heart,
  Users,
  Mail,
  Phone,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function HomePage() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5541991599013";
    const message =
      "Olá! Gostaria de saber mais informações sobre os atendimentos. Encontrei seu contato pelo site.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;
    window.open(url, "_blank");
  };

  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory md:h-auto md:snap-none scroll-smooth">
      {/* Hero Section */}
      <section
        className="min-h-screen snap-start flex items-center justify-center py-16 md:py-0"
        style={{
          background: "linear-gradient(135deg, #F3F0E7 40%, #2d5145 100%)",
        }}
      >
        <div className="w-11/12 md:w-4/5 flex flex-col md:flex-row items-center justify-center">
          <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left animate-slideInLeft">
            {/* Bloco 1: Logo, Nome e CRP */}
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
              <div className="shrink-0">
                <Image
                  src="/assets/logo_home.svg"
                  alt="Psicóloga Nicolly Oliveira"
                  width={100}
                  height={100}
                  className="object-cover w-24 h-24 md:w-32 md:h-32"
                  priority
                />
              </div>

              <div className="flex flex-col justify-center space-y-3">
                <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold text-[#2d5145]">
                  Nicolly Oliveira
                </h1>
                <p className="font-sans text-lg sm:text-xl md:text-2xl text-gray-700">
                  Psicóloga CRP 08/46175
                </p>
              </div>
            </div>

            {/* Bloco 2: Texto Descritivo */}
            <div className="font-sans space-y-4 max-w-lg mt-8">
              <p className="text-base md:text-lg text-black">
                Entendo que algumas questões não podem esperar. Estou à
                disposição para ouvi-lo e oferecer apoio em sua jornada de
                autoconhecimento e fortalecimento emocional.
              </p>
              <p className="text-base md:text-lg text-black">
                Meu objetivo é proporcionar um espaço seguro e acolhedor, onde
                você possa refletir e crescer pessoalmente. Juntos, exploraremos
                suas potencialidades e encontraremos formas de enfrentar os
                desafios do dia a dia. A terapia é um investimento no seu
                bem-estar, permitindo descobrir seus recursos internos e viver
                de maneira mais leve e equilibrada.
              </p>
            </div>

            {/* Bloco 3: Botão */}
            <div className="mt-10">
              <button
                className="bg-[#3D6B5C] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
                onClick={handleWhatsAppClick}
              >
                Agendar Consulta
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end items-center animate-slideInRight mt-10 md:mt-0">
            <Image
              src="/assets/foto_psicologa.png"
              alt="Psicóloga Nicolly Oliveira"
              width={600}
              height={600}
              className="object-cover rounded-full w-56 h-56 sm:w-64 sm:h-64 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]"
              priority
            />
          </div>
        </div>
      </section>

      {/* Seção "Como posso ajudar você" */}
      <section className="min-h-screen md:min-h-0 md:h-auto snap-start flex flex-col items-center justify-center py-16 md:py-20 bg-[#F3F0E7]">
        <div className="w-11/12 md:w-4/5 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2d5145] mb-12">
            Como posso ajudar você
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center border border-[#E8EDE6] hover:border-[#6B8E7F] transition-colors">
              <div className="w-20 h-20 bg-[#E8EDE6] rounded-full flex items-center justify-center mb-4">
                <Brain color="#3D6B5C" size={40} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#3D6B5C] mb-4">
                Autoconhecimento
              </h3>
              <p className="font-sans text-base md:text-lg text-gray-700">
                Explore sua mente e emoções em um ambiente seguro. Descubra seus
                padrões de pensamento e comportamento para viver de forma mais
                autêntica.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center border border-[#E8EDE6] hover:border-[#6B8E7F] transition-colors">
              <div className="w-20 h-20 bg-[#E8EDE6] rounded-full flex items-center justify-center mb-4">
                <Heart color="#3D6B5C" size={40} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#3D6B5C] mb-4">
                Bem-estar Emocional
              </h3>
              <p className="font-sans text-base md:text-lg text-gray-700">
                Desenvolva estratégias para lidar com ansiedade, estresse e
                outras questões emocionais. Encontre equilíbrio e paz interior.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center border border-[#E8EDE6] hover:border-[#6B8E7F] transition-colors">
              <div className="w-20 h-20 bg-[#E8EDE6] rounded-full flex items-center justify-center mb-4">
                <Users color="#3D6B5C" size={40} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#3D6B5C] mb-4">
                Relacionamentos
              </h3>
              <p className="font-sans text-base md:text-lg text-gray-700">
                Melhore suas relações interpessoais. Aprenda a comunicar-se
                melhor e construir conexões mais saudáveis e significativas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section className="min-h-screen md:min-h-0 md:h-auto snap-start flex items-center justify-center py-16 md:py-20 bg-[#F8FAF9]">
        <div className="w-11/12 md:w-4/5 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <div className="flex-1 flex justify-center">
            <Image
              src="/assets/consultorio.png"
              alt="Consultório de psicologia"
              width={500}
              height={500}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex-1 flex flex-col space-y-6 items-center md:items-start text-center md:text-left">
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#2d5145]">
              Uma sessão pode mudar sua vida para sempre!
            </h2>
            <p className="font-sans text-base md:text-lg text-gray-700">
              Encontre um espaço acolhedor onde você pode explorar seus
              sentimentos e enfrentar desafios. Estou aqui para oferecer suporte
              e orientação, ajudando você a superar obstáculos e alcançar o
              equilíbrio na vida.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#3D6B5C]" />
                <span className="font-sans text-base md:text-lg text-gray-800">
                  psicologa.nicollyoliveira@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#3D6B5C]" />
                <span className="font-sans text-base md:text-lg text-gray-800">
                  (41) 99159-9013
                </span>
              </div>
            </div>
            <div>
              <button
                className="bg-[#3D6B5C] text-white text-sm font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
                onClick={handleWhatsAppClick}
              >
                Falar comigo pelo Whatsapp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#3D6B5C] text-white py-12 px-8 snap-start">
        <div className="max-w-6xl mx-auto">
          {/* Grid Container */}
          <div className="flex flex-col md:flex-row md:justify-between gap-10">
            {/* Column 1: About */}
            <div className="space-y-4 md:w-1/3">
              <h3 className="font-serif text-2xl">Nicolly Oliveira</h3>
              <div className="space-y-2 font-sans text-base md:text-lg">
                <p className="text-white/90">Psicóloga CRP-08 46175</p>
                <p className="text-white/70 leading-relaxed">
                  Oferecendo um espaço seguro e acolhedor para seu
                  autoconhecimento e crescimento emocional.
                </p>
              </div>
            </div>

            {/* Column 2: Contact */}
            <div className="space-y-4 md:w-1/3">
              <h3 className="font-serif text-2xl">Contato</h3>
              <div className="space-y-3 font-sans text-base md:text-lg">
                <a
                  href="mailto:psicologa.nicollyoliveira@gmail.com"
                  className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                >
                  <Mail size={16} />
                  <span className="break-all">
                    psicologa.nicollyoliveira@gmail.com
                  </span>
                </a>
                <a
                  href="tel:+5541991599013"
                  className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                >
                  <Phone size={16} />
                  <span>(41) 99159-9013</span>
                </a>
              </div>
              <div className="flex gap-4 pt-2">
                <a
                  href="https://www.instagram.com/psicologa.nicolly/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <Instagram size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/nicolly-oliveira-08055b274/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </div>

            {/* Column 3: CTA */}
            <div className="space-y-4 md:w-1/3">
              <h3 className="font-serif text-2xl">Agende sua sessão</h3>
              <p className="font-sans text-base md:text-lg text-white/70 leading-relaxed">
                Entre em contato e dê o primeiro passo em direção ao seu
                bem-estar emocional.
              </p>
              <button
                className="font-sans bg-white hover:bg-white/90 text-[#3D6B5C] font-bold py-3 px-6 rounded-lg shadow-md transition-transform hover:scale-105"
                onClick={handleWhatsAppClick}
              >
                WhatsApp
              </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 mt-10 pt-8 text-center">
            <p className="font-sans text-xs text-white/60">
              © {new Date().getFullYear()} Nicolly Oliveira - Psicóloga CRP-08
              46175. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
