import { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { IoIosCall, IoIosInformation } from "react-icons/io";

const initialSpinRecords = [
  {
    sn: 1,
    code: "#59384",
    dateTime: "2025-08-06 10:30 AM",
    result: "$100",
    status: "Completed",
  },
  {
    sn: 2,
    code: "#98423",
    dateTime: "2025-08-06 11:00 AM",
    result: "$50",
    status: "Pending",
  },
  {
    sn: 3,
    code: "#18237",
    dateTime: "2025-08-06 12:30 PM",
    result: "$20",
    status: "Pending",
  },
];

export default function AdminDashboard() {
  const [records, setRecords] = useState(initialSpinRecords);
  const [selectedMonth, setSelectedMonth] = useState("");

  const getStatusBadge = (status: string) => {
    const base =
      "px-2 py-1 rounded-full text-xs font-semibold inline-block text-white";
    if (status === "Pending") return `${base} bg-yellow-500`;
    if (status === "Completed") return `${base} bg-green-600`;
    return base;
  };

  const filteredRecords = selectedMonth
    ? records.filter((r) => r.dateTime.startsWith(selectedMonth))
    : records;

  return (
    <div className="py-4 px-2 sm:px-6 md:px-12">
      <div className="space-y-6 backdrop-blur-xl bg-white/5 rounded-xl p-4 sm:p-6">
        {/* Welcome Card */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <img
            src="/png/admin.png"
            alt="avatar"
            className="w-14 h-14 rounded-full"
          />
          <div>
            <p className="text-[22px] sm:text-[28px] font-semibold text-gray-400 leading-7">
              Welcome back Admin! - ID: 12345
            </p>
            <p className="text-sm sm:text-base mt-2 text-[#AEB9E1]">
              Analyze your player’s spin wheel reports and status.
            </p>
          </div>
        </div>

        {/* Generate Code Card */}
        <div className="backdrop-blur-xl bg-white/5 rounded-xl p-10 space-y-6">
          <div className="flex flex-col sm:flex-row justify-center sm:items-center  gap-6">
            <p className="text-[20px] sm:text-[26px] font-bold text-secondary">
              GENERATE NEW ONE TIME 5 DIGIT CODE
            </p>
            <button className="button-primary px-4 py-2 w-full sm:w-auto">
              <span className="button-content">GENERATE CODE</span>
            </button>
          </div>

          <div className="flex justify-center gap-2 flex-wrap">
            {[0, 1, 2, 3, 4].map((i) => (
              <input
                key={i}
                maxLength={1}
                type="text"
                className="w-10 h-10 sm:w-12 sm:h-12 text-center text-lg font-bold border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6d68f7] text-secondary"
                id={`pin-${i}`}
                onChange={(e) => {
                  const next = document.getElementById(`pin-${i + 1}`);
                  if (e.target.value && next) next.focus();
                }}
              />
            ))}
          </div>
        </div>

        {/* Spin Records Table */}
        <div className="backdrop-blur-xl bg-white/5 rounded-xl p-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
            <p className="text-secondary text-[24px] font-semibold">
              Recent Spin Records
            </p>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="bg-gray-800 border border-gray-600 text-white px-3 py-1 rounded-md text-sm"
            >
              <option value="">All Months</option>
              <option value="2025-08">August 2025</option>
              <option value="2025-07">July 2025</option>
              <option value="2025-06">June 2025</option>
            </select>
          </div>

          <div className="overflow-x-auto ">
            <table className="min-w-full text-sm text-left text-gray-200">
              <thead>
                <tr className="border-b border-gray-700 whitespace-nowrap">
                  <th className="px-2 py-2">S.N</th>
                  <th className="px-2 py-2">Code Used</th>
                  <th className="px-2 py-2">Date & Time</th>
                  <th className="px-2 py-2">Spin Result</th>
                  <th className="px-2 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredRecords.map((row, idx) => (
                  <tr
                    key={row.sn}
                    className="border-b border-gray-700 hover:bg-white/10 transition"
                  >
                    <td className="px-2 py-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-md text-center text-white text-sm font-semibold flex items-center justify-center">
                        {row.sn}
                      </div>
                    </td>
                    <td className="px-2 py-2">{row.code}</td>
                    <td className="px-2 py-2">{row.dateTime}</td>
                    <td className="px-2 py-2">{row.result}</td>
                    <td className="px-2 py-2">
                      <div className="flex items-center gap-2">
                        <span className={getStatusBadge(row.status)}>
                          {row.status}
                        </span>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={row.status === "Completed"}
                            onChange={() => {
                              const updated = [...records];
                              updated[idx].status =
                                row.status === "Completed"
                                  ? "Pending"
                                  : "Completed";
                              setRecords(updated);
                            }}
                          />
                          <div className="w-9 h-5 bg-gray-600 peer-checked:bg-green-500 rounded-full peer transition-all duration-300 relative">
                            <div className="absolute top-[2px] left-[2px] w-4 h-4 bg-white rounded-full shadow-md peer-checked:translate-x-4 transition-all duration-300"></div>
                          </div>
                        </label>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex justify-center">
            <button className="button-primary px-4 py-2 text-sm">
              <span className="button-content">View All</span>
            </button>
          </div>
        </div>
        <p className="text-secondary text-[18px] sm:text-[20px] font-semibold text-center mt-20">
          CONNECT WITH US
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center mt-4">
          <div className="circle-button w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
            <FaTelegramPlane size={20} className="text-black" />
          </div>
          <div className="circle-button w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
            <IoIosCall size={20} className="text-black" />
          </div>
          <div className="circle-button w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
            <IoIosInformation size={32} className="text-black" />
          </div>
        </div>

        {/* Copyright */}
        <p className="text-secondary text-[14px] sm:text-[16px] mt-4 text-center font-regular">
          © Copyright 2025, All Rights Reserved by{" "}
          <strong>Acesweeps.com</strong>
        </p>
      </div>
    </div>
  );
}
