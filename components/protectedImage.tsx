"use client";

import Image, { ImageProps } from "next/image";

type ProtectedImageProps = Omit<
  ImageProps,
  "onContextMenu" | "onDragStart"
>;

export default function ProtectedImage(props: ProtectedImageProps) {
  return (
    <div
      className="select-none"
      onContextMenu={(event) => event.preventDefault()}
      onDragStart={(event) => event.preventDefault()}
    >
      <Image
        {...props}
        alt={props.alt}
        draggable={false}
        className={`pointer-events-auto select-none ${
          props.className || ""
        }`}
      />
    </div>
  );
}