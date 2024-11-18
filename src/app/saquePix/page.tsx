"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import feedfy from "../../../public/image/feedfy/feedfyBranco.webp";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";

export default function Form1() {
  const router = useRouter();

  const [boolean, setBoolean] = useState(true); // true para CPF, false para Celular
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Função para validar o CPF
  const validateCPF = (cpf: string) => {
    cpf = cpf.replace(/[^\d]/g, ""); // Remove caracteres não numéricos
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

    let sum = 0;
    let remainder;

    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.substring(9, 10))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    return remainder === parseInt(cpf.substring(10, 11));
  };

  // Função para validar o telefone
  const validatePhone = (phone: string) => {
    const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/; // Formato: (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
    return phoneRegex.test(phone);
  };

  // Função para formatar CPF
  const formatCPF = (cpf: string) => {
    return cpf
      .replace(/\D/g, "") // Remove caracteres não numéricos
      .replace(/(\d{3})(\d)/, "$1.$2") // Adiciona o primeiro ponto
      .replace(/(\d{3})(\d)/, "$1.$2") // Adiciona o segundo ponto
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Adiciona o hífen
  };

  // Função para formatar Telefone
  const formatPhone = (phone: string) => {
    return phone
      .replace(/\D/g, "") // Remove caracteres não numéricos
      .replace(/(\d{2})(\d)/, "($1) $2") // Adiciona parênteses em volta do DDD
      .replace(/(\d{4,5})(\d{4})$/, "$1-$2"); // Adiciona o hífen no número
  };

  // Função para atualizar e validar o input
  const handleInputChange = (value: string) => {
    if (boolean) {
      const formattedCPF = formatCPF(value);
      setInputValue(formattedCPF);
    } else {
      const formattedPhone = formatPhone(value);
      setInputValue(formattedPhone);
    }
  };

  // Função para validar e enviar o formulário
  const handleValidation = () => {
    if (boolean) {
      if (!validateCPF(inputValue)) {
        setErrorMessage("CPF inválido!");
        return;
      }
    } else {
      if (!validatePhone(inputValue)) {
        setErrorMessage("Telefone inválido!");
        return;
      }
    }
    setErrorMessage("");
    router.push("/pagar");
  };

  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const targetValue = 335.21;
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
    <div className="flex flex-col gap-5 h-screen text-black bg-white">
      <header>
        <div className="w-screen curved-top h-24 bg-purple-600 flex flex-row justify-center">
          <div className="flex flex-row justify-around w-[1000px] mt-6">
            <Image src={feedfy} alt="" className="w-[120px] h-10" />
            <div className="relative font-bold flex flex-row gap-2 w-[10rem] h-[50px] border border-white rounded-full items-center justify-center text-white text-xl">
              <span className="absolute -top-3 left-5 bg-purple-600 px-2 text-sm text-white">Saldo</span>
              <span>R$</span>
              <span>{currentValue.toFixed(2).replace(".", ",")}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex flex-col items-center text-xl h-full  bg-white">
        <h2 className="text-center text-purple-600 font-bold text-2xl mb-4">ATENÇÃO</h2>
        <div className="bg-white p-4 rounded-xl shadow-lg border border-purple-200 w-[340px]">
          <div className="">
            <p className="text-purple-800 text-2xl font-bold leading-6">Seu saldo:</p>
            <p className="text-purple-800 font-bold text-4xl mb-4">R$ {currentValue.toFixed(2).replace(".", ",")}</p>
          </div>
          <p className="text-gray-500 text-[15px] mb-4 leading-4">Escolha o tipo da sua chave Pix para realizar o saque:</p>
          <div className="flex justify-center gap-4 mb-4">
            <button
              className={`text-white font-semibold py-4 px-14 rounded-lg ${boolean ? "bg-purple-600" : "bg-purple-400"
                }`}
              onClick={() => setBoolean(true)}
            >
              <FaRegAddressCard className="w-6 h-6" />
              <span className="text-sm">CPF</span>
            </button>
            <button
              className={`text-white font-semibold py-4 px-12 rounded-lg flex flex-col justify-center items-center gap-2  ${!boolean ? "bg-purple-600" : "bg-purple-400"
                }`}
              onClick={() => setBoolean(false)}
            >
              <MdOutlinePhoneIphone className="w-6 h-6" />
              <span className="text-sm">Celular</span>
            </button>
          </div>
          <div className="flex flex-col items-center p-4 rounded-xl shadow-lg border border-purple-200">
            <input
              type="text"
              placeholder={boolean ? "Digite seu CPF" : "Digite seu Celular"}
              value={inputValue}
              onChange={(e) => handleInputChange(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
            />
            {errorMessage && <p className="text-red-600 text-sm mt-2">{errorMessage}</p>}
            <button
              className="w-full bg-purple-700 text-white py-2 mt-4 rounded-lg hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
              onClick={handleValidation}
            >
              Realizar Saque
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
