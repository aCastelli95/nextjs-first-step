
const getPokemons = async(limit = 20, offset= 0) => {
    const data = await fetch("")
    .then(res => res.json())
    return data;
}

export default function PokemonsPage() {
  return (
    <div>
      <h1>Hello PokemonsPage</h1>
    </div>
  );
}