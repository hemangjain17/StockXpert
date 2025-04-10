import React from "react";
import Sidebar from "./Sidebar";
const UserProfile = () => {
  return (
    <>
      <Sidebar />
      <section className="p-6 ml-60">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              {[
                "ID",
                "Content",
                "Type",
                "Priority",
                "Assigned To",
                "Status",
                "Action",
              ].map((header, index) => (
                <th key={index} className="text-left py-3 px-4">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              {
                id: "#5123",
                content: "Political News Article",
                type: "Article",
                priority: "High",
                priorityColor: "red",
                assignedTo: "Alex Morgan",
                avatar: "https://avatar.iran.liara.run/public/3",
                status: "In Progress",
                statusColor: "blue",
              },
              {
                id: "#5122",
                content: "Viral Social Media Post",
                type: "Image",
                priority: "Medium",
                priorityColor: "yellow",
                assignedTo: "Sarah Chen",
                avatar: "https://avatar.iran.liara.run/public/4",
                status: "Pending",
                statusColor: "orange",
              },
            ].map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{item.id}</td>
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
                    <img
                      src={item.avatar}
                      alt="Moderator"
                      className="w-6 h-6 rounded-full mr-2"
                    />
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
                  <button className="text-primary-600 hover:text-primary-800">
                    Review
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div class="bg-neutral-800 rounded-lg border border-neutral-700/30" id="el-x9jrz2rh">
        <div class="p-4 border-b border-neutral-700/30 element-highlight" id="el-llcxg1i9">
            <div class="flex justify-between items-center" id="el-o8q0niu5">
                <h2 class="text-lg font-medium text-white" id="el-bx9mjqiq">Flagged Claims Analysis</h2>
                <div class="flex space-x-2" id="el-131ua4si">
                    <button class="px-4 py-2 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 transition-colors" id="el-qn9hyw2d">
                        Filter
                    </button>
                    <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" id="el-wdx9qiu2">
                        Export Report
                    </button>
                </div>
            </div>
        </div>
        
        <div class="p-4 space-y-4" id="el-vahfinug">
            <div class="bg-neutral-900 rounded-lg border border-neutral-700/30 p-4" id="el-pg4bttrl">
                <div class="flex justify-between items-start" id="el-m9ckcfpe">
                    <div id="el-9u0ld2c1">
                        <div class="flex items-center" id="el-387pfm84">
                            <span class="px-2 py-1 text-xs rounded-full bg-red-500/10 text-red-500" id="el-p91qygz0">High Risk</span>
                            <span class="ml-2 text-sm text-neutral-400" id="el-ilxpovoy">Claim #45678</span>
                        </div>
                        <h3 class="text-white mt-2" id="el-9r08kdbe">Unusual Pattern in Auto Insurance Claim</h3>
                        <p class="text-sm text-neutral-400 mt-1" id="el-oqrkqt2d">Multiple similar claims filed within short timeframe</p>
                    </div>
                    <div class="text-right" id="el-px37l5ql">
                        <span class="text-2xl font-semibold text-white" id="el-43y8vf9w">92.4%</span>
                        <p class="text-sm text-neutral-400" id="el-kzwhrfi4">Fraud Probability</p>
                    </div>
                </div>
                <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4" id="el-d3uyapmq">
                    <div id="el-arjary54">
                        <p class="text-sm text-neutral-400" id="el-1onnhg13">Reconstruction Error</p>
                        <p class="text-lg font-medium text-white" id="el-2wz8bd68">0.856</p>
                    </div>
                    <div id="el-sb32lcrw">
                        <p class="text-sm text-neutral-400" id="el-dazm96kq">Pattern Match</p>
                        <p class="text-lg font-medium text-white" id="el-f76kffpq">87.2%</p>
                    </div>
                    <div id="el-sa55n8hr">
                        <p class="text-sm text-neutral-400" id="el-ju6o6ch4">Anomaly Score</p>
                        <p class="text-lg font-medium text-white" id="el-1zu62d3v">0.924</p>
                    </div>
                </div>
            </div>
            <div class="bg-neutral-900 rounded-lg border border-neutral-700/30 p-4" id="el-5276uogd">
                <div class="flex justify-between items-start" id="el-4axnighh">
                    <div id="el-lzucdv1d">
                        <div class="flex items-center" id="el-exat62zi">
                            <span class="px-2 py-1 text-xs rounded-full bg-yellow-500/10 text-yellow-500" id="el-l75hhxqn">Medium Risk</span>
                            <span class="ml-2 text-sm text-neutral-400" id="el-gzv1hfj3">Claim #45679</span>
                        </div>
                        <h3 class="text-white mt-2" id="el-2t3d63hu">Suspicious Documentation Patterns</h3>
                        <p class="text-sm text-neutral-400 mt-1" id="el-396bdipv">Inconsistent information across submitted documents</p>
                    </div>
                    <div class="text-right" id="el-gm2pb9vi">
                        <span class="text-2xl font-semibold text-white" id="el-5a1pg8tv">76.5%</span>
                        <p class="text-sm text-neutral-400" id="el-mlh5o6j6">Fraud Probability</p>
                    </div>
                </div>
                <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4" id="el-57897diu">
                    <div id="el-rv7h2hfi">
                        <p class="text-sm text-neutral-400" id="el-jsod84xl">Reconstruction Error</p>
                        <p class="text-lg font-medium text-white" id="el-gstxqwxg">0.654</p>
                    </div>
                    <div id="el-fsq58dhf">
                        <p class="text-sm text-neutral-400" id="el-qzpi497z">Pattern Match</p>
                        <p class="text-lg font-medium text-white" id="el-p6ko9gku">72.8%</p>
                    </div>
                    <div id="el-v65jg48s">
                        <p class="text-sm text-neutral-400" id="el-mjkf93ha">Anomaly Score</p>
                        <p class="text-lg font-medium text-white" id="el-fjlbl4vo">0.765</p>
                    </div>
                </div>
            </div>
        </div>

        
    </div>
      </section>
    </>
  );
};

export default UserProfile;
