import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";

const Card = ({
  brand,
  title,
  description,
  rating,
  price,
  thumbnail,
  id,
}: Product) => {
  return (
    <Link className={styles.card} href={`/${id}`}>
      <Image src={thumbnail} alt="product-image" width={200} height={250} />
      <div>
        <span>{brand}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <span>Rating: {rating}</span>
        <span>{price}$</span>
      </div>
    </Link>
  );
};

export default Card;
