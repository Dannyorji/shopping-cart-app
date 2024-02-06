import { useNavigate, useLocation } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

function NavBar() {
  const { openCart, cartQuantity } = useShoppingCart();
  const navigate = useNavigate();
  const location = useLocation();
  function pathMathRoute(route: string) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50 mb-3 py-3">
      <header className="flex  justify-between items-center px-3 max-w-6xl mx-auto  ">
        <div>
          <ul className="flex space-x-5 cursor-pointer">
            <li
              className={`text-gray-400 ${
                pathMathRoute("/") && "border-b-red-500 text-gray-950"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`text-gray-400 ${
                pathMathRoute("/store") && "border-b-red-500 text-gray-950"
              }`}
              onClick={() => navigate("/store")}
            >
              Store
            </li>
            <li
              className={`text-gray-400 ${
                pathMathRoute("/about") && "border-b-red-500 text-gray-950"
              }`}
              onClick={() => navigate("/about")}
            >
              About
            </li>
          </ul>
        </div>
        <div className="flex space-x-6 border border-b-blue-500 hover:bg-blue-600 rounded-full">
          {cartQuantity > 0 && (
            <button
              onClick={openCart}
              className="bg-white rounded-full text-white py-3 px-0 relative hover:bg-blue-600 transition duration-150 ease-in-out flex-1  "
            >
              <svg
                className="h-5"
                fill="#000000"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                width="100px"
                height="100px"
                viewBox="0 0 902.86 902.86"
              >
                <g>
                  <g>
                    <path
                      d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z
			 M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"
                    />
                    <path
                      d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717
			c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744
			c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742
			C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744
			c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z
			 M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742
			S619.162,694.432,619.162,716.897z"
                    />
                  </g>
                </g>
              </svg>
              <div className="px-2 rounded-full   bg-red-500 flex flex-col absolute justify-between items-center right-0">
                {cartQuantity}
              </div>
            </button>
          )}
        </div>
      </header>
    </div>
  );
}

export default NavBar;
