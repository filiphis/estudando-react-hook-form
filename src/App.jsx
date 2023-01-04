import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./components/Container/styles";
import { Input } from "./components/Input";
import { Title } from "./components/Title";

import schema from "./schemaValidation";
import { useState } from "react";

function App() {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleFormSubmit(data) {
    console.log("formulário enviado!");
    console.log(data);
    setHasSubmitted(true);
  }

  return (
    <>
      <Title>Estudando React Hook Form e Yup com o curso da Codeboost</Title>
      <Container>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Input
            register={register}
            type="text"
            placeholder="Insira seu nome"
            name="name"
            error={errors.name}
          />

          <Input
            register={register}
            type="email"
            placeholder="Insira seu e-mail"
            name="email"
            error={errors.email}
          />

          <Input
            register={register}
            type="password"
            placeholder="Insira sua senha"
            name="password"
            error={errors.password}
          />

          <Input
            register={register}
            type="password"
            placeholder="Repita sua senha"
            name="passwordConfirmation"
            error={errors.passwordConfirmation}
          />

          <div>
            <button>Enviar Formulário</button>

            {hasSubmitted && <p>Formulário enviado com sucesso!</p>}
          </div>
        </form>
      </Container>
    </>
  );
}

export default App;
