import { RoutePath } from "../../routes/RoutePath";

const SidebarArray = () => {
  return [
    {
      title: "Dashboard",
      path: RoutePath.DASHBOARD.path,
      subOptions: null,
      icon: "fa-solid fa-gauge-simple-high fa-rotate-270",
    },
    {
      title: "Order",
      path: RoutePath.ORDER.path,
      icon: "fa fa-shopping-cart",
    },
    {
      title: "Tracking",
      path: RoutePath.TRACKING.path,
      icon: "fa fa-truck",
    },
    {
      title: "RateCalculator",
      path: RoutePath.RATECALCULATOR.path,
      icon: "fa fa-calculator",
    },
    {
      title: "Shipping Rule",
      path: RoutePath.SHIPPINGRULE.path,
      icon: "fa fa-gavel",
    },
    {
      title: "Billing",
      path: RoutePath.BILLING.path,
      icon: "fa fa-truck",
    },
    {
      title: "KYC",
      path: RoutePath.KYC.path,
      icon: "fa fa-address-card",
    },
  ];
};

export default SidebarArray;
