import { CategoriesPage } from "~/components/CartoonDeliveryApp/categories";
import { DeliveryFoodPage } from "~/components/CartoonDeliveryApp/deliverpage";
import { OrderFoodPage } from "~/components/CartoonDeliveryApp/orderfoodpage";

export default function CartoonDeliveryPage() {
  return (
    <div className=" flex h-full w-screen flex-col gap-10 bg-slate-400 p-5 md:flex-row lg:flex-row">
      <OrderFoodPage />
      <DeliveryFoodPage />
      <CategoriesPage />
    </div>
  );
}
