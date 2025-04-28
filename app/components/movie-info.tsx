import { API_URL } from "../(home)/page";
import styles from "../styles/movie-info.module.css";

async function getMovie(id: string) {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
    const movie = await getMovie(id);
    console.log(movie.production_companies);
    return (
        <div className={styles.container}>
            <img
                src={movie.poster_path}
                className={styles.poster}
                alt={movie.title}
            />
            <div className={styles.info}>
                <h1 className={styles.title}>{movie.title}</h1>
                <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
                <p>{movie.overview}</p>
                <a href={movie.homepage} target={"_blank"}>
                    Homepage &rarr;
                </a>
                <div className={styles.images}>
                    {movie.production_companies.map(
                        (company) =>
                            company.logo_path &&
                            !company.logo_path.endsWith("null") && (
                                <img
                                    className={styles.image}
                                    key={company.id}
                                    src={company.logo_path}
                                    alt={company.name}
                                />
                            )
                    )}
                </div>
            </div>
        </div>
    );
}
