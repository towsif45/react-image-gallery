"use client";

import React, { FC } from "react";
import ImageGrid from "./ImageGrid";
import { IMAGE_URLS } from "./data";
import { Provider } from "react-redux";
import { store } from "../store";

const ImageGridContainer: FC = () => {
    return (
        <Provider store={store}>
            <div className="flex justify-center">
                <ImageGrid urls={IMAGE_URLS} />
            </div>
        </Provider>
    );
};

export default ImageGridContainer;
