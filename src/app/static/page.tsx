import { UnsplashImage } from "@/models/UnsplashImage";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Alert } from "react-bootstrap";

export default async function Page() {
    axios.defaults.baseURL = "https://api.unsplash.com/"
    const fetchResponse = await fetch(`https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}`)
    const image: UnsplashImage = await fetchResponse.json()
    const width = Math.min(500, image.width);
    const height = (width / image.width) * image.height
    return (
        <div className="d-flex flex-column align-items-center">
            <Alert>
                This page <strong>fetches data statically.</strong>
                Every time you refresh the page, you will get the cached image.
            </Alert>
            <Image
                src={image.urls.raw}
                width={width}
                height={height}
                alt={image.description}
                className="rounded shadow mw-100 h 100"
            /> by <Link href={'/users/' + image.user.username}>{image.user.username}</Link>
        </div>)
}