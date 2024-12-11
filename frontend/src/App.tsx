import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ProductList, { ProductType } from "./components/ProductList";
import { iplTeamThemes, TeamKey } from "./data/iplTeamTheme";
import Footer from "./components/Footer";
import Spinner from "./components/ui/spinner";
import { Button } from "./components/ui/button";

import "./components/fade-in.css";

function App() {
  const navigate = useNavigate();
  const [iplTeam, setIplTeam] = useState<TeamKey | null>(null);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [username, setUsername] = useState("User");

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const token = localStorage.getItem("authToken");

    if (!token) {
      navigate("/login");
      return;
    }

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/products`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setIplTeam(res.data.iplTeam);
        setProducts(res.data.products);
        setUsername(res.data.userName.split(" ")[0]);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [navigate]);

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <>
      {iplTeam ? (
        <div
          style={iplTeamThemes[iplTeam].style.dashBoard.body}
          className={`${isVisible ? "fade-in" : ""}`}
        >
          <div
            className="flex flex-col justify-center items-center bg-blue-500 py-1"
            style={{
              clipPath:
                "polygon(0% 0%, 100% 0%, 100% 70%,60% 70%, 55% 100%, 45% 100%, 40% 70%, 0% 70%)",
              ...iplTeamThemes[iplTeam].style.dashBoard.topBar,
            }}
          >
            <div className="flex justify-between items-center w-full">
              <p
                className="text-slate-300 text-2xl font-extrabold ml-5 truncate w-80"
                style={{ fontFamily: "Mulish" }}
              >
                Welcome back {username}!
              </p>
              <img
                src={`/${iplTeam}Logo.png `}
                className="w-20 h-20 object-contain mr-[250px]"
                alt="logo"
              />
              <Button
                variant="destructive"
                className="mr-5 rounded-[5px] "
                size="sm"
                onClick={logoutHandler}
              >
                Logout
              </Button>
            </div>

            <div
              className=" h-3 w-full my-[2px]"
              style={{
                backgroundColor:
                  iplTeamThemes[iplTeam].style.dashBoard.lineColor,
              }}
            />
            <p
              className="font-normal text-3xl uppercase text-slate-100"
              style={{ fontFamily: "Oswald" }}
            >
              {iplTeam} Store
            </p>
          </div>

          <ProductList products={products} />

          <Footer />
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default App;
