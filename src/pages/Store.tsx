import storeItems from "../data/items.json";
import StoreItem from "../components/StoreItem";

function Store() {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-8">Store</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {storeItems.map((item) => (
          <div key={item.id} className="mb-6">
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Store;
