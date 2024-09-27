import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../reduxStore/slices/headerSlice";
import { toggleSubmenu } from "../../reduxStore/slices/sidebarSlice";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const opensidebar = useSelector((state) => state.header.opensidebar);
  const [adminDropDown, setAdminDropDown] = useState(false);
  const [notificationDropDown, setNotificationDropDown] = useState(false);

  const openSubmenu = useSelector((state) => state.sidebar.openSubmenu);
  const openSubmenuByHeader = useSelector(
    (state) => state.sidebar.openSubmenuByHeader
  );
  const handleSidebarToggle = () => {
    dispatch(toggleSidebar());
    console.log("open sideBAR in header", opensidebar);
    console.log("open openSubmenu in header", openSubmenuByHeader);

    if (opensidebar) {
      dispatch(toggleSubmenu(openSubmenuByHeader));
    } else {
      console.log("else Conditionn");
      dispatch(toggleSubmenu(null));
    }
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.setItem("isLogin", false);
    navigate("/login");
    window.location.reload();

  };

  useEffect(() => {
    let sidebar = document.getElementById("main_body");
    if (opensidebar) {
      sidebar.setAttribute("class", "mini-sidebar");
    } else {
      sidebar.removeAttribute("class");
    }
  }, [opensidebar]);

  return (
    <div className={`sidebar ${opensidebar ? "mini-sidebar" : ""}`} id="header">
      <div className="header">
        <div className="header-left">
          <a href="admin-dashboard.html" className="logo">
            <img src="assets/img/logo.svg" alt="Logo" />
          </a>
          <a href="admin-dashboard.html" className="logo collapse-logo">
            <img src="assets/img/collapse-logo.svg" alt="Logo" />
          </a>
          <a href="admin-dashboard.html" className="logo2">
            <img src="assets/img/logo2.png" width="40" height="40" alt="Logo" />
          </a>
        </div>

        <a id="toggle_btn" onClick={handleSidebarToggle}>
          <span className="bar-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </a>

        <div className="page-title-box">
          <h3>CIS</h3>
        </div>

        <a id="mobile_btn" className="mobile_btn" href="#sidebar">
          <i className="fa-solid fa-bars"></i>
        </a>

        <ul className="nav user-menu">
          <li className="nav-item dropdown">
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
              onClick={() => setNotificationDropDown(!notificationDropDown)}
            >
              <i className="fa-regular fa-bell"></i>{" "}
              <span className="badge rounded-pill">3</span>
            </a>
            {notificationDropDown && (
              <div
                className="dropdown-menu notifications show"
                style={{
                  position: "absolute",
                  inset: "0px 0px auto auto",
                  margin: "0px",
                  transform: "translate(-5px, 42px)",
                }}
              >
                <div className="topnav-dropdown-header">
                  <span className="notification-title">Notifications</span>
                  <a href="javascript:void(0)" className="clear-noti">
                    {" "}
                    Clear All{" "}
                  </a>
                </div>
                <div className="noti-content">
                  <ul className="notification-list">
                    <li className="notification-message">
                      <a href="activities.html">
                        <div className="chat-block d-flex">
                          <span className="avatar flex-shrink-0">
                            <img
                              src="assets/img/profiles/avatar-02.jpg"
                              alt="User Image"
                            />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details">
                              <span className="noti-title">John Doe</span> added new
                              task{" "}
                              <span className="noti-title">
                                Patient appointment booking
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">4 mins ago</span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="activities.html">
                        <div className="chat-block d-flex">
                          <span className="avatar flex-shrink-0">
                            <img
                              src="assets/img/profiles/avatar-03.jpg"
                              alt="User Image"
                            />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details">
                              <span className="noti-title">Tarah Shropshire</span>
                              changed the task name{" "}
                              <span className="noti-title">
                                Appointment booking with payment gateway
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">6 mins ago</span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="activities.html">
                        <div className="chat-block d-flex">
                          <span className="avatar flex-shrink-0">
                            <img
                              src="assets/img/profiles/avatar-06.jpg"
                              alt="User Image"
                            />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details">
                              <span className="noti-title">Misty Tison</span>
                              added{" "}
                              <span className="noti-title">
                                Domenic Houston
                              </span>{" "}
                              and <span className="noti-title">Claire Mapes</span>{" "}
                              to project{" "}
                              <span className="noti-title">
                                Doctor available module
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">8 mins ago</span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="activities.html">
                        <div className="chat-block d-flex">
                          <span className="avatar flex-shrink-0">
                            <img
                              src="assets/img/profiles/avatar-17.jpg"
                              alt="User Image"
                            />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details">
                              <span className="noti-title">Rolland Webber</span>
                              completed task{" "}
                              <span className="noti-title">
                                Patient and Doctor video conferencing
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">12 mins ago</span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="activities.html">
                        <div className="chat-block d-flex">
                          <span className="avatar flex-shrink-0">
                            <img
                              src="assets/img/profiles/avatar-13.jpg"
                              alt="User Image"
                            />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details">
                              <span className="noti-title">Bernardo Galaviz</span>
                              added new task{" "}
                              <span className="noti-title">
                                Private chat module
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">2 days ago</span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="topnav-dropdown-footer">
                  <a href="activities.html">View all Notifications</a>
                </div>
              </div>
            )}
          </li>

          <li className="nav-item dropdown has-arrow main-drop">
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
              onClick={() => setAdminDropDown(!adminDropDown)}
            >
              <span className="user-img">
                <img src="assets/img/avatar/avatar-27.jpg" alt="User Image" />
                <span className="status online"></span>
              </span>
              <span>Admin</span>
            </a>
            {adminDropDown && (
              <div className="dropdown-menu show">
                <a className="dropdown-item" href="profile.html">
                  My Profile
                </a>
                <a className="dropdown-item" href="settings.html">
                  Settings
                </a>
                <a className="dropdown-item" to="/login" onClick={handleLogout}>
                  Logout
                </a>
              </div>
            )}
          </li>
        </ul>

        <div className="dropdown mobile-user-menu">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="profile.html">
              My Profile
            </a>
            <a className="dropdown-item" href="settings.html">
              Settings
            </a>
            <Link className="dropdown-item" href="index.html">
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
