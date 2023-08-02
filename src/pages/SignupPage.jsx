import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignupPage() {
   
   const navigate = useNavigate();

   const [form, setForm] = useState({
      name: "",
      email: "",
      telefone: "",
      password: "",
   });

   // controll input
   function handleChange(e) {
      setForm({ ...form, [e.target.name]: e.target.value });
   }

   async function handleSubmit(e) {
      e.preventDefault();
      try {
         //lógica de submit do form

         await axios.post(
            "http://localhost:4000/user/signup",
            form
         );

         navigate("/login");
      } catch (error) {
         // lógico se der erro na requisição
         alert("Erro ao cadastrar usuário");
         console.log(error);
      }
   }

   console.log(form);

   return (
      <div>
         <h1>Signup Page</h1>

         <form onSubmit={handleSubmit}>
            <div>
               <label>Nome Completo</label>
               <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
               />
            </div>

            <div>
               <label>Email</label>
               <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
               />
            </div>

            <div>
               <label>Telefone</label>
               <input
                  type="tel"
                  name="telefone"
                  value={form.telefone}
                  onChange={handleChange}
                  required
               />
            </div>

            <div>
               <label>Senha</label>
               <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
               />
            </div>

            <button>CADASTRE-SE</button>
         </form>
      </div>
   );
}

export default SignupPage;
