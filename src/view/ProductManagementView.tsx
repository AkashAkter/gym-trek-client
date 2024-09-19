import CreateProductModal from "../components/ProductManageMent/CreateProductModal";
import DeleteProductModal from "../components/ProductManageMent/DeleteProductModal";
import EditProductModal from "../components/ProductManageMent/EditProductModal";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "../components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { useGetAllProductQuery } from "../redux/features/product/product.api";
import Loader from "../utils/Loader";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProductManageMentView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading } = useGetAllProductQuery({
    page: currentPage,
    searchTerm,
  });
  if (isLoading) {
    return <Loader className="!h-screen" />;
  }

  return (
    <div className="flex flex-col gap-6 p-6 container min-h-screen">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">MANAGE PRODUCTS</h1>
        <CreateProductModal />
      </div>
      <form
        className="flex w-[350px]"
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          setSearchTerm(form.search.value);
        }}
      >
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon className="h-5 text-muted-foreground w-auto" />
          </div>
          <Input
            type="search"
            name="search"
            onBlur={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Product"
            className="block w-full p-4 pl-10 text-sm text-foreground bg-background border border-input rounded-md shadow-sm focus:ring-primary focus:border-primary"
          />
        </div>
        <Button
          type="submit"
          variant="outline"
          className="ms-2 hover:bg-primaryMat hover:text-white"
        >
          Search
        </Button>
      </form>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold text-primaryTxt w-[80px] hidden md:table-cell">
                Image
              </TableHead>
              <TableHead className="font-semibold text-primaryTxt ">
                Name
              </TableHead>
              <TableHead className="font-semibold text-primaryTxt  ">
                Price
              </TableHead>
              <TableHead className="font-semibold text-primaryTxt  ">
                Category
              </TableHead>
              <TableHead className="font-semibold text-primaryTxt  ">
                Stock
              </TableHead>
              <TableHead className="font-semibold text-primaryTxt">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data.map((product) => (
              <TableRow key={product._id} className="hover:bg-primaryMat/5">
                <TableCell className="w-[80px] hidden md:table-cell">
                  <img
                    src={product.image}
                    alt={product.title}
                    width={64}
                    height={64}
                    className="rounded-md"
                  />
                </TableCell>
                <TableCell className="font-medium">
                  <Link
                    to={`/product/${product._id}`}
                    className="hover:underline"
                  >
                    {product.title}
                  </Link>
                </TableCell>
                <TableCell className="">${product.price.toFixed(2)}</TableCell>
                <TableCell className="">{product.category}</TableCell>
                <TableCell className="">{product.stock}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <EditProductModal product={product} />
                    <DeleteProductModal productId={product._id} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-start gap-[8px]">
        <Label>Page</Label>
        <Pagination className="w-fit mx-0">
          <PaginationContent>
            {Array.from({
              length: Math.ceil((data?.totalDoc || 0) / 10),
            }).map((_, i) => (
              <PaginationItem key={i + "page"}>
                <PaginationLink
                  onClick={() => setCurrentPage(i + 1)}
                  className={`${
                    currentPage === i + 1
                      ? "bg-primaryMat text-white hover:bg-primaryMat hover:text-white cursor-default"
                      : "text-primaryMat "
                  } border-[1px] border-primaryMat w-fit h-fit px-[10px] py-[3px]`}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};
export default ProductManageMentView;
