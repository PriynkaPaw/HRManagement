import React from 'react'
import Cards from '../dashboardCommonCards/Cards'

const Admin_dashboard = () => {
  return (
    <div><div className="page-wrapper">

    <div className="content container-fluid pb-0">
    
    <div className="page-header">
    <div className="row">
    <div className="col-sm-12">
    <h3 className="page-title">Welcome Admin!</h3>
    <ul className="breadcrumb">
    <li className="breadcrumb-item active">Dashboard</li>
    </ul>
    </div>
    </div>
    </div>
    
    <div className="row">
    <Cards 
    icon_name="fa-cubes"
  number="112"
  name="Projects"
    />
    <Cards 
    icon_name="fa-dollar-sign"
  number="44"
  name="Clients"
    />
    <Cards 
    icon_name="fa-gem"
  number="37"
  name="Tasks"
    />
  <Cards 
    icon_name="fa-user"
  number="234"
  name="Employees"
    />
    </div>
    
    <div className="row">
    <div className="col-md-12">
    <div className="row">
    <div className="col-md-6 text-center">
    <div className="card">
    <div className="card-body">
    <h3 className="card-title">Total Revenue</h3>
    <div id="bar-charts"></div>
    </div>
    </div>
    </div>
    <div className="col-md-6 text-center">
    <div className="card">
    <div className="card-body">
    <h3 className="card-title">Sales Overview</h3>
    <div id="line-charts"></div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div className="row">
    <div className="col-md-12">
    <div className="card-group m-b-30">
    <div className="card">
    <div className="card-body">
    <div className="d-flex justify-content-between mb-3">
    <div>
    <span className="d-block">New Employees</span>
    </div>
    <div>
    <span className="text-success">+10%</span>
    </div>
    </div>
    <h3 className="mb-3">10</h3>
    <div className="progress height-five mb-2">
    <div className="progress-bar bg-primary w-70" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <p className="mb-0">Overall Employees 218</p>
    </div>
    </div>
    <div className="card">
    <div className="card-body">
    <div className="d-flex justify-content-between mb-3">
    <div>
    <span className="d-block">Earnings</span>
    </div>
    <div>
    <span className="text-success">+12.5%</span>
    </div>
    </div>
    <h3 className="mb-3">$1,42,300</h3>
    <div className="progress height-five mb-2">
    <div className="progress-bar bg-primary w-70" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <p className="mb-0">Previous Month <span className="text-muted">$1,15,852</span></p>
    </div>
    </div>
    <div className="card">
    <div className="card-body">
    <div className="d-flex justify-content-between mb-3">
    <div>
    <span className="d-block">Expenses</span>
    </div>
    <div>
    <span className="text-danger">-2.8%</span>
    </div>
    </div>
    <h3 className="mb-3">$8,500</h3>
    <div className="progress height-five mb-2">
    <div className="progress-bar bg-primary w-70" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <p className="mb-0">Previous Month <span className="text-muted">$7,500</span></p>
    </div>
    </div>
    <div className="card">
    <div className="card-body">
    <div className="d-flex justify-content-between mb-3">
    <div>
    <span className="d-block">Profit</span>
    </div>
    <div>
    <span className="text-danger">-75%</span>
    </div>
    </div>
    <h3 className="mb-3">$1,12,000</h3>
    <div className="progress height-five mb-2">
    <div className="progress-bar bg-primary w-70" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <p className="mb-0">Previous Month <span className="text-muted">$1,42,000</span></p>
    </div>
    </div>
    </div>
    </div>
    </div>
    
    <div className="row">
    <div className="col-md-12 col-lg-12 col-xl-4 d-flex">
    <div className="card flex-fill dash-statistics">
    <div className="card-body">
    <h5 className="card-title">Statistics</h5>
    <div className="stats-list">
    <div className="stats-info">
    <p>Today Leave <strong>4 <small>/ 65</small></strong></p>
    <div className="progress">
    <div className="progress-bar bg-primary w-31" role="progressbar" aria-valuenow="31" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    </div>
    <div className="stats-info">
    <p>Pending Invoice <strong>15 <small>/ 92</small></strong></p>
    <div className="progress">
    <div className="progress-bar bg-warning w-31" role="progressbar" aria-valuenow="31" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    </div>
    <div className="stats-info">
    <p>Completed Projects <strong>85 <small>/ 112</small></strong></p>
    <div className="progress">
    <div className="progress-bar bg-success w-62" role="progressbar" aria-valuenow="62" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    </div>
    <div className="stats-info">
    <p>Open Tickets <strong>190 <small>/ 212</small></strong></p>
    <div className="progress">
    <div className="progress-bar bg-danger w-62" role="progressbar" aria-valuenow="62" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    </div>
    <div className="stats-info">
    <p>Closed Tickets <strong>22 <small>/ 212</small></strong></p>
    <div className="progress">
    <div className="progress-bar bg-info w-22" role="progressbar" aria-valuenow="22" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div className="col-md-12 col-lg-6 col-xl-4 d-flex">
    <div className="card flex-fill">
    <div className="card-body">
    <h4 className="card-title">Task Statistics</h4>
    <div className="statistics">
    <div className="row">
    <div className="col-md-6 col-6 text-center">
    <div className="stats-box mb-4">
    <p>Total Tasks</p>
    <h3>385</h3>
    </div>
    </div>
    <div className="col-md-6 col-6 text-center">
    <div className="stats-box mb-4">
    <p>Overdue Tasks</p>
    <h3>19</h3>
    </div>
    </div>
    </div>
    </div>
    <div className="progress mb-4">
    <div className="progress-bar bg-purple w-30" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">30%</div>
    <div className="progress-bar bg-warning w-22" role="progressbar" aria-valuenow="18" aria-valuemin="0" aria-valuemax="100">22%</div>
    <div className="progress-bar bg-success w-24" role="progressbar" aria-valuenow="12" aria-valuemin="0" aria-valuemax="100">24%</div>
    <div className="progress-bar bg-danger w-21" role="progressbar" aria-valuenow="14" aria-valuemin="0" aria-valuemax="100">21%</div>
    <div className="progress-bar bg-info w-10" role="progressbar" aria-valuenow="14" aria-valuemin="0" aria-valuemax="100">10%</div>
    </div>
    <div>
    <p><i className="fa-regular fa-circle-dot text-purple me-2"></i>Completed Tasks <span className="float-end">166</span></p>
    <p><i className="fa-regular fa-circle-dot text-warning me-2"></i>Inprogress Tasks <span className="float-end">115</span></p>
    <p><i className="fa-regular fa-circle-dot text-success me-2"></i>On Hold Tasks <span className="float-end">31</span></p>
    <p><i className="fa-regular fa-circle-dot text-danger me-2"></i>Pending Tasks <span className="float-end">47</span></p>
    <p className="mb-0"><i className="fa-regular fa-circle-dot text-info me-2"></i>Review Tasks <span className="float-end">5</span></p>
    </div>
    </div>
    </div>
    </div>
    <div className="col-md-12 col-lg-6 col-xl-4 d-flex">
    <div className="card flex-fill">
    <div className="card-body">
    <h4 className="card-title">Today Absent <span className="badge bg-inverse-danger ms-2">5</span></h4>
    <div className="leave-info-box">
    <div className="media d-flex align-items-center">
    <a href="profile.html" className="avatar"><img src="assets/img/user.jpg" alt="User Image"/></a>
    <div className="media-body flex-grow-1">
    <div className="text-sm my-0">Martin Lewis</div>
    </div>
    </div>
    <div className="row align-items-center mt-3">
    <div className="col-6">
    <h6 className="mb-0">4 Sep 2019</h6>
    <span className="text-sm text-muted">Leave Date</span>
    </div>
    <div className="col-6 text-end">
    <span className="badge bg-inverse-danger">Pending</span>
    </div>
    </div>
    </div>
    <div className="leave-info-box">
    <div className="media d-flex align-items-center">
    <a href="profile.html" className="avatar"><img src="assets/img/user.jpg" alt="User Image"/></a>
    <div className="media-body flex-grow-1">
    <div className="text-sm my-0">Martin Lewis</div>
    </div>
    </div>
    <div className="row align-items-center mt-3">
    <div className="col-6">
    <h6 className="mb-0">4 Sep 2019</h6>
    <span className="text-sm text-muted">Leave Date</span>
    </div>
    <div className="col-6 text-end">
    <span className="badge bg-inverse-success">Approved</span>
    </div>
    </div>
    </div>
    <div className="load-more text-center">
    <a className="text-dark" href="javascript:void(0);">Load More</a>
    </div>
    </div>
    </div>
    </div>
    </div>
    
    <div className="row">
    <div className="col-md-6 d-flex">
    <div className="card card-table flex-fill">
    <div className="card-header">
    <h3 className="card-title mb-0">Invoices</h3>
    </div>
    <div className="card-body">
    <div className="table-responsive">
    <table className="table table-nowrap custom-table mb-0">
    <thead>
    <tr>
    <th>Invoice ID</th>
    <th>Client</th>
    <th>Due Date</th>
    <th>Total</th>
    <th>Status</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td><a href="invoice-view.html">#INV-0001</a></td>
    <td>
    <h2><a href="#">Global Technologies</a></h2>
    </td>
    <td>11 Mar 2019</td>
    <td>$380</td>
    <td>
    <span className="badge bg-inverse-warning">Partially Paid</span>
    </td>
    </tr>
    <tr>
    <td><a href="invoice-view.html">#INV-0002</a></td>
    <td>
    <h2><a href="#">Delta Infotech</a></h2>
    </td>
    <td>8 Feb 2019</td>
    <td>$500</td>
    <td>
    <span className="badge bg-inverse-success">Paid</span>
    </td>
    </tr>
    <tr>
    <td><a href="invoice-view.html">#INV-0003</a></td>
    <td>
    <h2><a href="#">Cream Inc</a></h2>
    </td>
    <td>23 Jan 2019</td>
    <td>$60</td>
    <td>
    <span className="badge bg-inverse-danger">Unpaid</span>
    </td>
    </tr>
    </tbody>
    </table>
    </div>
    </div>
    <div className="card-footer">
    <a href="invoices.html">View all invoices</a>
    </div>
    </div>
    </div>
    <div className="col-md-6 d-flex">
    <div className="card card-table flex-fill">
    <div className="card-header">
    <h3 className="card-title mb-0">Payments</h3>
    </div>
    <div className="card-body">
    <div className="table-responsive">
    <table className="table custom-table table-nowrap mb-0">
    <thead>
    <tr>
    <th>Invoice ID</th>
    <th>Client</th>
    <th>Payment Type</th>
    <th>Paid Date</th>
    <th>Paid Amount</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td><a href="invoice-view.html">#INV-0001</a></td>
    <td>
    <h2><a href="#">Global Technologies</a></h2>
    </td>
    <td>Paypal</td>
    <td>11 Mar 2019</td>
    <td>$380</td>
    </tr>
    <tr>
    <td><a href="invoice-view.html">#INV-0002</a></td>
    <td>
    <h2><a href="#">Delta Infotech</a></h2>
    </td>
    <td>Paypal</td>
    <td>8 Feb 2019</td>
    <td>$500</td>
    </tr>
    <tr>
    <td><a href="invoice-view.html">#INV-0003</a></td>
    <td>
    <h2><a href="#">Cream Inc</a></h2>
    </td>
    <td>Paypal</td>
    <td>23 Jan 2019</td>
    <td>$60</td>
    </tr>
    </tbody>
    </table>
    </div>
    </div>
    <div className="card-footer">
    <a href="payments.html">View all payments</a>
    </div>
    </div>
    </div>
    </div>
    <div className="row">
    <div className="col-md-6 d-flex">
    <div className="card card-table flex-fill">
    <div className="card-header">
    <h3 className="card-title mb-0">Clients</h3>
    </div>
    <div className="card-body">
    <div className="table-responsive">
    <table className="table custom-table mb-0">
    <thead>
    <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Status</th>
    <th className="text-end">Action</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>
    <h2 className="table-avatar">
    <a href="#" className="avatar"><img src="assets/img/profiles/avatar-19.jpg" alt="User Image"/></a>
    <a href="client-profile.html">Barry Cuda <span>CEO</span></a>
    </h2>
    </td>
    <td><a href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="caa8abb8b8b3a9bfaeab8aafb2aba7baa6afe4a9a5a7">[email&#160;protected]</a></td>
    <td>
    <div className="dropdown action-label">
    <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
    <i className="fa-regular fa-circle-dot text-success"></i> Active
    </a>
    <div className="dropdown-menu dropdown-menu-right">
    <a className="dropdown-item" href="#"><i className="fa-regular fa-circle-dot text-success"></i> Active</a>
    <a className="dropdown-item" href="#"><i className="fa-regular fa-circle-dot text-danger"></i> Inactive</a>
    </div>
    </div>
    </td>
    <td className="text-end">
    <div className="dropdown dropdown-action">
    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
    <div className="dropdown-menu dropdown-menu-right">
    <a className="dropdown-item" href="javascript:void(0)"><i className="fa-solid fa-pencil m-r-5"></i> Edit</a>
    <a className="dropdown-item" href="javascript:void(0)"><i className="fa-regular fa-trash-can m-r-5"></i> Delete</a>
    </div>
    </div>
    </td>
    </tr>
    <tr>
    <td>
    <h2 className="table-avatar">
    <a href="#" className="avatar"><img src="assets/img/profiles/avatar-19.jpg" alt="User Image"/></a>
    <a href="client-profile.html">Tressa Wexler <span>Manager</span></a>
    </h2>
    </td>
    <td><a href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="d5a1a7b0a6a6b4a2b0adb9b0a795b0adb4b8a5b9b0fbb6bab8">[email&#160;protected]</a></td>
    <td>
    <div className="dropdown action-label">
    <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
    <i className="fa-regular fa-circle-dot text-danger"></i> Inactive
    </a>
    <div className="dropdown-menu dropdown-menu-right">
    <a className="dropdown-item" href="#"><i className="fa-regular fa-circle-dot text-success"></i> Active</a>
    <a className="dropdown-item" href="#"><i className="fa-regular fa-circle-dot text-danger"></i> Inactive</a>
    </div>
    </div>
    </td>
    <td className="text-end">
    <div className="dropdown dropdown-action">
    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
    <div className="dropdown-menu dropdown-menu-right">
    <a className="dropdown-item" href="javascript:void(0)"><i className="fa-solid fa-pencil m-r-5"></i> Edit</a>
    <a className="dropdown-item" href="javascript:void(0)"><i className="fa-regular fa-trash-can m-r-5"></i> Delete</a>
    </div>
    </div>
    </td>
    </tr>
    <tr>
    <td>
    <h2 className="table-avatar">
    <a href="client-profile.html" className="avatar"><img src="assets/img/profiles/avatar-07.jpg" alt="User Image"/></a>
    <a href="client-profile.html">Ruby Bartlett <span>CEO</span></a>
    </h2>
    </td>
    <td><a href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="176562756e757665637b72636357726f767a677b723974787a">[email&#160;protected]</a></td>
    <td>
    <div className="dropdown action-label">
    <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
    <i className="fa-regular fa-circle-dot text-danger"></i> Inactive
    </a>
    <div className="dropdown-menu dropdown-menu-right">
    <a className="dropdown-item" href="#"><i className="fa-regular fa-circle-dot text-success"></i> Active</a>
    <a className="dropdown-item" href="#"><i className="fa-regular fa-circle-dot text-danger"></i> Inactive</a>
    </div>
    </div>
    </td>
    <td className="text-end">
    <div className="dropdown dropdown-action">
    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
    <div className="dropdown-menu dropdown-menu-right">
    <a className="dropdown-item" href="javascript:void(0)"><i className="fa-solid fa-pencil m-r-5"></i> Edit</a>
    <a className="dropdown-item" href="javascript:void(0)"><i className="fa-regular fa-trash-can m-r-5"></i> Delete</a>
    </div>
    </div>
    </td>
    </tr>
    <tr>
    <td>
    <h2 className="table-avatar">
    <a href="client-profile.html" className="avatar"><img src="assets/img/profiles/avatar-06.jpg" alt="User Image"/></a>
    <a href="client-profile.html"> Misty Tison <span>CEO</span></a>
    </h2>
    </td>
    <td><a href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="b8d5d1cbccc1ccd1cbd7d6f8ddc0d9d5c8d4dd96dbd7d5">[email&#160;protected]</a></td>
    <td>
    <div className="dropdown action-label">
    <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
    <i className="fa-regular fa-circle-dot text-success"></i> Active
    </a>
    <div className="dropdown-menu dropdown-menu-right">
    <a className="dropdown-item" href="#"><i className="fa-regular fa-circle-dot text-success"></i> Active</a>
    <a className="dropdown-item" href="#"><i className="fa-regular fa-circle-dot text-danger"></i> Inactive</a>
    </div>
    </div>
    </td>
    <td className="text-end">
    <div className="dropdown dropdown-action">
    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
    <div className="dropdown-menu dropdown-menu-right">
    <a className="dropdown-item" href="javascript:void(0)"><i className="fa-solid fa-pencil m-r-5"></i> Edit</a>
    <a className="dropdown-item" href="javascript:void(0)"><i className="fa-regular fa-trash-can m-r-5"></i> Delete</a>
    </div>
    </div>
    </td>
    </tr>
    <tr>
    <td>
    <h2 className="table-avatar">
    <a href="client-profile.html" className="avatar"><img src="assets/img/profiles/avatar-14.jpg" alt="User Image"/></a>
    <a href="client-profile.html"> Daniel Deacon <span>CEO</span></a>
    </h2>
    </td>
    <td><a href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="187c7976717d747c7d797b7776587d60797568747d367b7775">[email&#160;protected]</a></td>
    <td>
    <div className="dropdown action-label">
    <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
    <i className="fa-regular fa-circle-dot text-danger"></i> Inactive
    </a>
    <div className="dropdown-menu dropdown-menu-right">
    <a className="dropdown-item" href="#"><i className="fa-regular fa-circle-dot text-success"></i> Active</a>
    <a className="dropdown-item" href="#"><i className="fa-regular fa-circle-dot text-danger"></i> Inactive</a>
    </div>
    </div>
    </td>
    <td className="text-end">
    <div className="dropdown dropdown-action">
    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
    <div className="dropdown-menu dropdown-menu-right">
    <a className="dropdown-item" href="javascript:void(0)"><i className="fa-solid fa-pencil m-r-5"></i> Edit</a>
    <a className="dropdown-item" href="javascript:void(0)"><i className="fa-regular fa-trash-can m-r-5"></i> Delete</a>
    </div>
    </div>
    </td>
    </tr>
    </tbody>
    </table>
    </div>
    </div>
    <div className="card-footer">
    <a href="clients.html">View all clients</a>
    </div>
    </div>
    </div>
    <div className="col-md-6 d-flex">
    <div className="card card-table flex-fill">
    <div className="card-header">
    <h3 className="card-title mb-0">Recent Projects</h3>
    </div>
    <div className="card-body">
    <div className="table-responsive">
    <table className="table custom-table mb-0">
    <thead>
    <tr>
    <th>Project Name </th>
    <th>Progress</th>
    <th className="text-end">Action</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>
    <h2><a href="project-view.html">Office Management</a></h2>
    <small className="block text-ellipsis">
    <span>1</span> <span className="text-muted">open tasks, </span>
    <span>9</span> <span className="text-muted">tasks completed</span>
    </small>
    </td>
    <td>
    <div className="progress progress-xs progress-striped">
    <div className="progress-bar w-65" role="progressbar" data-bs-toggle="tooltip" title="65%"></div>
    </div>
    </td>
    <td className="text-end">
    <div className="dropdown dropdown-action">
    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
    <div className="dropdown-menu dropdown-menu-right">
    <a className="dropdown-item" href="javascript:void(0)"><i className="fa-solid fa-pencil m-r-5"></i> Edit</a>
    <a className="dropdown-item" href="javascript:void(0)"><i className="fa-regular fa-trash-can m-r-5"></i> Delete</a>
    </div>
    </div>
    </td>
    </tr>
    <tr>
    <td>
    <h2><a href="project-view.html">Project Management</a></h2>
    <small className="block text-ellipsis">
    <span>2</span> <span className="text-muted">open tasks, </span>
    <span>5</span> <span className="text-muted">tasks completed</span>
    </small>
    </td>
    <td>
    <div className="progress progress-xs progress-striped">
    <div className="progress-bar w-15" role="progressbar" data-bs-toggle="tooltip" title="15%"></div>
    </div>
    </td>
    <td className="text-end">
    <div className="dropdown dropdown-action">
    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
    <div className="dropdown-menu dropdown-menu-right">
    <a className="dropdown-item" href="javascript:void(0)"><i className="fa-solid fa-pencil m-r-5"></i> Edit</a>
    <a className="dropdown-item" href="javascript:void(0)"><i className="fa-regular fa-trash-can m-r-5"></i> Delete</a>
    </div>
    </div>
    </td>
    </tr>
    <tr>
    <td>
    <h2><a href="project-view.html">Video Calling App</a></h2>
    <small className="block text-ellipsis">
    <span>3</span> <span className="text-muted">open tasks, </span>
    <span>3</span> <span className="text-muted">tasks completed</span>
    </small>
    </td>
    <td>
    <div className="progress progress-xs progress-striped">
    <div className="progress-bar w-50" role="progressbar" data-bs-toggle="tooltip" title="50%"></div>
    </div>
    </td>
    <td className="text-end">
    <div className="dropdown dropdown-action">
    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
    <div className="dropdown-menu dropdown-menu-right">
    <a className="dropdown-item" href="javascript:void(0)"><i className="fa-solid fa-pencil m-r-5"></i> Edit</a>
    <a className="dropdown-item" href="javascript:void(0)"><i className="fa-regular fa-trash-can m-r-5"></i> Delete</a>
    </div>
    </div>
    </td>
    </tr>
    <tr>
    <td>
    <h2><a href="project-view.html">Hospital Administration</a></h2>
    <small className="block text-ellipsis">
    <span>12</span> <span className="text-muted">open tasks, </span>
    <span>4</span> <span className="text-muted">tasks completed</span>
    </small>
    </td>
    <td>
    <div className="progress progress-xs progress-striped">
    <div className="progress-bar w-88" role="progressbar" data-bs-toggle="tooltip" title="88%"></div>
    </div>
    </td>
    <td className="text-end">
    <div className="dropdown dropdown-action">
    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
    <div className="dropdown-menu dropdown-menu-right">
    <a className="dropdown-item" href="javascript:void(0)"><i className="fa-solid fa-pencil m-r-5"></i> Edit</a>
    <a className="dropdown-item" href="javascript:void(0)"><i className="fa-regular fa-trash-can m-r-5"></i> Delete</a>
    </div>
    </div>
    </td>
    </tr>
    <tr>
    <td>
    <h2><a href="project-view.html">Digital Marketplace</a></h2>
    <small className="block text-ellipsis">
    <span>7</span> <span className="text-muted">open tasks, </span>
    <span>14</span> <span className="text-muted">tasks completed</span>
    </small>
    </td>
    <td>
    <div className="progress progress-xs progress-striped">
    <div className="progress-bar w-100" role="progressbar" data-bs-toggle="tooltip" title="100%"></div>
    </div>
    </td>
    <td className="text-end">
    <div className="dropdown dropdown-action">
    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
    <div className="dropdown-menu dropdown-menu-right">
    <a className="dropdown-item" href="javascript:void(0)"><i className="fa-solid fa-pencil m-r-5"></i> Edit</a>
    <a className="dropdown-item" href="javascript:void(0)"><i className="fa-regular fa-trash-can m-r-5"></i> Delete</a>
    </div>
    </div>
    </td>
    </tr>
    </tbody>
    </table>
    </div>
    </div>
    <div className="card-footer">
    <a href="projects.html">View all projects</a>
    </div>
    </div>
    </div>
    </div>
    </div>
    
    </div></div>
  )
}

export default Admin_dashboard