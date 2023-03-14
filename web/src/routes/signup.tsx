import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AppContext } from "../contexts/AppContext";

type FormData = {
  name: string;
  email: string;
};

function SignUp() {
  const { setUser } = useContext(AppContext);
  const { register, handleSubmit } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    const { name, email } = data;
    if (email === "") return;

    try {
      const response = await axios.post(`http://localhost:3333/register`, {
        name,
        email,
      });

      if (response.data) setUser(response.data);

      navigate("/");
    } catch (err: any) {
      if (err.response.data === "USER ALREADY REGISTERED") {
        console.log("Usuário já cadastrado");
      } else {
        console.log("Erro ao cadastrar usuário");
      }
    }
  });

  return (
    <div className="w-full h-screen flex flex-col bg-zinc-800 px-4">
      <h1 className="mt-4 mb-8 text-white">Cadastrar usuário</h1>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col">
          <div className="relative">
            <input
              className="w-full h-8 rounded px-2 py-1 pr-10 focus:outline-0"
              placeholder="Digite seu nome"
              {...register("name")}
            />
            <input
              className="w-full h-8 rounded px-2 py-1 pr-10 focus:outline-0 mt-5"
              placeholder="Digite seu e-mail"
              {...register("email")}
            />
          </div>
          <button
            type="submit"
            className="bg-violet-500 text-white rounded-lg py-2 px-3 self-center my-10"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
