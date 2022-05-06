import ListPokemon from "../ListPokemon/ListPokemon";
import Loading from "../Loading/Loading";
import "./ListSection.scss";

const ListSection = ({
  activeHeader,
  gen,
  pokemon,
  loading,
  pokemonStatusCheck,
}) => {
  return (
    <section
      className={
        activeHeader === "list" ? "list-section list-active" : "list-section"
      }
    >
      <h2>{`${gen} Pokemon`}</h2>
      <div className="list-data">
        {loading ? (
          <Loading />
        ) : (
          pokemon.map((p) => {
            return (
              <ListPokemon
                key={p.id}
                id={p.id}
                name={p.name}
                img={p.img}
                favorite={p.favorite}
                pokemonStatusCheck={pokemonStatusCheck}
              />
            );
          })
        )}
      </div>
    </section>
  );
};

export default ListSection;
