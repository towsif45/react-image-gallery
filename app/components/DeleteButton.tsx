"use client";

import React, { FC } from "react";

export type DeleteButtonProps = {
    handleClick: () => void;
};

const DeleteButton: FC<DeleteButtonProps> = ({ handleClick }) => {
    return (
        <button onClick={handleClick} className="button">
            DELETE
        </button>
    );
};

export default DeleteButton;
