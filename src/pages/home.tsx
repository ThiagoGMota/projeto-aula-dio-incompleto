
import { useState } from 'react';
import Card from '../Card';
import { login } from '../components/alert';

const Home = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
      };
    return (
        <Card>
            <div className="flex flex-col bg-black bg-opacity-60 rounded-xl text-white border-2 border-gray-400 md:w-full">
          <section className="p-5 flex flex-col">
            <h1 className="text-2xl">MB</h1>
          </section>
          <section className="boas_vindas px-5">
            <h1 className="font-extrabold">Welcome back</h1>
            <p className="text-gray-200">Please Enter your Account details.</p>
          </section>
          <main className="px-5">
            <form className="flex flex-col mb-5">
              <label htmlFor="email" className="text-gray-200 mt-3">
                Email
              </label>
              <input
                type="email"
                className="h-10 bg-transparent border-b-2 text-center mb-3"
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="senha" className="text-gray-200">
                Senha
              </label>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-10 bg-transparent border-b-2 text-center"
              />
              <div className="flex text-xs cursor-pointer justify-between mb-5">
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="bg-transparent  cursor-pointer text-left mt-2"
                >
                  {showPassword ? "Ocultar senha" : "Mostrar senha"}
                </button>
                <button className="mt-2">Esqueci minha senha</button>
              </div>
              <button
                type="submit"
                className="p-2 bg-red-400 rounded-3xl text-black hover:bg-red-500"
                onClick={() => login(email)}
              >
                Entrar
              </button>
            </form>
            <p className="mb-5">
              Não tem cadastro?{" "}
              <button className="text-blue-400"> Clique Aqui</button>
            </p>
          </main>
        </div>
        </Card>
    );
};

export default Home;