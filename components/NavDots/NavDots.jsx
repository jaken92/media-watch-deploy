"use client";
import Image from "next/image";
import styles from "./NavDots.module.css";


export function NavDots({imageUrl1, imageUrl2, imageUrl3, imageUrl4}) {
  return (
    <div className={styles.imageContainer}>
      <div className={styles.back}>
        <svg
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.6172 4.99875L20.318 2.7125L7.54346 15.5L20.331 28.2875L22.6172 26.0012L12.116 15.5L22.6172 4.99875Z"
            fill="black"
          />
        </svg>
      </div>
      <Image
        src={imageUrl1}
        alt="navigation"
        width={22}
        height={22}
        placeholder="empty"
        priority={false}
      ></Image>
      <Image
        src={imageUrl2}
        alt="navigation"
        width={22}
        height={22}
        placeholder="empty"
        priority={false}
      ></Image>
      <Image
        src={imageUrl3}
        alt="navigation"
        width={22}
        height={22}
        placeholder="empty"
        priority={false}
      ></Image>
      <Image
        src={imageUrl4}
        alt="navigation"
        width={22}
        height={22}
        placeholder="empty"
        priority={false}
      ></Image>
    </div>
  );
}

///images/logos/netflix_logo.jpeg
