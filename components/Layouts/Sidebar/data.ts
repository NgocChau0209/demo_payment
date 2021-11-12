import { TransactionIcon } from "../../Icon/Sidebar/Transaction";
import { CardIcon } from "../../Icon/Sidebar/Card";
import { UserIcon } from "../../Icon/Sidebar/User";
import { StatisIcon } from "../../Icon/Sidebar/Statis";
import { HomeIcon } from "../../Icon/Sidebar/Home";
export let sidebarList = [
  
  {
    text: "Trang chủ",
    url: "/",
    icon: HomeIcon,
  },
  
  // {
  //   text: "Thống kê",
  //   url: "/statistical",
  //   icon: StatisIcon,
  // },
  {
    text: "Quản lí thẻ",
    url: "/cards",
    icon: CardIcon,
  },
  {
    text: "Tài khoản",
    url: "/account/profile",
    icon: UserIcon,
  },
  {
    text: "Giao dịch",
    url: "/transaction",
    icon: TransactionIcon,
  },
  
];
