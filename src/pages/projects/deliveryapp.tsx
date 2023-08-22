import { CategoriesPage } from "~/components/CartoonDeliveryApp/categories";
import { DeliveryFoodPage } from "~/components/CartoonDeliveryApp/deliverpage";
import { OrderFoodPage } from "~/components/CartoonDeliveryApp/orderfoodpage";



export default function CartoonDeliveryPage() {
  return (
    <div className=" flex flex-row gap-10 bg-slate-400 p-5">
      <OrderFoodPage/>
      <DeliveryFoodPage/>
      <CategoriesPage/>
    </div>
  );
}
