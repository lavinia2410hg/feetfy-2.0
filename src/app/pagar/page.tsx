"use client"

import ButtonGroup from "@/components/GroupButton";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import image1 from '../../public/image/primeira.jpeg';
// import image4 from '../../public/image/quarta.jpeg';
// import image5 from '../../public/image/quinta.webp';
// import image2 from '../../public/image/segundo.jpeg';
import premio from '../../../public/image/premio.jpeg';
import bk from '../../../public/image/bk.png'
import warning from '../../../public/image/warning.png'
import { RxTextAlignJustify } from "react-icons/rx";

interface Pergunta {
  titulo: string;
  btn1: string;
  btn2: string;
}

interface Item {
  img: StaticImageData,
  primeiro: string;
  primeiraQ: Pergunta;
  segundaQ: Pergunta;
}
export default function Home() {


  const [count, setCount] = useState(0)
  const [button, setButton] = useState(0)
  const router = useRouter();

  const handleRatingChange = (newRating: number) => {
    setButton((butt) => (butt + 1))
    console.log(button);

  };

  return (
    <>

      <main className="flex font-sora p-6 font flex-col items-center w-full bg-[#8209d1] h-screen md:px-24 sm:p-0 lg:px-24 justify-center">
        <div className="flex flex-col items-center text-white text-center gap-3 justify-center" >
          <div className="flex flex-col items-center justify-center gap-4">
            <Image alt="warning" src={warning} className="w-20"/>
            <span className="text-3xl font-bold">ATENÇÃO</span>
          </div>
          <span className="text-2xl leading-6 font-bold">Prossiga com seu saque</span>
          <span className="text-lg leading-6">Devido a grande procura pelo <b>FeedFy</b>, estamos adotando medidas de cautela para manter a qualidade e segurança do serviço. Estamos disponibilizando o acesso ao APP para um número <b>limitado de usuários.</b></span>
          <span className="text-lg leading-6">Para assegurar seu acesso ao <b>FeedFy</b>, uma pequena taxa de verificação é necessária. Esta taxa se faz necessária para confirmar a autenticidade da sua chave <b>PIX</b> e garantir que somente suários legítimos tenham acesso.</span>
          <span className="text-lg leading-6"><b>Não se preocupe:</b> o valor integral da taxa será <b>imediatamente reembolsado</b> ao seu saldo no app assim que seu perfil for aprovado.</span>
          <button className="text-3xl text-purple-600 rounded-full bg-white py-3 px-7 animate-scale"
          onClick={()=> router.push("image/feedfy/FeedFy.html")}
          >LIBERAR SAQUE!</button>
        </div>
      </main>
    </>
  );
}