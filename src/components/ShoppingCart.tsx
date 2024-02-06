import { useShoppingCart } from "../context/ShoppingCartContext";
import formatCurrency from "../utilities/formatCurrency";
import CartItem from "./CartItem";
import storeItems from "../data/items.json";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();

  return (
    <div
      className={`fixed inset-0 overflow-hidden z-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          onClick={closeCart}
        ></div>

        <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
          <div className="w-screen max-w-md">
            <div className="h-full flex flex-col space-y-6 py-6 bg-white shadow-xl overflow-y-scroll">
              <div className="px-4 sm:px-6 flex justify-between items-center ">
                <h2 className="text-2xl font-medium text-gray-900">Cart</h2>
                <button
                  onClick={closeCart}
                  className="text-2xl bg-blue-700 px-4 py-2 rounded-full text-gray-700 bg-transparent hover:bg-blue-700 transition duration-200 ease-in-out "
                >
                  X
                </button>
              </div>

              <div className="relative flex-1 px-4 sm:px-6">
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <CartItem key={item.id} {...item} />
                  ))}
                </div>
                <div className="font-semibold text-2xl flex-1 absolute right-0">
                  Total{" "}
                  {formatCurrency(
                    cartItems.reduce((total, cartItem) => {
                      const item = storeItems.find((i) => i.id === cartItem.id);
                      return total + (item?.price || 0) * cartItem.quantity;
                    }, 0)
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
