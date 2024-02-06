import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import formatCurrency from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export default function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item === null) return null;
  return (
    <div className="flex items-center space-x-2">
      <img
        src={item?.imgUrl}
        className="w-32 h-20 object-cover"
        alt="Product Image"
      />
      <div className="mx-auto">
        <div>
          {item?.name}{" "}
          {quantity > 1 && (
            <span className="text-gray-500 text-[18px]">x{quantity}</span>
          )}
        </div>
        <div className="text-gray-500 text-[18px]">
          {formatCurrency(item?.price ?? 0)}
        </div>
      </div>
      <div className="flex items-center justify-end space-x-2 absolute right-0">
        <div className="mx-2 px-2">
          {formatCurrency((item?.price ?? 0) * quantity)}
        </div>
        <div>
          <button
            className="bg-blue-800 py-2 px-2 rounded-full"
            onClick={() => removeFromCart(item?.id ?? 0)}
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
}
