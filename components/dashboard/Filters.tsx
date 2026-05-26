"use client";

import React, { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  status: string;
  setStatus: (value: string) => void;
  dateRange: [Date | null, Date | null];
  setDateRange: (range: [Date | null, Date | null]) => void;
}

export default function Filters({
  status,
  setStatus,
  dateRange,
  setDateRange,
}: Props) {
  const [startDate, endDate] = dateRange;

  const CustomDateInput = forwardRef(({ value, onClick }: any, ref: any) => (
    <button
      type="button"
      className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600 font-medium flex items-center justify-between gap-3 shadow-sm min-w-[160px] outline-none hover:border-gray-300 transition-colors cursor-pointer"
      onClick={onClick}
      ref={ref}
    >
      <span>{value || "Date Range"}</span>
      <span className="text-xs text-gray-400">▼</span>
    </button>
  ));

  CustomDateInput.displayName = "CustomDateInput";

  return (
    <div className="flex flex-row gap-4 mb-8">
      
      {/* Date Range Picker */}
      <div>
        <DatePicker
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          onChange={(update: [Date | null, Date | null]) => setDateRange(update)}
          isClearable={true}
          customInput={<CustomDateInput />}
          dateFormat="d MMM, yyyy"
        />
      </div>

      {/* Status Filter */}
      <div className="relative min-w-[130px]">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="appearance-none bg-white border border-gray-200 rounded-xl pl-4 pr-10 py-3 text-sm text-gray-600 font-medium shadow-sm outline-none hover:border-gray-300 transition-colors w-full cursor-pointer"
        >
          <option value="">Status</option>
          <option value="COMPLETED">COMPLETED</option>
          <option value="INCOMPLETE">INCOMPLETE</option>
          <option value="MISSING">MISSING</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-xs text-gray-400">
          ▼
        </div>
      </div>

    </div>
  );
}