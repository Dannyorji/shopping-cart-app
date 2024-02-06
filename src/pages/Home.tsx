import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div className=" text-4xl items-center w-full">
      <h1>Hi, Please Kindly CLick on the Store Button</h1>
      <div className="mt-8 "></div>
      <p></p>
      <button
        onClick={() => navigate("/store")}
        className="bg-red-500 px-4 py-3 rounded-full items-center mx-auto ml-10"
      >
        STORE
      </button>
    </div>
  );
}

export default Home;
