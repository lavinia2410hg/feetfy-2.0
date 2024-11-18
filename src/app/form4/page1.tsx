"use client"

import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import image1 from '../../public/image/primeira.jpeg';
// import image4 from '../../public/image/quarta.jpeg';
// import image5 from '../../public/image/quinta.webp';
// import image2 from '../../public/image/segundo.jpeg';
import StarRating from "@/components/StarRating";
import { FaCheckCircle } from "react-icons/fa";
import { FaPix } from "react-icons/fa6";
import { TbStarFilled, TbStarHalfFilled } from "react-icons/tb";
import feedfy from '../../../public/image/feedfy/feedfyBranco.webp';
import icon1 from '../../../public/image/feedfy/icon1.png';
import load from '../../../public/image/feedfy/load.gif';
import image1 from "../../../public/image/init/image_1.webp";
import image10 from "../../../public/image/init/image_10.webp";
import image11 from "../../../public/image/init/image_11.webp";
import image12 from "../../../public/image/init/image_12.webp";
import image13 from "../../../public/image/init/image_13.webp";
import image14 from "../../../public/image/init/image_14.webp";
import image15 from "../../../public/image/init/image_15.webp";
import image2 from "../../../public/image/init/image_2.webp";
import image3 from "../../../public/image/init/image_3.webp";
import image4 from "../../../public/image/init/image_4.webp";
import image5 from "../../../public/image/init/image_5.webp";
import image6 from "../../../public/image/init/image_6.webp";
import image7 from "../../../public/image/init/image_7.webp";
import image8 from "../../../public/image/init/image_8.webp";
import image9 from "../../../public/image/init/image_9.webp";


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

export interface IQ {
  q1: boolean
  q2: boolean
  q3: boolean
  q4: boolean
}

export interface ICheck {
  q1: boolean | undefined
  q2: boolean | undefined
  q3: boolean | undefined
}

export default function Form1() {


  const [count, setCount] = useState(0)
  const [button, setButton] = useState(0)
  const [listImage, setListImage] = useState<StaticImageData[]>([image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15
  ] as StaticImageData[])
  const router = useRouter();
  const [loadedImages, setLoadedImages] = useState<string[]>([]); // Estado para rastrear imagens carregadas

  useEffect(() => {
    const loadImages = async () => {
      for (const image of listImage) {
        setLoadedImages((prev): any => [...prev, image]); // Adiciona a imagem ao estado
        await new Promise((resolve) => setTimeout(resolve, 200)); // Aguardar 1 segundo antes de carregar a próxima
      }
    };

    loadImages();
  }, []);

  const [verify, setVerify] = useState<IQ>({ "q1": false, "q2": false, "q3": false, "q4": false } as IQ)

  const [rating1, setRating1] = useState<number>(0);
  const [rating2, setRating2] = useState<number>(0);
  const [rating3, setRating3] = useState<number>(0);

  const handleRatingChange1 = (newRating: number) => {
    setButton((butt) => (butt + 1))
    console.log(button);
    setVerify((v) => { return { "q1": true, "q2": v.q2, "q3": v.q3, "q4": v.q4 } })
  };

  const handleRatingChange2 = (newRating: number) => {
    setButton((butt) => (butt + 1))
    console.log(button);
    setVerify((v) => { return { "q1": v.q1, "q2": true, "q3": v.q3, "q4": v.q4 } })
  };

  const handleRatingChange3 = (newRating: number) => {
    setButton((butt) => (butt + 1))
    console.log(button);
    console.log(verify);

    setVerify((v) => { return { "q1": v.q1, "q2": v.q2, "q3": true, "q4": v.q4 } })
  };

  const [check, setCheck] = useState<ICheck>({ "q1": undefined, "q2": undefined, "q3": undefined } as ICheck)

  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const targetValue = 288.08;
    const duration = 2000; // Duração da animação em milissegundos
    const frameRate = 60; // Frames por segundo
    const totalFrames = Math.round((duration / 1000) * frameRate);
    const increment = targetValue / totalFrames;

    let currentFrame = 0;
    const interval = setInterval(() => {
      currentFrame++;
      setCurrentValue((prev) => Math.min(prev + increment, targetValue));
      if (currentFrame >= totalFrames) {
        clearInterval(interval);
      }
    }, 1000 / frameRate);

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);
  
  return (
  <>
      <div className="absolute w-screen h-[130vh] top-0 left-0 -z-10 overflow-hidden">
        <div className="h-full w-full flex overflow-hidden justify-around">
          <div className="h-[1em] w-[2em] animate-spin-slow1 self-end bg-purple-100"></div>
          <div className="h-[1.5em] w-[2em] animate-spin-slow2 self-end bg-purple-100"></div>
          <div className="h-[0.5em] w-[1em] animate-spin-slow3 self-end bg-purple-100"></div>
          <div className="h-[1em] w-[1em] animate-spin-slow4 self-end bg-purple-100"></div>
          <div className="h-[1em] w-[2.5em] animate-spin-slow5 self-end bg-purple-100"></div>
          <div className="h-[0.5em] w-[2em] animate-spin-slow6 self-end bg-purple-100"></div>
          <div className="h-[2em] w-[2em] animate-spin-slow7 self-end bg-purple-100"></div>
          <div className="h-[1em] w-[2em] animate-spin-slow8 self-end bg-purple-100"></div>
        </div>
      </div>
    <div className="flex flex-col gap-5 h-full text-black">

      <header>
        <div className="w-screen curved-top h-24 bg-purple-600 flex flex-row justify-center">
          <div className="flex flex-row justify-around w-[1000px] mt-6 ">
            <Image src={feedfy} alt="" className="w-[120px] h-10" />

            <div className="relative font-bold flex flex-row gap-2 w-[10rem] h-[50px] border border-white rounded-full items-center justify-center text-white text-xl">
              <span className="absolute -top-3 left-5 bg-purple-600 px-2 text-sm text-white">Saldo</span>
              <span>R$</span>
              <span>{currentValue.toFixed(2).replace(".", ",")}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex flex-col items-center text-xl bg-white">

        <div className="flex flex-col items-center  h-full delay-200 transition bg-white"
          style={{ height: loadedImages.length !== 15 ? "100%" : "100vh" }}
        >
          {
            loadedImages.length !== 15 ?
              <div className="bg-white flex flex-row items-center justify-center mb-4">
                <div className="flex flex-row gap-2 items-center justify-center">
                  <FaCheckCircle className="w-[20px] text-[#820ad1]" />
                  <span className="text-xl text-purple-600 font-bold">Estabelecimento encontrado</span>
                </div>
              </div>
              :
              <div className="bg-white flex flex-row items-center justify-center mb-4">
                <div className="flex flex-row gap-2 items-center justify-center">
                  <Image src={load} alt="" className="w-[45px] h-[45px]" />
                  <span className="text-lg text-purple-600 font-bold">Carregando novo estabelecimento</span>
                </div>
              </div>
          }

          <div className="w-full h-56 flex flex-col items-center bg-white">
            {
              loadedImages.map((src, index) => {
                if (loadedImages.length <= 15) {
                  return <Image
                    src={src}
                    alt={`Imagem ${index}`}
                    key={src}
                    className="absolute h-[197px] w-[300px] border border-purple-600 rounded-xl m-0.5"
                  />
                }
                return <Image
                  src={image15}
                  alt={`Imagem ${index}`}
                  key={src}
                  className="absolute h-[197px] w-[300px] border border-purple-600 rounded-xl m-0.5"
                />
              })
            }
          </div>

          <div className="flex flex-col items-center delay-150 transition bg-white"
            style={{
              opacity: loadedImages.length === 15 ? "1": "1"
            }}
          >
            <h1 className="text-2xl font-bold text-purple-600">R$ 47,13</h1>
            <h2 className="text-3xl font-semibold text-purple-700">Nike</h2>
            <div className="flex space-x-1">
              {Array.from({ length: 4 }, (_, index) => {
                const ratingValue = index + 1;
                return (
                  <>
                    <TbStarFilled
                      key={ratingValue}
                      size="3rem"

                      style={{
                        cursor: 'pointer',
                        color: '#dc73ff',
                        width: "20px"
                      }}
                    />
                  </>
                );

              })}
              <TbStarHalfFilled
                key={5}
                size="3rem"
                style={{
                  cursor: 'pointer',
                  color: '#dc73ff',
                  width: "20px"
                }}
              />
            </div>
            <div className="flex flex-col gap-2 items-center bg-white">
              <h3 className="text-center font-bold text-xl w-[230px]">Que nota você daria ao ambiente?</h3>
              <StarRating maxRating={5} onRatingChange={handleRatingChange1} setRating={setRating1} rating={rating1} />
              <div className="flex justify-between text-sm mt-1 w-[300px] font-semibold text-gray-600">
                <span>Muito ruim</span>
                <span>Muito bom</span>
              </div>
              <h3 className="text-center font-bold text-xl">Qual foi a sua experiência com o atendimento?</h3>
              <StarRating maxRating={5} onRatingChange={handleRatingChange2} setRating={setRating2} rating={rating2} />
              <div className="flex justify-between text-sm mt-1 w-[300px] font-semibold text-gray-600">
                <span>Muito ruim</span>
                <span>Muito bom</span>
              </div>
              <h3 className="text-center font-bold text-xl w-[250px]">Como você descreveria a qualidade dos produtos?</h3>
              <StarRating maxRating={5} onRatingChange={handleRatingChange3} setRating={setRating3} rating={rating3} />
              <div className="flex justify-between text-sm mt-1 w-[300px] font-semibold text-gray-600">
                <span>Muito ruim</span>
                <span>Muito bom</span>
              </div>
              <div className="flex flex-col items-center gap-6 bg-transparent">
                <h3>O que você achou do preço?</h3>

                <div className="flex flex-row gap-3 bg-white">
                  <div style={{
                    background: check.q1 != undefined ? check.q1 ? "#9a03d7" : "#f7f7f7" : "",
                    border: check.q1 != undefined ? check.q1 ? "1px solid #9ca3af" : "1px solid #e5e5e5" : "",
                    color: check.q1 != undefined ? check.q1 ? "white" : "black" : "",
                  }}
                    className="py-3 cursor-pointer px-7 bg-gray-200 rounded-lg border-gray-300 border-2 active:text-white delay-200 transition"
                    onClick={() => (setCheck({ "q1": true, "q2": false, "q3": false }),
                      setVerify((v) => { return { "q1": v.q1, "q2": v.q2, "q3": v.q3, "q4": true } })
                    )}
                  >$</div>
                  <div style={{
                    background: check.q2 != undefined ? check.q2 ? "#9a03d7" : "#f7f7f7" : "",
                    border: check.q2 != undefined ? check.q2 ? "1px solid #9ca3af" : "1px solid #e5e5e5" : "",
                    color: check.q2 != undefined ? check.q2 ? "white" : "black" : "",
                  }}
                    className="py-3 cursor-pointer px-7 bg-gray-200 rounded-lg border-gray-300 border-2 active:text-white delay-200 transition"
                    onClick={() => (setCheck({ "q1": false, "q2": true, "q3": false }),
                      setVerify((v) => { return { "q1": v.q1, "q2": v.q2, "q3": v.q3, "q4": true } })
                    )}
                  >$$</div>
                  <div style={{
                    background: check.q3 != undefined ? check.q3 ? "#9a03d7" : "#f7f7f7" : "",
                    border: check.q3 != undefined ? check.q3 ? "1px solid #9ca3af" : "1px solid #e5e5e5" : "",
                    color: check.q3 != undefined ? check.q3 ? "white" : "black" : "",
                  }}
                    className="py-3 cursor-pointer px-7 bg-gray-200 rounded-lg border-gray-300 border-2 active:text-white delay-200 transition"
                    onClick={() => (setCheck({ "q1": false, "q2": false, "q3": true }),
                      setVerify((v) => { return { "q1": v.q1, "q2": v.q2, "q3": v.q3, "q4": true } })
                    )}
                  >$$$</div>
                </div>


                <button className="h-14 bg-gray-500 rounded-md font-bold text-2xl w-full hover:bg-red2 hover:text-white transition delay-150 hover:scale-90"
                  onClick={() => {
                    verify.q1 && verify.q2 && verify.q3 && verify.q4 ?
                      (setCount(count + 1), setVerify({ "q1": false, "q2": false, "q3": false, "q4": false }), router.push("saque")) : null

                  }}
                  style={{
                    background: verify.q1 && verify.q2 && verify.q3 && verify.q4 ? "#8e07d4" : "#c981ea",
                    color: "white",
                    // opacity: verify.q1 && verify.q2 && verify.q3 && verify.q4 ? "0.5px" : "1px"
                  }}
                // disabled={verify.q1 && verify.q2 && verify.q3 ? false : true}
                >
                  Postar Feedback
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>
      <footer className="bg-white">
        <div className="w-screen h-32 curved-bottom-footer flex flex-row items-center justify-center">
          <div className="flex flex-row items-center justify-between w-64 mt-16">
          <Image src={icon1} alt="" className="w-[70px] h-[65px]" />
            <FaPix className="w-[40px] h-[40px] text-black" />
          </div>
        </div>
      </footer>
    </div></>
  );
}