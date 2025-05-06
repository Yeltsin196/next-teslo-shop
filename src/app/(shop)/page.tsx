export const revalidate = 60; // 60 segundos
import { redirect } from "next/navigation";
import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  // 1) Espera a que Next.js resuelva searchParams
  const { page = "1" } = await searchParams;
  const pageNum = parseInt(page, 10);

  const { products, totalPages } = await getPaginatedProductsWithImages({
    page: pageNum,
  });

  if (products.length === 0) {
    redirect("/");
  }

  return (
    <>
      <Title title="Tienda" subtitle="Todos los productos" className="mb-2" />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </>
  );
}
