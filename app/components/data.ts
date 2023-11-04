import { UniqueIdentifier } from "@dnd-kit/core";

export type ImageURL = {
    name: string;
    key: string;
    id: UniqueIdentifier;
};

export const IMAGE_URLS: ImageURL[] = [
    { name: "image-1.webp", key: "00", id: "00" },
    { name: "image-2.webp", key: "01", id: "01" },
    { name: "image-3.webp", key: "02", id: "02" },
    { name: "image-4.webp", key: "03", id: "03"},
    { name: "image-5.webp", key: "04", id: "04" },
    { name: "image-6.webp", key: "05", id: "05" },
    { name: "image-7.webp", key: "06", id: "06" },
    { name: "image-8.webp", key: "07", id: "07" },
    { name: "image-9.webp", key: "08", id: "08" },
    { name: "image-10.jpeg", key: "09", id: "09" },
    { name: "image-11.jpeg", key: "10", id: "10" },
];
