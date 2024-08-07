import { fetcher } from "@/lib/swr/fetcher";
import { ProductType } from "@/types/product.type";
import DetailProduct from "@/views/DetailProduct";
import { syncBuiltinESMExports } from "module";
import { useRouter } from "next/router";
import useSWR from "swr";

const DetailProductPage = ({ product }: { product: ProductType }) => {
  const { query } = useRouter();
  // client-side rendering
  // const { data, error, isLoading } = useSWR(`/api/product/${query.product}`, fetcher);

  return (
    <div>
      {/* client-side rendering */}
      {/* <DetailProduct product={isLoading ? {} : data.data} /> */}

      {/* server-side rendering & static-side generation */}
      <DetailProduct product={product} />
    </div>
  );
};

export default DetailProductPage;

// server-side rendering
// export async function getServerSideProps({ params }: { params: string }) {
//   // Fetch data
//   const res = await fetch(`http://localhost:3000/api/product/${params.product}`);
//   const response = await res.json();

//   return {
//     props: {
//       product: response.data,
//     },
//   };
// }

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/product");
  const response = await res.json();

  const paths = response.data.map((product: ProductType) => ({
    params: {
      product: product.id,
    },
  }));
  return { paths, fallback: false };
}

// static-side generation
export async function getStaticProps({ params }: { params: { product: string } }) {
  // Fetch data
  const res = await fetch(`http://localhost:3000/api/product/${params.product}`);
  const response = await res.json();

  return {
    props: {
      product: response.data,
    },
  };
}
