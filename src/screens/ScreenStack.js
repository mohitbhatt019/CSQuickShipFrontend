import About from "./About"
import Contact from "./Contact"
import DashboardScreen from "./DashboardScreen"
import ForgetPassword from "./ForgetPassword"
import LoginScreen from "./authScreen/loginScreen"
import Order from "./sidebarComponents/Order"
import Services from "./Services"
import SignUpScreen from "./SignUpScreen"
import Tracking from "./sidebarComponents/Tracking"
import RateCalculator from "./sidebarComponents/RateCalculator"
import Billing from "./sidebarComponents/Billing"
import KYC from "./sidebarComponents/KYC"
import CreateOrders from "./sidebarComponents/CreateOrders"
import ProductDetails from "./sidebarComponents/ProductDetails"
import CompleteOrderDetails from "./sidebarComponents/CompleteOrderDetails"
import CarrierCharges from "./sidebarComponents/CarrierCharges"
import ShippingRule from "./sidebarComponents/ShippingRule"

const ScreenStack = {
  LoginScreen: LoginScreen,
  signUp:SignUpScreen,
  DashBoardScreen:DashboardScreen,
  ForgetPassword:ForgetPassword,
  About:About,
  Services:Services,
  Contact:Contact,
  Order:Order,
  Tracking:Tracking,
  RateCalculator:RateCalculator,
  Billing,Billing,
  KYC:KYC,
  CreateOrders:CreateOrders,
  ProductDetails:ProductDetails,
  CompleteOrderDetails:CompleteOrderDetails,
  CarrierCharges:CarrierCharges,
  ShippingRule:ShippingRule
}

export default ScreenStack
