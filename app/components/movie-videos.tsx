import { API_URL } from "../constant";
import styles from "../styles/movie-video.module.css";

async function getVideos(id: string) {
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideos(id);
    return (
        <div className={styles.container}>
            {videos.map((video) => (
                <iframe
                    key={video.id}
                    src={`https://youtube.com/embed/${video.key}`}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;'
                    allowFullScreen
                    title={video.name}
                />
            ))}
        </div>
    );
}
