import ListPokemon from "../ListPokemon/ListPokemon";
import "./ListSection.scss";

const ListSection = ({ activeHeader, gen }) => {
  return (
    <section
      className={
        activeHeader === "list" ? "list-section list-active" : "list-section"
      }
    >
      <h2>{`${gen} Pokemon`}</h2>
      <div className="list-data">
        <ListPokemon />
        <ListPokemon />
        <ListPokemon />
        <ListPokemon />
        <ListPokemon />
        <ListPokemon />
        <ListPokemon />
        <ListPokemon />
        <ListPokemon />
        <ListPokemon />
        <ListPokemon />
        <ListPokemon />
        <ListPokemon />
        <ListPokemon />
        <ListPokemon />
        <ListPokemon />
        <ListPokemon />
        <ListPokemon />
        <ListPokemon />
        <ListPokemon />
        <ListPokemon />
        <ListPokemon />
        <ListPokemon />
        <ListPokemon />
        <ListPokemon />
        <ListPokemon />
        <ListPokemon />
        <ListPokemon />
        <ListPokemon />
        <ListPokemon />
        <ListPokemon />
        <ListPokemon />
        <ListPokemon />
        <ListPokemon />
      </div>
    </section>
  );
};

export default ListSection;
