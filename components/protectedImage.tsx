
"use client";

import Image, { type ImageProps } from "next/image";
import type { SyntheticEvent } from "react";

type ProtectedImageProps = Omit<
  ImageProps,
  "onContextMenu" | "onDragStart" | "onCopy" | "onCut"
>;

export default function ProtectedImage(props: ProtectedImageProps) {
  const preventAction = (event: SyntheticEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div
      className="select-none"
      onContextMenu={preventAction}
      onDragStart={preventAction}
      onCopy={preventAction}
      onCut={preventAction}
      onSelect={preventAction}
      style={{
        userSelect: "none",
        WebkitUserSelect: "none",
      }}
    >
      <Image
        {...props}
        alt={props.alt ?? ""}
        draggable={false}
        onContextMenu={preventAction}
        onDragStart={preventAction}
        onCopy={preventAction}
        className={`select-none ${props.className || ""}`}
        style={{
          ...props.style,
          userSelect: "none",
          WebkitUserSelect: "none",
        }}
      />
    </div>
  );
}
