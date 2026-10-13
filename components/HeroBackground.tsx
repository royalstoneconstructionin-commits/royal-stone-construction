import Image from "next/image";

export default function HeroBackground({ src }: { src: string }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
    >
      <Image
        src={src}
        alt=""
        fill
        priority
        sizes="100vw"
        quality={80}
        className="object-cover object-center lg:object-[center_55%]"
      />
    </div>
  );
}
