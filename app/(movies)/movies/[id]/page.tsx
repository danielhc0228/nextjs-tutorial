// type Props = {
//     params: { id: string };
//     searchParams: { region: string; page: string };
// };

import { Suspense } from "react";
import MovieInfo from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";

// export default async function MovieDetails({ params, searchParams }: Props) {
//     const { id } = await params;
//     const { region, page } = await searchParams;

//     console.log(id, region, page);
//     return <h1>Movie {id}</h1>;
// }

export default async function MovieDetail({
    params: { id },
}: {
    params: { id: string };
}) {
    return (
        <div>
            <Suspense fallback={<h1>Loading movie info...</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie videos...</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    );
}
