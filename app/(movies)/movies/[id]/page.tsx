// export default async function MovieDetail({
//     params: { id },
//     searchParams: { region },
// }: {
//     params: { id: string };
//     searchParams: { region: string };
// }) {
//     return (
//         <h1>
//             Movie {await id}, region: {await region}
//         </h1>
//     );
// }

type Props = {
    params: { id: string };
    searchParams: { region: string; page: string };
};

export default async function MovieDetails({ params, searchParams }: Props) {
    const { id } = await params;
    const { region, page } = await searchParams;

    console.log(id, region, page);
    return <h1>Movie {id}</h1>;
}
