import * as S from "./styles";

export function Input({ type, placeholder, register, name, error }) {
  // const color = error ? "blue" : "transparent";
  const hasError = error && "true";
  return (
    <S.Wrapper hasError={hasError}>
      <input {...register(`${name}`)} type={type} placeholder={placeholder} />
      <span>{error?.message}</span>
    </S.Wrapper>
  );
}
