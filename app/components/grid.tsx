"use client";

import React, { FC, useEffect, useMemo, useState } from "react";
import { ImageURL } from "./data";
import {
    DndContext,
    DragEndEvent,
    MouseSensor,
    TouchSensor,
    closestCenter,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import SortableImage from "./SortableImage";

type GridProps = {
    urls: ImageURL[];
};

const Grid: FC<GridProps> = ({ urls }) => {
    const [data, setData] = useState<ImageURL[]>([]);
    const imageId = useMemo(() => urls.map((item) => item.key), [urls]);
    const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

    useEffect(() => {
        setData(urls);
    }, [urls]);

    const handleDragEnd = (event: DragEndEvent) => {
        console.log(event);
    };

    return (
        <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <SortableContext items={imageId} strategy={rectSortingStrategy}>
                <div className="image-grid">
                    {data.map((element, id) => {
                        if (id === 0) {
                            return (
                                <div
                                    key={element.key}
                                    className="featured-dropzone"
                                >
                                    <SortableImage
                                        filename={element.name}
                                        id={element.key}
                                    />
                                </div>
                            );
                        }
                        return (
                            <div key={element.key} className="image-dropzone">
                                <SortableImage
                                    filename={element.name}
                                    id={element.key}
                                />
                            </div>
                        );
                    })}
                </div>
            </SortableContext>
        </DndContext>
    );
};

export default Grid;
