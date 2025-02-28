import { Container } from "./styles";
import logo from "../../assets/pokemon-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

type input = {
  pokemonName: String;
};
export function Header() {
  const { register, handleSubmit, formState: {errors}, } = useForm<input>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<input> = (data) => {
    console.log(data.pokemonName);
    navigate("/search");
  };
  return (
    <Container>
      <h1 className="srOnly">Pokédex - Reprogama jucás</h1>
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>

      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <label htmlFor="pokemonName" className="srOnly">
            Pesquisar Pokémon
          </label>
          <input
            type="text"
            id="pokemonName"
            placeholder="Pesquisar Pokémon"
            {...register("pokemonName", {
              required: "Informe o nome do Pokémon"
            })}
          />
          <span className="inputError">{errors.pokemonName?.message}</span>
        </section>
        <button>Pesquisar</button>
      </form>
    </Container>
  );
}
