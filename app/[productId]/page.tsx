import { getProduct } from "@/services";
import Image from "next/image";
import styles from "../page.module.css";

const ProductPage = async ({ params }: { params: any }) => {
  const { title, description, price, thumbnail, rating, brand } =
    await getProduct(params.productId);
  return (
    <main className={styles.main}>
      <div className={styles.productPageWrapper}>
        <div>
          <Image src={thumbnail} width={300} height={500} alt="product-img" />
        </div>
        <div>
          <span>{brand}</span>
          <p>
            <span>Title: </span>
            {title}
          </p>
          <p>
            <span>Description: </span>
            {description}
          </p>
          <p>
            <span>Price:</span> {price}$
          </p>
          <p>
            <span>Rating: </span>
            {rating}
          </p>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
