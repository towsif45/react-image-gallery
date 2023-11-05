"use client"

import { useSortable } from "@dnd-kit/sortable";
import React, { FC } from "react";
import ImageContainer, { ImageContainerProps } from "./ImageContainer";
import { CSS } from "@dnd-kit/utilities";

const SortableImage: FC<ImageContainerProps> = (props: ImageContainerProps) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: props.id });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };
    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="touch-auto">
            <ImageContainer filename={props.filename} id={props.id} />
        </div>
    );
};

export default SortableImage;
