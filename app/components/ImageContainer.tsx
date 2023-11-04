import Image from "next/image";
import React, { ChangeEvent, FC, useState } from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../slices/counterSlice";

export type ImageContainerProps = {
    filename: string;
    id: string;
};

const ImageContainer: FC<ImageContainerProps> = ({ filename, id }) => {
    const dispatch = useDispatch();
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log("meow");
        const { checked } = e.target;
        if (checked) {
            dispatch(increment());
        } else {
            dispatch(decrement());
        }
    };
    return (
        <div className="group image-container">
            <input
                id={id}
                type="checkbox"
                onChange={handleChange}
                className="checkbox peer z-10"
            />
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
