import Image from "next/image";
import React, { FC } from "react";

export type ImageContainerProps = {
    filename: string;
    id: string;
};

const ImageContainer: FC<ImageContainerProps> = ({ filename, id }) => {
    return (
        <div className="group image-container">
            <input id={id} type="checkbox" className="checkbox peer z-10" />
            <Image
                src={"/images/" + filename}
                alt={filename}
                width="0"
                height="0"
                sizes="100vw"
                className="image"
            />
        </div>
    );
};

export default ImageContainer;
