import React from "react";

const Job_list = () => {
  return (
    <div>
      <div class="main-wrapper">
        <div class="header">
          <div class="header-left">
            <a href="admin-dashboard.html" class="logo">
              <img src="assets/img/logo.svg" alt="Logo" />
            </a>
            <a href="admin-dashboard.html" class="logo collapse-logo">
              <img src="assets/img/collapse-logo.svg" alt="Logo" />
            </a>
              <img
                src="assets/img/logo2.png"
                width="40"
                height="40"
                alt="Logo"
              />
          </div>

          <div class="page-title-box float-start">
            <h3>Dreams Technologies</h3>
          </div>

          <ul class="nav user-menu">
            <li class="nav-item">
              <div class="top-nav-search">
                <a href="javascript:void(0);" class="responsive-search">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </a>
                <form action="https://smarthr.dreamstechnologies.com/html/template/search.html">
                  <input
                    class="form-control job-view-search"
                    type="text"
                    placeholder="Search here"
                  />
                  <button class="btn" type="submit">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>
            </li>

            <li class="nav-item dropdown has-arrow flag-nav">
              <a
                class="nav-link dropdown-toggle job-view-flag"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
              >
                <img src="assets/img/flags/us.png" alt="Flag" height="20" />{" "}
                <span>English</span>
              </a>
              <div class="dropdown-menu dropdown-menu-right">
                <a href="javascript:void(0);" class="dropdown-item">
                  <img src="assets/img/flags/us.png" alt="Flag" height="16" />{" "}
                  English
                </a>
                <a href="javascript:void(0);" class="dropdown-item">
                  <img src="assets/img/flags/fr.png" alt="Flag" height="16" />{" "}
                  French
                </a>
                <a href="javascript:void(0);" class="dropdown-item">
                  <img src="assets/img/flags/es.png" alt="Flag" height="16" />{" "}
                  Spanish
                </a>
                <a href="javascript:void(0);" class="dropdown-item">
                  <img src="assets/img/flags/de.png" alt="Flag" height="16" />{" "}
                  German
                </a>
              </div>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="index.html">
                Login
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="register.html">
                Register
              </a>
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
              <a class="dropdown-item" href="index.html">
                Login
              </a>
              <a class="dropdown-item" href="register.html">
                Register
              </a>
            </div>
          </div>
        </div>

        <div class="page-wrapper job-wrapper">
          <div class="content container pb-0">
            <div class="page-header">
              <div class="row">
                <div class="col-sm-12">
                  <h3 class="page-title">Jobs</h3>
                  <ul class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="admin-dashboard.html">Dashboard</a>
                    </li>
                    <li class="breadcrumb-item active">Jobs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <a class="job-list" href="job-view.html">
                  <div class="job-list-det">
                    <div class="job-list-desc">
                      <h3 class="job-list-title">Web Devloper</h3>
                      <h4 class="job-department">Development</h4>
                    </div>
                    <div class="job-type-info">
                      <span class="job-types">Full Time</span>
                    </div>
                  </div>
                  <div class="job-list-footer">
                    <ul>
                      <li>
                        <i class="fa-solid fa-signs-post"></i> California
                      </li>
                      <li>
                        <i class="fa-regular fa-money-bill-1"></i> $35000-$38000
                      </li>
                      <li>
                        <i class="fa-regular fa-clock"></i> 2 days ago
                      </li>
                    </ul>
                  </div>
                </a>
              </div>
              <div class="col-md-6">
                <a class="job-list" href="job-view.html">
                  <div class="job-list-det">
                    <div class="job-list-desc">
                      <h3 class="job-list-title">Android Devloper</h3>
                      <h4 class="job-department">App Development</h4>
                    </div>
                    <div class="job-type-info">
                      <span class="job-types">Part Time</span>
                    </div>
                  </div>
                  <div class="job-list-footer">
                    <ul>
                      <li>
                        <i class="fa-solid fa-signs-post"></i> California
                      </li>
                      <li>
                        <i class="fa-regular fa-money-bill-1"></i> $35000-$38000
                      </li>
                      <li>
                        <i class="fa-regular fa-clock"></i> 2 days ago
                      </li>
                    </ul>
                  </div>
                </a>
              </div>
              <div class="col-md-6">
                <a class="job-list" href="job-view.html">
                  <div class="job-list-det">
                    <div class="job-list-desc">
                      <h3 class="job-list-title">Web Devloper</h3>
                      <h4 class="job-department">Development</h4>
                    </div>
                    <div class="job-type-info">
                      <span class="job-types">Full Time</span>
                    </div>
                  </div>
                  <div class="job-list-footer">
                    <ul>
                      <li>
                        <i class="fa-solid fa-signs-post"></i> California
                      </li>
                      <li>
                        <i class="fa-regular fa-money-bill-1"></i> $35000-$38000
                      </li>
                      <li>
                        <i class="fa-regular fa-clock"></i> 2 days ago
                      </li>
                    </ul>
                  </div>
                </a>
              </div>
              <div class="col-md-6">
                <a class="job-list" href="job-view.html">
                  <div class="job-list-det">
                    <div class="job-list-desc">
                      <h3 class="job-list-title">Android Devloper</h3>
                      <h4 class="job-department">App Development</h4>
                    </div>
                    <div class="job-type-info">
                      <span class="job-types">Part Time</span>
                    </div>
                  </div>
                  <div class="job-list-footer">
                    <ul>
                      <li>
                        <i class="fa-solid fa-signs-post"></i> California
                      </li>
                      <li>
                        <i class="fa-regular fa-money-bill-1"></i> $35000-$38000
                      </li>
                      <li>
                        <i class="fa-regular fa-clock"></i> 2 days ago
                      </li>
                    </ul>
                  </div>
                </a>
              </div>
              <div class="col-md-6">
                <a class="job-list" href="job-view.html">
                  <div class="job-list-det">
                    <div class="job-list-desc">
                      <h3 class="job-list-title">Web Devloper</h3>
                      <h4 class="job-department">Development</h4>
                    </div>
                    <div class="job-type-info">
                      <span class="job-types">Full Time</span>
                    </div>
                  </div>
                  <div class="job-list-footer">
                    <ul>
                      <li>
                        <i class="fa-solid fa-signs-post"></i> California
                      </li>
                      <li>
                        <i class="fa-regular fa-money-bill-1"></i> $35000-$38000
                      </li>
                      <li>
                        <i class="fa-regular fa-clock"></i> 2 days ago
                      </li>
                    </ul>
                  </div>
                </a>
              </div>
              <div class="col-md-6">
                <a class="job-list" href="job-view.html">
                  <div class="job-list-det">
                    <div class="job-list-desc">
                      <h3 class="job-list-title">Android Devloper</h3>
                      <h4 class="job-department">App Development</h4>
                    </div>
                    <div class="job-type-info">
                      <span class="job-types">Part Time</span>
                    </div>
                  </div>
                  <div class="job-list-footer">
                    <ul>
                      <li>
                        <i class="fa-solid fa-signs-post"></i> California
                      </li>
                      <li>
                        <i class="fa-regular fa-money-bill-1"></i> $35000-$38000
                      </li>
                      <li>
                        <i class="fa-regular fa-clock"></i> 2 days ago
                      </li>
                    </ul>
                  </div>
                </a>
              </div>
              <div class="col-md-6">
                <a class="job-list" href="job-view.html">
                  <div class="job-list-det">
                    <div class="job-list-desc">
                      <h3 class="job-list-title">Web Devloper</h3>
                      <h4 class="job-department">Development</h4>
                    </div>
                    <div class="job-type-info">
                      <span class="job-types">Full Time</span>
                    </div>
                  </div>
                  <div class="job-list-footer">
                    <ul>
                      <li>
                        <i class="fa-solid fa-signs-post"></i> California
                      </li>
                      <li>
                        <i class="fa-regular fa-money-bill-1"></i> $35000-$38000
                      </li>
                      <li>
                        <i class="fa-regular fa-clock"></i> 2 days ago
                      </li>
                    </ul>
                  </div>
                </a>
              </div>
              <div class="col-md-6">
                <a class="job-list" href="job-view.html">
                  <div class="job-list-det">
                    <div class="job-list-desc">
                      <h3 class="job-list-title">Android Devloper</h3>
                      <h4 class="job-department">App Development</h4>
                    </div>
                    <div class="job-type-info">
                      <span class="job-types">Part Time</span>
                    </div>
                  </div>
                  <div class="job-list-footer">
                    <ul>
                      <li>
                        <i class="fa-solid fa-signs-post"></i> California
                      </li>
                      <li>
                        <i class="fa-regular fa-money-bill-1"></i> $35000-$38000
                      </li>
                      <li>
                        <i class="fa-regular fa-clock"></i> 2 days ago
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

export default Job_list;
