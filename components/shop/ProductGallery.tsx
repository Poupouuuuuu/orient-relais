"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
    images: string[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-stone-100 border border-stone-200">
                <Image
                    src={images[selectedImage]}
                    alt="Product Image"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Badges could go here if needed passed via props */}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-2">
                {images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={cn(
                            "relative aspect-square w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all",
                            selectedImage === index
                                ? "border-primary ring-2 ring-primary/20"
                                : "border-transparent hover:border-stone-300"
                        )}
                    >
                        <Image
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
