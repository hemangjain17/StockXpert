import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <Sidebar />

      {/* Mobile Menu Button */}
      <div id="mobile-menu" className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="p-2 bg-gray-900 rounded-lg text-white"
        >
          <i className={`fas ${isSidebarOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 ml-60">
      <section
          id="profile_management"
          className="p-6 space-y-6 element-highlight"
        >
          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            id="el-cg2z4vpn"
          >
            {/* Profile Overview Card */}
            <div
              className="lg:col-span-1 bg-white rounded-lg border border-neutral-300 p-6 element-highlight"
              id="el-rfhh6hea"
            >
              <div className="text-center space-y-4" id="el-ssmu59bz">
                <img
                  className="h-24 w-24 rounded-full mx-auto transition-opacity duration-300 opacity-100"
                  src="https://avatar.iran.liara.run/public"
                  alt="Profile"
                  loading="lazy"
                  id="el-amo17jis"
                />
                <div id="el-a5g7ju64">
                  <h3
                    className="text-lg font-medium text-black"
                    id="el-30dimsth"
                  >
                    Kartik Sharma
                  </h3>
                  <p className="text-neutral-500" id="el-safedpgm">
                    Insurance Agent #A-23456
                  </p>
                </div>
                <div
                  className="border-t border-neutral-300 pt-4"
                  id="el-ywuhlho4"
                >
                  <dl className="space-y-4" id="el-ktdr4eew">
                    <div id="el-378ec2rp">
                      <dt className="text-sm text-neutral-500" id="el-z9az9u6r">
                        Department
                      </dt>
                      <dd className="text-black" id="el-kbw4q4hy">
                        Claims Investigation
                      </dd>
                    </div>
                    <div id="el-ykgxehk3">
                      <dt className="text-sm text-neutral-500" id="el-5s8mndto">
                        Location
                      </dt>
                      <dd className="text-black" id="el-kvu81i6a">
                        Delhi, India
                      </dd>
                    </div>
                    <div id="el-004cboiw">
                      <dt className="text-sm text-neutral-500" id="el-jalpjl9j">
                        Cases Handled
                      </dt>
                      <dd className="text-black" id="el-zn9s32tb">
                        130
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            {/* Activity & Claims Section */}
            <div className="lg:col-span-2 space-y-6" id="el-wa1xx5sb">
              {/* Stats Cards */}
              <div
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
                id="el-kk2vaxwv"
              >
                <div
                  className="bg-white rounded-lg border border-neutral-300 p-4"
                  id="el-nkgcddz4"
                >
                  <div className="flex items-center" id="el-z8x6dp3r">
                    <div
                      className="flex-shrink-0 bg-blue-500/10 rounded-lg p-3"
                      id="el-17uwry1f"
                    >
                      <svg
                        className="h-6 w-6 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        id="el-dyulcd1c"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          id="el-sfbvr95m"
                        />
                      </svg>
                    </div>
                    <div className="ml-4" id="el-q52olwee">
                      <p className="text-sm text-neutral-500" id="el-ksulsgp0">
                        Active Claims
                      </p>
                      <p
                        className="text-2xl font-semibold text-black"
                        id="el-o20dkmks"
                      >
                        10
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="bg-white rounded-lg border border-neutral-300 p-4"
                  id="el-ukkib61s"
                >
                  <div className="flex items-center" id="el-lmzrv08a">
                    <div
                      className="flex-shrink-0 bg-red-500/10 rounded-lg p-3"
                      id="el-zajbxboa"
                    >
                      <svg
                        className="h-6 w-6 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        id="el-h752fobh"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                          id="el-4pbnmqsb"
                        />
                      </svg>
                    </div>
                    <div className="ml-4" id="el-t5dm7zor">
                      <p className="text-sm text-neutral-500" id="el-i2te047a">
                        Flagged Cases
                      </p>
                      <p
                        className="text-2xl font-semibold text-black"
                        id="el-28y7z7g8"
                      >
                        40
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="bg-white rounded-lg border border-neutral-300 p-4"
                  id="el-0pzrawxp"
                >
                  <div className="flex items-center" id="el-s9v57158">
                    <div
                      className="flex-shrink-0 bg-green-500/10 rounded-lg p-3"
                      id="el-gf25ihce"
                    >
                      <svg
                        className="h-6 w-6 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        id="el-0hj1kktu"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                          id="el-be9oj5h9"
                        />
                      </svg>
                    </div>
                    <div className="ml-4" id="el-e5oag5pi">
                      <p className="text-sm text-neutral-500" id="el-3rvqnqad">
                        Completed
                      </p>
                      <p
                        className="text-2xl font-semibold text-black"
                        id="el-isy743az"
                      >
                        30
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div
                className="bg-white rounded-lg border border-neutral-300 p-6"
                id="el-bydogfyf"
              >
                <h3
                  className="text-lg font-medium text-black mb-4"
                  id="el-hc6uqbll"
                >
                  Recent Activity
                </h3>
                <div className="space-y-4" id="el-h1615hug">
                  <div className="flex items-start" id="el-atsxncnp">
                    <span
                      className="flex-shrink-0 bg-blue-500/10 rounded-lg p-2"
                      id="el-8zfos6w6"
                    >
                      <svg
                        className="h-5 w-5 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        id="el-5apvg2wa"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          id="el-htouge2h"
                        />
                      </svg>
                    </span>
                    <div className="ml-4" id="el-q89x1tup">
                      <p className="text-black" id="el-gnnsharz">
                        New claim assigned
                      </p>
                      <p className="text-sm text-neutral-500" id="el-yru63dmb">
                        Claim #45678 - Auto Insurance
                      </p>
                      <p className="text-xs text-neutral-400" id="el-m5a67z5f">
                        2 hours ago
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start" id="el-998a5l2k">
                    <span
                      className="flex-shrink-0 bg-yellow-500/10 rounded-lg p-2"
                      id="el-p62tbr0p"
                    >
                      <svg
                        className="h-5 w-5 text-yellow-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        id="el-jg3a8kj8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          id="el-b2ip7wdc"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          id="el-3l6feagw"
                        />
                      </svg>
                    </span>
                    <div className="ml-4" id="el-r8xv6q6d">
                      <p className="text-black" id="el-p0mzyzn7">
                        Case review completed
                      </p>
                      <p className="text-sm text-neutral-500" id="el-jk7er534">
                        Claim #45623 - Property Insurance
                      </p>
                      <p className="text-xs text-neutral-400" id="el-9ehz35w7">
                        5 hours ago
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start" id="el-w68ro7ui">
                    <span
                      className="flex-shrink-0 bg-green-500/10 rounded-lg p-2"
                      id="el-z09v93d8"
                    >
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        id="el-56wxgnyl"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                          id="el-bt2vgoyn"
                        />
                      </svg>
                    </span>
                    <div className="ml-4" id="el-gp38fj2d">
                      <p className="text-black" id="el-631rln6c">
                        Claim approved
                      </p>
                      <p className="text-sm text-neutral-500" id="el-f86vjml0">
                        Claim #45589 - Health Insurance
                      </p>
                      <p className="text-xs text-neutral-400" id="el-iyoj1nty">
                        Yesterday
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="claims_dashboard" className="p-6 space-y-6">
          {/* Claims Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm">Total Claims</p>
                  <p className="text-2xl font-semibold text-gray-900 mt-1">
                    130
                  </p>
                </div>
                <div className="bg-blue-100 rounded-lg p-2">
                  <svg
                    className="h-6 w-6 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-green-500 text-sm mt-2">
                ↑ 12% from last month
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm">Under Review</p>
                  <p className="text-2xl font-semibold text-gray-900 mt-1">
                    10
                  </p>
                </div>
                <div className="bg-yellow-100 rounded-lg p-2">
                  <svg
                    className="h-6 w-6 text-yellow-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-yellow-500 text-sm mt-2">
                32 require attention
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm">Flagged Claims</p>
                  <p className="text-2xl font-semibold text-gray-900 mt-1">
                    7
                  </p>
                </div>
                <div className="bg-red-100 rounded-lg p-2">
                  <svg
                    className="h-6 w-6 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-red-500 text-sm mt-2">↑ 8 new flags today</p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm">Resolved</p>
                  <p className="text-2xl font-semibold text-gray-900 mt-1">
                    60
                  </p>
                </div>
                <div className="bg-green-100 rounded-lg p-2">
                  <svg
                    className="h-6 w-6 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-green-500 text-sm mt-2">
                ↑ 15% resolution rate
              </p>
            </div>
          </div>

          {/* Claims Table */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium text-gray-900">
                  Recent Claims
                </h2>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors">
                    Filter
                  </button>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    View All
                  </button>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Claim ID
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Claimant
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Risk Score
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-4 text-sm text-gray-900">
                      #CL-45678
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center">
                        <img
                          className="h-8 w-8 rounded-full opacity-100"
                          src="https://avatar.iran.liara.run/public"
                          alt="Claimant"
                        />
                        <div className="ml-3">
                          <p className="text-sm text-gray-900">Manoj Gupta</p>
                          <p className="text-xs text-gray-500">ID: 89223</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-900">
                      Auto Insurance
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-900">$12,450</td>
                    <td className="px-4 py-4">
                      <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-500">
                        Under Review
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center">
                        <span className="text-red-500 text-sm">High</span>
                        <div className="ml-2 w-16 bg-gray-200 rounded-full h-1.5">
                          <div
                            className="bg-red-500 h-1.5 rounded-full"
                            style={{ width: "85%" }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm">
                      <button className="text-blue-500 hover:text-blue-400">
                        View Details
                      </button>
                    </td>
                  </tr>
                  {/* Additional rows with similar structure but different data */}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  Showing 1-10 of 1,284 claims
                </p>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-200">
                    Previous
                  </button>
                  <button className="px-3 py-1 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-200">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
