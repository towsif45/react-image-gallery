import DeleteButton from "./components/DeleteButton";
import Grid from "./components/ImageGrid";
import { IMAGE_URLS } from "./components/data";

export default function Home() {
    return (
        <div className="body">
            <div className="flex w-screen justify-center">
                <h1 className="m-5 p-3 rounded-lg text-7xl font-bold h-min text-white">
                    Gallery
                </h1>
            </div>
            
            <div className="flex justify-center">
                <Grid urls={IMAGE_URLS} />
            </div>
        </div>
    );
}
