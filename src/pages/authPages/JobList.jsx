import React from "react";

const JobList = () => {
  return (
    <div>
      <div className="main-wrapper">
        <div className="header">
          <div className="header-left">
            <a href="admin-dashboard.html" className="logo">
              <img src="assets/img/logo.svg" alt="Logo" />
            </a>
            <a href="admin-dashboard.html" className="logo collapse-logo">
              <img src="assets/img/collapse-logo.svg" alt="Logo" />
            </a>
              <img
                src="assets/img/logo2.png"
                width="40"
                height="40"
                alt="Logo"
              />
          </div>

          <div className="page-title-box float-start">
            <h3>Dreams Technologies</h3>
          </div>

          <ul className="nav user-menu">
            <li className="nav-item">
              <div className="top-nav-search">
                <a href="javascript:void(0);" className="responsive-search">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
                <form action="https://smarthr.dreamstechnologies.com/html/template/search.html">
                  <input
                    className="form-control job-view-search"
                    type="text"
                    placeholder="Search here"
                  />
                  <button className="btn" type="submit">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>
            </li>

            <li className="nav-item dropdown has-arrow flag-nav">
              <a
                className="nav-link dropdown-toggle job-view-flag"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
              >
                <img src="assets/img/flags/us.png" alt="Flag" height="20" />{" "}
                <span>English</span>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a href="javascript:void(0);" className="dropdown-item">
                  <img src="assets/img/flags/us.png" alt="Flag" height="16" />{" "}
                  English
                </a>
                <a href="javascript:void(0);" className="dropdown-item">
                  <img src="assets/img/flags/fr.png" alt="Flag" height="16" />{" "}
                  French
                </a>
                <a href="javascript:void(0);" className="dropdown-item">
                  <img src="assets/img/flags/es.png" alt="Flag" height="16" />{" "}
                  Spanish
                </a>
                <a href="javascript:void(0);" className="dropdown-item">
                  <img src="assets/img/flags/de.png" alt="Flag" height="16" />{" "}
                  German
                </a>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="index.html">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="register.html">
                Register
              </a>
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
              <a className="dropdown-item" href="index.html">
                Login
              </a>
              <a className="dropdown-item" href="register.html">
                Register
              </a>
            </div>
          </div>
        </div>

        <div className="page-wrapper job-wrapper">
          <div className="content container pb-0">
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Jobs</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="admin-dashboard.html">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">Jobs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <a className="job-list" href="job-view.html">
                  <div className="job-list-det">
                    <div className="job-list-desc">
                      <h3 className="job-list-title">Web Devloper</h3>
                      <h4 className="job-department">Development</h4>
                    </div>
                    <div className="job-type-info">
                      <span className="job-types">Full Time</span>
                    </div>
                  </div>
                  <div className="job-list-footer">
                    <ul>
                      <li>
                        <i className="fa-solid fa-signs-post"></i> California
                      </li>
                      <li>
                        <i className="fa-regular fa-money-bill-1"></i> $35000-$38000
                      </li>
                      <li>
                        <i className="fa-regular fa-clock"></i> 2 days ago
                      </li>
                    </ul>
                  </div>
                </a>
              </div>
              <div className="col-md-6">
                <a className="job-list" href="job-view.html">
                  <div className="job-list-det">
                    <div className="job-list-desc">
                      <h3 className="job-list-title">Android Devloper</h3>
                      <h4 className="job-department">App Development</h4>
                    </div>
                    <div className="job-type-info">
                      <span className="job-types">Part Time</span>
                    </div>
                  </div>
                  <div className="job-list-footer">
                    <ul>
                      <li>
                        <i className="fa-solid fa-signs-post"></i> California
                      </li>
                      <li>
                        <i className="fa-regular fa-money-bill-1"></i> $35000-$38000
                      </li>
                      <li>
                        <i className="fa-regular fa-clock"></i> 2 days ago
                      </li>
                    </ul>
                  </div>
                </a>
              </div>
              <div className="col-md-6">
                <a className="job-list" href="job-view.html">
                  <div className="job-list-det">
                    <div className="job-list-desc">
                      <h3 className="job-list-title">Web Devloper</h3>
                      <h4 className="job-department">Development</h4>
                    </div>
                    <div className="job-type-info">
                      <span className="job-types">Full Time</span>
                    </div>
                  </div>
                  <div className="job-list-footer">
                    <ul>
                      <li>
                        <i className="fa-solid fa-signs-post"></i> California
                      </li>
                      <li>
                        <i className="fa-regular fa-money-bill-1"></i> $35000-$38000
                      </li>
                      <li>
                        <i className="fa-regular fa-clock"></i> 2 days ago
                      </li>
                    </ul>
                  </div>
                </a>
              </div>
              <div className="col-md-6">
                <a className="job-list" href="job-view.html">
                  <div className="job-list-det">
                    <div className="job-list-desc">
                      <h3 className="job-list-title">Android Devloper</h3>
                      <h4 className="job-department">App Development</h4>
                    </div>
                    <div className="job-type-info">
                      <span className="job-types">Part Time</span>
                    </div>
                  </div>
                  <div className="job-list-footer">
                    <ul>
                      <li>
                        <i className="fa-solid fa-signs-post"></i> California
                      </li>
                      <li>
                        <i className="fa-regular fa-money-bill-1"></i> $35000-$38000
                      </li>
                      <li>
                        <i className="fa-regular fa-clock"></i> 2 days ago
                      </li>
                    </ul>
                  </div>
                </a>
              </div>
              <div className="col-md-6">
                <a className="job-list" href="job-view.html">
                  <div className="job-list-det">
                    <div className="job-list-desc">
                      <h3 className="job-list-title">Web Devloper</h3>
                      <h4 className="job-department">Development</h4>
                    </div>
                    <div className="job-type-info">
                      <span className="job-types">Full Time</span>
                    </div>
                  </div>
                  <div className="job-list-footer">
                    <ul>
                      <li>
                        <i className="fa-solid fa-signs-post"></i> California
                      </li>
                      <li>
                        <i className="fa-regular fa-money-bill-1"></i> $35000-$38000
                      </li>
                      <li>
                        <i className="fa-regular fa-clock"></i> 2 days ago
                      </li>
                    </ul>
                  </div>
                </a>
              </div>
              <div className="col-md-6">
                <a className="job-list" href="job-view.html">
                  <div className="job-list-det">
                    <div className="job-list-desc">
                      <h3 className="job-list-title">Android Devloper</h3>
                      <h4 className="job-department">App Development</h4>
                    </div>
                    <div className="job-type-info">
                      <span className="job-types">Part Time</span>
                    </div>
                  </div>
                  <div className="job-list-footer">
                    <ul>
                      <li>
                        <i className="fa-solid fa-signs-post"></i> California
                      </li>
                      <li>
                        <i className="fa-regular fa-money-bill-1"></i> $35000-$38000
                      </li>
                      <li>
                        <i className="fa-regular fa-clock"></i> 2 days ago
                      </li>
                    </ul>
                  </div>
                </a>
              </div>
              <div className="col-md-6">
                <a className="job-list" href="job-view.html">
                  <div className="job-list-det">
                    <div className="job-list-desc">
                      <h3 className="job-list-title">Web Devloper</h3>
                      <h4 className="job-department">Development</h4>
                    </div>
                    <div className="job-type-info">
                      <span className="job-types">Full Time</span>
                    </div>
                  </div>
                  <div className="job-list-footer">
                    <ul>
                      <li>
                        <i className="fa-solid fa-signs-post"></i> California
                      </li>
                      <li>
                        <i className="fa-regular fa-money-bill-1"></i> $35000-$38000
                      </li>
                      <li>
                        <i className="fa-regular fa-clock"></i> 2 days ago
                      </li>
                    </ul>
                  </div>
                </a>
              </div>
              <div className="col-md-6">
                <a className="job-list" href="job-view.html">
                  <div className="job-list-det">
                    <div className="job-list-desc">
                      <h3 className="job-list-title">Android Devloper</h3>
                      <h4 className="job-department">App Development</h4>
                    </div>
                    <div className="job-type-info">
                      <span className="job-types">Part Time</span>
                    </div>
                  </div>
                  <div className="job-list-footer">
                    <ul>
                      <li>
                        <i className="fa-solid fa-signs-post"></i> California
                      </li>
                      <li>
                        <i className="fa-regular fa-money-bill-1"></i> $35000-$38000
                      </li>
                      <li>
                        <i className="fa-regular fa-clock"></i> 2 days ago
                      </li>
                    </ul>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobList;
