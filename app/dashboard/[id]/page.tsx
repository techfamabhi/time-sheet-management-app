"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/dashboard/Header";
import ProgressBar from "@/components/dashboard/ProgressBar";
import TaskGroup from "@/components/dashboard/TaskGroup";
import AddEditTaskModal from "@/components/dashboard/AddEditTaskModal";
import Loader from "@/components/common/Loader";
import EmptyState from "@/components/common/EmptyState";
import { getStatus } from "@/lib/utils";

export default function TimesheetDetailsPage() {
  const params = useParams();
  const id = Number(params.id);

  const [timesheet, setTimesheet] = useState<any>(null);
  const [groups, setGroups] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState("Jan 21");

  /*
    Fetch Details
  */
  const fetchDetails = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/timesheets/${id}`);
      const result = await response.json();
      setTimesheet(result.data.timesheet);
      setGroups(result.data.entries);
    } catch (err) {
      setError("Failed to load details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [id]);

  /*
    Calculate Hours
  */
  const totalHours = useMemo(() => {
    return groups.reduce((acc, group) => {
      return (
        acc +
        group.entries.reduce((sum: number, task: any) => sum + task.hours, 0)
      );
    }, 0);
  }, [groups]);

  /*
    Add / Edit Submit
  */
  const handleSubmitTask = async (data: any) => {
    try {
      if (editData) {
        // Edit existing entry
        await fetch(`/api/entries/${editData.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      } else {
        // Add new entry
        await fetch("/api/entries", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...data,
            timesheetId: id,
            date: selectedDate,
          }),
        });
      }
      fetchDetails();
      setOpen(false);
      setEditData(null);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (task: any, date: string) => {
    setSelectedDate(date);
    setEditData(task);
    setOpen(true);
  };

  const handleDelete = async (entryId: number) => {
    try {
      await fetch(`/api/entries/${entryId}`, {
        method: "DELETE",
      });
      fetchDetails();
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <EmptyState title={error} />;
  }

  return (
    <div className="min-h-screen bg-gray-55 flex flex-col">
      <Header />

      <main className="flex-1 max-w-6xl w-full mx-auto p-4 md:p-8">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4 pb-6 border-b border-gray-100">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                This week’s timesheet
              </h1>
              <p className="text-xs text-gray-400 mt-1">
                {timesheet?.dateRange}
              </p>
            </div>

            <ProgressBar
              current={totalHours}
              total={40}
            />
          </div>

          {groups.length === 0 ? (
            <EmptyState title="No tasks found" />
          ) : (
            <div className="space-y-8">
              {groups.map((group) => (
                <TaskGroup
                  key={group.date}
                  group={group}
                  onAdd={(date) => {
                    setSelectedDate(date);
                    setEditData(null);
                    setOpen(true);
                  }}
                  onEdit={(task) => handleEdit(task, group.date)}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}

        </div>
      </main>

      <AddEditTaskModal
        open={open}
        onClose={() => {
          setOpen(false);
          setEditData(null);
        }}
        onSubmitTask={handleSubmitTask}
        editData={editData}
      />

      <footer className="py-8 text-center text-xs text-gray-400 border-t border-gray-100 bg-white mt-12">
        © 2024 tentwenty. All rights reserved.
      </footer>
    </div>
  );
}