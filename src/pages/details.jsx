import { useParams } from "react-router";

import { Loading } from "../components/Loading";
import { usePokemonDetail } from '../services/pockemonapi';
import { PokemonAddCollection } from "../components/Pokemon/PokemonAddCollection";

export const Details = () => {
    const { pokeid } = useParams();
    const pokemonData = usePokemonDetail(pokeid);
    if (!pokemonData) {
        return (
            <Loading />
        )
    }
    return (
        <section className="pokemndetail py-8 px-4 sm:px-6 lg:px-8">
            <h1>{pokemonData.name} </h1>
            <section className="flex justify-center mt-4">
                <img src={pokemonData.sprites.front_default} className="mr-2" alt={`${pokemonData.name} front`} />
                <img src={pokemonData.sprites.back_default} alt={`${pokemonData.name} back`} />
            </section>
            <section>
                <p>
                    <strong>Pokemon Tipo: </strong>
                    {pokemonData.types.map((type) => type.type.name)}
                </p>
                <div>
                    <strong>Estadísticas:</strong>
                    <ul>
                        {pokemonData.stats.map((statInfo) => (
                            <li key={statInfo.stat.name}>
                                {statInfo.stat.name}: {statInfo.base_stat}
                            </li>
                        ))}
                    </ul>
                </div>
                <p>
                    <strong>Habilidades: </strong>
                    {pokemonData.abilities
                        .map((ability) => ability.ability.name)
                        .join(", ")}
                </p>
                <p >
                    <strong>Movimientos: </strong>
                    {pokemonData.moves
                        .map((move) => move.move.name)
                        .join(", ")}
                </p>
                <p>
                    <strong>Altura: </strong>
                    {pokemonData.height / 10 + " Metros"}
                </p>
                <p>
                    <strong>Peso: </strong>
                    {pokemonData.weight / 10 + " Kg"}
                </p>
                <p>
                    <strong>Experiencia Base: </strong>
                    {pokemonData.base_experience + " Exp"}
                </p>
                <p>
                    <strong>Juegos en los que aparece: </strong>
                    {pokemonData.game_indices
                        .map((game) => game.version.name)
                        .join(", ")}
                </p>
                <p>
                    <strong>Formas: </strong>
                    {pokemonData.forms
                        .map((form) => form.name)
                        .join(", ")}
                </p>

            </section>
            <section>
                <PokemonAddCollection
                    Pokecod={pokeid}
                    imgSprite={pokemonData.sprites.front_default}
                    name={pokemonData.name}
                    url=''
                />
            </section>
        </section>
    );
};
