import * as yup from "yup";

const schema = yup
  .object({
    name: yup
      .string()
      .required("O campo nome é obrigatório")
      .min(3, "O campo nome deve ter no mínimo 3 letras."),
    email: yup
      .string()
      .required("O Campo e-mail é obrigatório")
      .email("E-mail inválido"),
    password: yup
      .string()
      .required("O campo senha é obrigatório")
      .min(6, "A senha deve ter no mínimo 6 dígitos"),
    passwordConfirmation: yup
      .string()
      .required("É necessário repetir a senha")
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
  })
  .required();

export default schema;
