import { notFound } from 'next/navigation';
import React from 'react'
import { initialData } from "@/seed/seed";
import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
interface Props {
  params: {
    id: Category;
  };
}
const seedProducts = initialData.products;

const page = ({ params }: Props) => {
  const { id } = params;
  const products = seedProducts.filter((product) => product.gender === id);

  const labels: Record<Category, string> = {
    men: "para hombres",
    women: "para mujeres",
    kid: "para niños",
    unisex: "para todos",
  };

  /* if (id === "kids") {
    notFound();
  } */

  return (
    <>
      <Title
        title={`Artículos de ${labels[id]}`}
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid products={products} />
    </>
  );
};

export default page