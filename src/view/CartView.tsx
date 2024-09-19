import { DialogDescription } from "@radix-ui/react-dialog";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../redux/features/cart/cart.slice";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { trimText } from "../utils/trimText";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import TrashIcon from "../icons/TrashIcon";
import { Separator } from "../components/ui/separator";

const CartView = () => {
  const { items, total } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleRemoveFromCart = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const handleCheckout = () => {
    if (items.length) {
      navigate("/checkout");
    }
  };

  return (
    <section className="w-full py-12 min-h-screen container">
      <div className="grid gap-6 md:gap-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="grid gap-1">
            <h1 className="text-2xl font-bold tracking-tight">Shopping Cart</h1>
          </div>
        </div>
        <div className="grid gap-6">
          <Card>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-primaryTxt w-[80px] hidden md:table-cell">
                      Image
                    </TableHead>
                    <TableHead className="text-primaryTxt">Product</TableHead>
                    <TableHead className="text-primaryTxt">Quantity</TableHead>
                    <TableHead className="text-primaryTxt">Price</TableHead>
                    <TableHead className="text-primaryTxt">Total</TableHead>
                    <TableHead className="text-primaryTxt">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {items.map((item) => (
                    <TableRow key={item._id} className="hover:bg-primaryMat/5">
                      <TableCell className="hidden md:table-cell">
                        <img
                          src={item.image}
                          width="64"
                          height="64"
                          alt={item.title}
                          className="aspect-square rounded-md object-cover"
                        />
                      </TableCell>
                      <TableCell className="font-medium">
                        <Link
                          to={`/product/${item._id}`}
                          className="hover:underline"
                        >
                          {" "}
                          {trimText(item.title, 22)}
                        </Link>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center justify-start gap-[8px]">
                          <button
                            onClick={() => dispatch(decreaseQuantity(item._id))}
                            className="w-[30px] h-[30px] center border hover:bg-primaryMat hover:text-white rounded-[5px] "
                          >
                            -
                          </button>
                          <span className=" p-[8px] rounded-[5px]">
                            {item.quantity}
                          </span>
                          <button
                            className="w-[30px] h-[30px] center border hover:bg-primaryMat hover:text-white rounded-[5px] "
                            onClick={() =>
                              dispatch(increaseQuantity({ id: item._id }))
                            }
                          >
                            +
                          </button>
                        </div>
                      </TableCell>
                      <TableCell>${item.price.toFixed(2)}</TableCell>
                      <TableCell>
                        ${(item.price * item.quantity).toFixed(2)}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="icon"
                              className="hover:bg-primaryMat hover:text-white"
                            >
                              <TrashIcon className="h-4 w-4" />
                              <span className="sr-only">Remove</span>
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                              <DialogTitle>Confirm Action</DialogTitle>
                              <DialogDescription>
                                Are you sure you want to proceed with this
                                action? This cannot be undone.
                              </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                              <DialogClose asChild>
                                <Button type="button" variant="outline">
                                  Cancel
                                </Button>
                              </DialogClose>
                              <Button
                                variant="destructive"
                                className="ml-auto"
                                onClick={() => handleRemoveFromCart(item._id)}
                              >
                                Confirm
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center justify-between">
                <div>Total Item</div>
                <div className="font-medium">{items.length}X</div>
              </div>
              <div className="flex items-center justify-between">
                <div>Subtotal</div>
                <div className="font-medium">${total.toFixed(2)}</div>
              </div>
              <div className="flex items-center justify-between">
                <div>Shipping Fee</div>
                <div className="font-medium">$0.00</div>
              </div>
              <Separator />
              <div className="flex items-center justify-between font-medium">
                <div>Total</div>
                <div>${total.toFixed(2)}</div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                size="lg"
                onClick={handleCheckout}
                className="w-full border bg-white text-primaryMat hover:bg-primaryMat hover:text-white"
                disabled={!items.length}
              >
                Proceed to Checkout
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default CartView;
