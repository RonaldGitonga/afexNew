
import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import { getCurrentUserInfo } from "../../../lib/actions";
import { signOutButton } from '../../../components/signOutButton/signOutButton'

import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
  MdEvent,
  MdSchool,
} from "react-icons/md";
import{FaBlogger} from 'react-icons/fa'
import { getServerSession } from "next-auth";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Courses",
        path: "/dashboard/courses",
        icon: <MdSchool />,
      },
      {
        title: "Events",
        path: "/dashboard/events/add",
        icon: <MdEvent />,
      },
      {
        title: "Blogs",
        path: "/dashboard/blogs",
        icon: <FaBlogger/>,
      },
      {
        title: "Tutors",
        path: "/dashboard/tutors",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Engagements",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = async () => {
  

 // const user  = await getCurrentUserInfo();
  //console.log (`the return is ${user}`);

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          
          src={"/noavatar.png"}
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          {/* Return User after fixing auth user.username to line 96 */}
          <span className={styles.username}>user</span>
          <span className={styles.userTitle}>user</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
    
        <signOutButton/>
  
    </div>
  );
};

export default Sidebar;
