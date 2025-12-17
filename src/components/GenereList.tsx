import useGeners from "../hooks/useGeners";

function GenereList() {
    const {genres, error, loading} = useGeners();
    return (
        <>
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {genres.map((genre) => (
            <div key={genre.id}>{genre.name}</div>
        ))}
        </>
    )
}

export default GenereList;