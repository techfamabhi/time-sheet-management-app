"use client";

import { useEffect, useMemo, useState } from "react";

import Header from "@/components/dashboard/Header";
import Filters from "@/components/dashboard/Filters";
import TimesheetTable from "@/components/dashboard/TimesheetTable";
import Loader from "@/components/common/Loader";
import EmptyState from "@/components/common/EmptyState";
import Pagination from "@/components/common/Pagination";

export default function DashboardPage() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  
  // Date range state
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [startDate, endDate] = dateRange;

  // Sorting state
  const [sortColumn, setSortColumn] = useState<string>("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const fetchTimesheets = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/timesheets");
      const result = await response.json();
      setData(result.data);
    } catch (err) {
      setError("Failed to load timesheets");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTimesheets();
  }, []);

  // Reset pagination on filter or sort changes
  useEffect(() => {
    setCurrentPage(1);
  }, [status, dateRange, sortColumn, sortDirection, itemsPerPage]);

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      if (sortDirection === "asc") {
        setSortDirection("desc");
      } else if (sortDirection === "desc") {
        setSortColumn("");
        setSortDirection(null);
      } else {
        setSortDirection("asc");
      }
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const filteredData = useMemo(() => {
    let filtered = [...data];

    // Status Filter
    if (status) {
      filtered = filtered.filter((item) => item.status === status);
    }

    // Date Range Filter
    if (startDate && endDate) {
      filtered = filtered.filter((item) => {
        if (!item.startDate || !item.endDate) return false;
        const itemStart = new Date(item.startDate);
        const itemEnd = new Date(item.endDate);
        return itemStart >= startDate && itemEnd <= endDate;
      });
    }

    // Sorting
    if (sortColumn && sortDirection) {
      filtered.sort((a, b) => {
        let valA: any = a[sortColumn];
        let valB: any = b[sortColumn];

        if (sortColumn === "date") {
          valA = a.startDate ? new Date(a.startDate).getTime() : 0;
          valB = b.startDate ? new Date(b.startDate).getTime() : 0;
        }

        if (typeof valA === "string") {
          return sortDirection === "asc"
            ? valA.localeCompare(valB)
            : valB.localeCompare(valA);
        } else {
          return sortDirection === "asc"
            ? valA - valB
            : valB - valA;
        }
      });
    }

    return filtered;
  }, [data, status, dateRange, sortColumn, sortDirection]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <EmptyState title={error} />;
  }

  return (
    <div className="min-h-screen bg-gray-55 flex flex-col">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-8">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
          
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Your Timesheets</h1>

          <Filters
            status={status}
            setStatus={setStatus}
            dateRange={dateRange}
            setDateRange={setDateRange}
          />

          {paginatedData.length === 0 ? (
            <EmptyState title="No timesheets found" />
          ) : (
            <div className="space-y-6">
              <TimesheetTable
                data={paginatedData}
                sortColumn={sortColumn}
                sortDirection={sortDirection}
                onSort={handleSort}
              />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                itemsPerPage={itemsPerPage}
                onItemsPerPageChange={setItemsPerPage}
              />
            </div>
          )}

        </div>
      </main>

      <footer className="py-8 text-center text-xs text-gray-400 border-t border-gray-100 bg-white">
        © 2024 tentwenty. All rights reserved.
      </footer>
    </div>
  );
}