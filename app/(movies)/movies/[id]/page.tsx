import { API_URL } from "../../../(home)/page";

async function getMovie(id: string) {
    console.log(`Fetching movides: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

async function getVideos(id: string) {
    console.log(`Fetching movides: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

export default async function MovieDetail({ params: { id } }: { params: { id: string } }) {
    console.log(`start fetching`);
    const movie = await getMovie(id);
    const videos = await getVideos(id);
    return <h1>{movie.title}</h1>;
}