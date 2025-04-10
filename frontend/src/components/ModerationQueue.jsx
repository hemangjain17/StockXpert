import React from "react";
import Sidebar from "./Sidebar";
const ModerationQueue = () => {
  const recommendations = [
    { label: "Buy", percentage: 75, color: "bg-green-500" },
    { label: "Hold", percentage: 20, color: "bg-yellow-500" },
    { label: "Sell", percentage: 5, color: "bg-red-500" },
  ];
  return (
    <>
    
    <Sidebar /> 
    <section
  id="profile_management"
  className="p-6 ml-60 space-y-6 element-highlight"
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
            Manoj Gupta
          </h3>
          <p className="text-neutral-500" id="el-safedpgm">
          USER ID: 89223
          </p>
        </div>
        <div
          className="border-t border-neutral-300 pt-4"
          id="el-ywuhlho4"
        >
          <dl className="space-y-4" id="el-ktdr4eew">
            <div id="el-378ec2rp">
              <dt className="text-sm text-neutral-500" id="el-z9az9u6r">
                Phone Number 
              </dt>
              <dd className="text-black" id="el-kbw4q4hy">
                9858563652
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
            
          </dl>
        </div>
      </div>
    </div>

    {/* Activity & Stats Section */}
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
                Active Sessions
              </p>
              <p
                className="text-2xl font-semibold text-black"
                id="el-o20dkmks"
              >
                3
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
                Notifications
              </p>
              <p
                className="text-2xl font-semibold text-black"
                id="el-28y7z7g8"
              >
                8
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
                Total Policies
              </p>
              <p
                className="text-2xl font-semibold text-black"
                id="el-isy743az"
              >
                5
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
                Profile updated
              </p>
              <p className="text-xs text-neutral-400" id="el-m5a67z5f">
                2 hours ago
              </p>
            </div>
          </div>
          <div className="flex items-start" id="el-atsxncnp">
            <span
              className="flex-shrink-0 bg-blue-500/10 rounded-lg p-2"
              id="el-8zfos6w6"
            >
              <svg
                className="h-5 w-5 text-red-500"
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
                Policy Renewed 
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
                Purchased Premium Plan
              </p>
              <p className="text-xs text-neutral-400" id="el-9ehz35w7">
                Yesterday
              </p>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  </div>
</section>

    
    <section className="p-6 ml-60">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Queue Area */}
        <div className="lg:col-span-8">
          <div className="bg-white border rounded-lg p-6 mb-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold">Health Insurance</h3>
              <div className="flex gap-2">
                <button className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-50">
                  Filter
                </button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    Export
                  </button>
              </div>
            </div>

            {/* Queue Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: "Pending", value: 45, color: "orange-500", icon: "fas fa-clock" },
                { label: "In Progress", value: 23, color: "blue-500", icon: "fas fa-spinner" },
                { label: "Completed", value: 167, color: "green-500", icon: "fas fa-check" },
                { label: "Escalated", value: 12, color: "red-500", icon: "fas fa-exclamation-triangle" },
              ].map((stat, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{stat.label}</span>
                    <span className={`text-${stat.color}`}>
                      <i className={stat.icon}></i>
                    </span>
                  </div>
                  <p className="text-2xl font-bold mt-2">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Queue Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    {["Document", "Format", "Submitted", "Assigned To", "Status", "View Doc"].map((header, index) => (
                      <th key={index} className="text-left py-3 px-4">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      content: "Aadhar Card",
                      type: "PDF",
                      priority: "High",
                      priorityColor: "red",
                      assignedTo: "Hitesh Mehta",
                      avatar: "https://avatar.iran.liara.run/public/3",
                      status: "In Progress",
                      statusColor: "blue",
                    },
                    {
                      content: "Prescription & Reports",
                      type: "PDF",
                      priority: "Medium",
                      priorityColor: "yellow",
                      assignedTo: "Kartik Sharma",
                      avatar: "https://avatar.iran.liara.run/public/4",
                      status: "In Progress",
                      statusColor: "blue",
                    },
                    {
                      content: "Bills",
                      type: "PDF",
                      priority: "Medium",
                      priorityColor: "yellow",
                      assignedTo: "Kartik Sharma",
                      avatar: "https://avatar.iran.liara.run/public/4",
                      status: "In Progress",
                      statusColor: "blue",
                    },
                  ].map((item, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <i className="fas fa-newspaper text-gray-400 mr-2"></i>
                          <span className="text-sm">{item.content}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">{item.type}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-2 py-1 bg-${item.priorityColor}-100 text-${item.priorityColor}-800 rounded-full text-xs`}
                        >
                          {item.priority}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <img src={item.avatar} alt="Moderator" className="w-6 h-6 rounded-full mr-2" />
                          <span className="text-sm">{item.assignedTo}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-2 py-1 bg-${item.statusColor}-100 text-${item.statusColor}-800 rounded-full text-xs`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <button className="text-primary-600 hover:text-primary-800">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Side Panel */}
        <div className="lg:col-span-4 space-y-6">
          {/* Moderator Status */}
          <div className="bg-white border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Active Policies</h3>
            {[
              {
                name: "SBI Life – eShield Next",
                progress: 5,
              },
              {
                name: "HDFC Life Click 2 Protect Plus",
                progress: 3,
              },
              
              {
                name: "Max Life Online Term Plan Plus",
                progress: 3,
              },
              
              
              {
                name: "Star Health Assure",
                progress: 3,
              },
            ].map((mod, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="ml-3 ">
                    <p className="text-sm p-2 font-medium">{mod.name}</p>
                  </div>
                </div>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>
            ))}
          </div>

          {/* Queue Analytics */}
          <div className="bg-white border border-gray-200 rounded-lg p-4">
      <h3 className="font-heading font-semibold mb-4">Analyst Recommendations</h3>
      <div className="space-y-4">
        {recommendations.map((rec, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="w-24">
              <p className="text-sm text-gray-600">{rec.label}</p>
            </div>
            <div className="flex-1 h-2 bg-gray-200 rounded-full">
              <div
                className={`h-2 ${rec.color} rounded-full`}
                style={{ width: `${rec.percentage}%` }}
              ></div>
            </div>
            <div className="w-12 text-right">
              <p className="text-sm font-medium">{rec.percentage}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ModerationQueue;
