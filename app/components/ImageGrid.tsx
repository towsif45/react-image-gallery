"use client";

import React, { FC, useEffect, useState } from "react";
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
import {
    SortableContext,
    arrayMove,
    rectSortingStrategy,
} from "@dnd-kit/sortable";
import SortableImage from "./SortableImage";
import DeleteButton from "./DeleteButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setZero } from "../slices/counterSlice";

type GridProps = {
    urls: ImageURL[];
};

const ImageGrid: FC<GridProps> = ({ urls }) => {
    const [data, setData] = useState<ImageURL[]>([]);
    const count = useSelector((state: RootState) => state.counter.value);
    const toDelete = useSelector((state: RootState) => state.delete.toDelete);
    const sensors = useSensors(
        useSensor(MouseSensor, {
            activationConstraint: {
                distance: 8,
            },
        }),
        useSensor(TouchSensor)
    );
    const dispatch = useDispatch();

    useEffect(() => {
        setData(urls);
    }, [urls]);

    const handleClick = () => {
        console.log("clicked");
        dispatch(setZero());

        setData(data.filter((item) => !toDelete.includes(item.key)));
        // dispatch(increment());
    };

    const handleDragEnd = (event: DragEndEvent) => {
        // console.log(event);
        const { active, over } = event;
        // console.log(active.id);
        // console.log(over?.id);
        if (over && active.id !== over.id) {
            setData((items) => {
                const oldIndex = items.map((i) => i?.id).indexOf(active.id);
                const newIndex = items.map((i) => i?.id).indexOf(over.id);
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    };

    return (
        <div className="flex flex-col mt-10 ml-20 mr-20 mb-10">
            <div className="flex mb-3 justify-center bg-slate-300 rounded-lg">
                <div className="w-1/2 my-auto items-center justify-center">
                    SELECTED: {count}
                </div>
                <div>
                    <DeleteButton handleClick={handleClick} />{" "}
                </div>
            </div>
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext
                    items={data.map((i) => i?.key)}
                    strategy={rectSortingStrategy}
                >
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
                                <div
                                    key={element.key}
                                    className="image-dropzone"
                                >
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
        </div>
    );
};

export default ImageGrid;
