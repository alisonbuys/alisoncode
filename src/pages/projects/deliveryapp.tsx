import { BackButton } from "~/components/BackButton";
import { CategoriesPage } from "~/components/CartoonDeliveryApp/categories";
import { DeliveryFoodPage } from "~/components/CartoonDeliveryApp/deliverpage";
import { OrderFoodPage } from "~/components/CartoonDeliveryApp/orderfoodpage";

export default function CartoonDeliveryPage() {
  return (
    <div className=" lg:flex-row mx-auto flex h-screen w-screen flex-col gap-10 bg-slate-400 p-5 md:flex-row">
      <BackButton />
      <OrderFoodPage />
      <DeliveryFoodPage />
      <CategoriesPage />
    </div>
  );
}
