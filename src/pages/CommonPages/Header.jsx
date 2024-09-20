import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from '../../reduxStore/slices/headerSlice';
import { toggleSubmenu } from "../../reduxStore/slices/sidebarSlice";
import { useLocation } from "react-router-dom";

const Header = () => {
  //   const dispatch = useDispatch();
  //   const opensidebar = useSelector((state) => state.header.opensidebar); // Note the `state.header` here
  //   const [toggleSubMenu , setToggleSubMenu] = useState()

  //   const handleSubmenuToggle = (index) => {
  //     dispatch(toggleSubmenu(index));
  //   };
  
  //   const handleSidebarToggle = () => {
  //     dispatch(toggleSidebar());
  //     handleSubmenuToggle(1)
  //   };

  // const openSubmenu = useSelector((state) => state.sidebar.openSubmenu);
  // const [activeLink, setActiveLink] = useState(null);
  // const location = useLocation();

 
 

  // useEffect(() => {
  //   const currentPath = location.pathname;
  //   setActiveLink(currentPath);

  //   if (openSubmenu !== null && currentPath && !currentPath.includes(activeLink)) {
  //     dispatch(toggleSubmenu(null)); 
  //   }
  // }, [location, dispatch, openSubmenu, activeLink]);
  //   useEffect(()=>{
  //     let sidebar = document.getElementById('main_body');
  //     if(opensidebar){
  //       sidebar.setAttribute("class", "mini-sidebar");
  //     } else{
  //       sidebar.removeAttribute('class')
  //     }

  //   },[opensidebar])

  const dispatch = useDispatch();
const opensidebar = useSelector((state) => state.header.opensidebar);


// const handleSidebarToggle = () => {
//   dispatch(toggleSidebar());

//   if (opensidebar) {
//     dispatch(toggleSubmenu(null)); 
//   } else {
//     const lastOpenSubmenu = localStorage.getItem('openSubmenu');
//     if (lastOpenSubmenu !== null) {
//       dispatch(toggleSubmenu(Number(lastOpenSubmenu)));
//     }
//   }
// };
const openSubmenu = useSelector((state) => state.sidebar.openSubmenu);
const openSubmenuByHeader = useSelector((state) => state.sidebar.openSubmenuByHeader)
const handleSidebarToggle = () => {
  dispatch(toggleSidebar());
console.log("open sideBAR in header",opensidebar)
console.log("open openSubmenu in header",openSubmenuByHeader)

  if (opensidebar) {
    dispatch(toggleSubmenu(openSubmenuByHeader)); 

  } else {
    console.log("else Conditionn")
    dispatch(toggleSubmenu(null));

  }
};




useEffect(() => {
  let sidebar = document.getElementById('main_body');
  if (opensidebar) {
    sidebar.setAttribute("class", "mini-sidebar");
  } else {
    sidebar.removeAttribute('class');
  }
}, [opensidebar]);


  return (
    <div 
      className={`sidebar ${opensidebar ? 'mini-sidebar' : ''}`} 
      id="header"
    >
      <div class="header">
        <div class="header-left">
          <a href="admin-dashboard.html" class="logo">
            <img src="assets/img/logo.svg" alt="Logo" />
          </a>
          <a href="admin-dashboard.html" class="logo collapse-logo">
            <img src="assets/img/collapse-logo.svg" alt="Logo" />
          </a>
          <a href="admin-dashboard.html" class="logo2">
            <img src="assets/img/logo2.png" width="40" height="40" alt="Logo" />
          </a>
        </div>

        <a id="toggle_btn" onClick={handleSidebarToggle}>
          <span class="bar-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </a>

        <div class="page-title-box">
          <h3>CIS</h3>
        </div>

        <a id="mobile_btn" class="mobile_btn" href="#sidebar">
          <i class="fa-solid fa-bars"></i>
        </a>

        <ul class="nav user-menu"> 

          <li class="nav-item dropdown">
            <a
              href="#"
              class="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
            >
              <i class="fa-regular fa-bell"></i>{" "}
              <span class="badge rounded-pill">3</span>
            </a>
            <div class="dropdown-menu notifications">
              <div class="topnav-dropdown-header">
                <span class="notification-title">Notifications</span>
                <a href="javascript:void(0)" class="clear-noti">
                  {" "}
                  Clear All{" "}
                </a>
              </div>
              <div class="noti-content">
                <ul class="notification-list">
                  <li class="notification-message">
                    <a href="activities.html">
                      <div class="chat-block d-flex">
                        <span class="avatar flex-shrink-0">
                          <img
                            src="assets/img/profiles/avatar-02.jpg"
                            alt="User Image"
                          />
                        </span>
                        <div class="media-body flex-grow-1">
                          <p class="noti-details">
                            <span class="noti-title">John Doe</span> added new
                            task{" "}
                            <span class="noti-title">
                              Patient appointment booking
                            </span>
                          </p>
                          <p class="noti-time">
                            <span class="notification-time">4 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="notification-message">
                    <a href="activities.html">
                      <div class="chat-block d-flex">
                        <span class="avatar flex-shrink-0">
                          <img
                            src="assets/img/profiles/avatar-03.jpg"
                            alt="User Image"
                          />
                        </span>
                        <div class="media-body flex-grow-1">
                          <p class="noti-details">
                            <span class="noti-title">Tarah Shropshire</span>
                            changed the task name{" "}
                            <span class="noti-title">
                              Appointment booking with payment gateway
                            </span>
                          </p>
                          <p class="noti-time">
                            <span class="notification-time">6 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="notification-message">
                    <a href="activities.html">
                      <div class="chat-block d-flex">
                        <span class="avatar flex-shrink-0">
                          <img
                            src="assets/img/profiles/avatar-06.jpg"
                            alt="User Image"
                          />
                        </span>
                        <div class="media-body flex-grow-1">
                          <p class="noti-details">
                            <span class="noti-title">Misty Tison</span>
                            added{" "}
                            <span class="noti-title">
                              Domenic Houston
                            </span> and{" "}
                            <span class="noti-title">Claire Mapes</span> to
                            project{" "}
                            <span class="noti-title">
                              Doctor available module
                            </span>
                          </p>
                          <p class="noti-time">
                            <span class="notification-time">8 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="notification-message">
                    <a href="activities.html">
                      <div class="chat-block d-flex">
                        <span class="avatar flex-shrink-0">
                          <img
                            src="assets/img/profiles/avatar-17.jpg"
                            alt="User Image"
                          />
                        </span>
                        <div class="media-body flex-grow-1">
                          <p class="noti-details">
                            <span class="noti-title">Rolland Webber</span>
                            completed task{" "}
                            <span class="noti-title">
                              Patient and Doctor video conferencing
                            </span>
                          </p>
                          <p class="noti-time">
                            <span class="notification-time">12 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="notification-message">
                    <a href="activities.html">
                      <div class="chat-block d-flex">
                        <span class="avatar flex-shrink-0">
                          <img
                            src="assets/img/profiles/avatar-13.jpg"
                            alt="User Image"
                          />
                        </span>
                        <div class="media-body flex-grow-1">
                          <p class="noti-details">
                            <span class="noti-title">Bernardo Galaviz</span>
                            added new task{" "}
                            <span class="noti-title">Private chat module</span>
                          </p>
                          <p class="noti-time">
                            <span class="notification-time">2 days ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="topnav-dropdown-footer">
                <a href="activities.html">View all Notifications</a>
              </div>
            </div>
          </li>

       

          <li class="nav-item dropdown has-arrow main-drop">
            <a
              href="#"
              class="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
            >
              <span class="user-img">
                <img src="assets/img/avatar/avatar-27.jpg" alt="User Image" />
                <span class="status online"></span>
              </span>
              <span>Admin</span>
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="profile.html">
                My Profile
              </a>
              <a class="dropdown-item" href="settings.html">
                Settings
              </a>
              <a class="dropdown-item" href="index.html">
                Logout
              </a>
            </div>
          </li>
        </ul>

        <div class="dropdown mobile-user-menu">
          <a
            href="#"
            class="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="profile.html">
              My Profile
            </a>
            <a class="dropdown-item" href="settings.html">
              Settings
            </a>
            <a class="dropdown-item" href="index.html">
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
