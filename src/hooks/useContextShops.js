import { useContext } from "react";
import { ShopContext } from "../components/ShopContextProvider/ShopContextProvider";

export function useContextShops() {
  const context = useContext(ShopContext);
  if (context === undefined) {
    throw new Error(
      "useContextShops must be used within a ShopContextProvider"
    );
  }

  return context;
}
