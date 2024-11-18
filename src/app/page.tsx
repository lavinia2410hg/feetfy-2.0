"use client"

import Image from "next/image";
import feedfy from '../../public/image/feedfy/feedfy.webp';
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";



export default function Home() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    if(!email.includes("@") || !email.includes(".com")){
      
    }else{
      router.push("form1")
    }
  };

  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen w-screen bg-white">
        <div className="flex flex-col items-center justify-center h-full ">
          <Image
            src={feedfy}
            alt={""}
            className="rounded-md w-[300px] lg:w-[600px]"
          />
          <span className="text-purple-600 pb-5 lg:p-5 text-lg lg:text-2xl font-bold text-center">
            Preencha os dados abaixo corretamente
          </span>
          <form
            onSubmit={submit}
            className="border-2 border-purple-600 rounded-3xl p-8 w-full h-auto gap-4 flex flex-col"
          >
            <input
              placeholder="Digite seu e-mail"
              type="email"
              name="email"
              className="w-full h-12 rounded-md border-2 border-black pl-4 text-xl text-black"
              value={email} // Valor do input é controlado pelo estado
              onChange={(e) => setEmail(e.target.value)} // Atualiza o estado ao digitar
            />
            <button
              className="text-white bg-purple-600 rounded-full w-full h-12 text-2xl"
              type="submit"
            >
              Continuar
            </button>
          </form>
        </div>
        <footer className="bg-white">
          <div className="w-screen h-32 bg-purple-600 curved-bottom" />
        </footer>
      </main>
    </>
  );
}