import Image from "next/image";
import styles from "./HomepageMascot.module.css";
import { HOMEPAGE_MASCOT_DIMENSIONS } from "./homepageMascots";

type HomepageMascotProps = {
  src: string;
  alt?: string;
  className?: string;
  priority?: boolean;
  inline?: boolean;
};

export default function HomepageMascot({
  src,
  alt = "",
  className,
  priority = false,
  inline = false,
}: HomepageMascotProps) {
  const wrapperClassName = [
    styles.mascot,
    inline ? styles.inlineMascot : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClassName} aria-hidden={alt === ""}>
      <Image
        src={src}
        alt={alt}
        width={HOMEPAGE_MASCOT_DIMENSIONS.width}
        height={HOMEPAGE_MASCOT_DIMENSIONS.height}
        className={styles.image}
        priority={priority}
        unoptimized
        sizes="(max-width: 576px) 96px, (max-width: 992px) 160px, 220px"
      />
    </div>
  );
}
