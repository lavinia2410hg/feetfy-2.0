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
import check from '../../../public/image/check.png'
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

      <main className="flex font-sora p-4 font flex-col items-center w-full bg-[#8209d1] h-screen md:px-24 sm:p-0 lg:px-24 justify-center">
        <div className="flex flex-col items-center text-white text-center gap-3 justify-center" >
          <div className="flex flex-col items-center justify-center gap-4">
            <Image alt="check" src={check} className="w-20"/>
            <span className="text-2xl font-bold">PARABÉNS!</span>
          </div>
          <span className="text-xl">Seu cadastro foi realizdo e você acaba de ganhar R$ 335,21</span>
          <span className="text-lg">Preencha seus dados bancários corretamente para realizar o seu primeiro <b>SAQUE</b></span>
          <button className="text-3xl text-purple-600 rounded-full bg-white py-3 px-7 animate-scale"
          onClick={()=> router.push("saquePix")}
          >LIBERAR SAQUE!</button>
        </div>
      </main>
    </>
  );
}