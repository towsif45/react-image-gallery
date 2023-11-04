import ImageGridContainer from "./components/ImageGridContainer";

export default function Home() {
    return (
        <div className="body">
            <div className="flex w-screen justify-center">
                <h1 className="m-5 p-3 rounded-lg text-7xl font-bold h-min text-white">
                    Gallery
                </h1>
            </div>
            <ImageGridContainer />
        </div>
    );
}
