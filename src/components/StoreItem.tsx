// StoreItem component
import { useShoppingCart } from "../context/ShoppingCartContext";
import formatCurrency from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export default function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-full">
      <img src={imgUrl} className="w-full h-48 object-cover mb-4" />
      <div className="flex flex-col">
        <div className="flex justify-between items-baseline mb-4">
          <span className="text-2xl">{name}</span>
          <span className="text-muted">{formatCurrency(price)}</span>
        </div>
        <div className="mt-auto">
          {quantity === 0 ? (
            <button
              onClick={() => increaseCartQuantity(id)}
              className="w-full bg-blue-500 text-white py-2 rounded-md"
            >
              + Add To Cart
            </button>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => decreaseCartQuantity(id)}
                  className="bg-blue-500 py-3 px-4 rounded-xl items-center text-center"
                >
                  -
                </button>
                <div>
                  <span className="text-3xl">{quantity}</span> in Cart
                </div>
                <button
                  onClick={() => increaseCartQuantity(id)}
                  className="bg-blue-500 py-3 px-4 rounded-xl items-center text-center"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(id)}
                className="bg-red-600 text-xl py-2 px-1 text-white rounded"
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
