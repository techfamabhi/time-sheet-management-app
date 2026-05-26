"use client";

import { useState } from "react";

interface Props {
  task: any;
  onEdit: (task: any) => void;
  onDelete: (taskId: number) => void;
}

export default function TaskRow({
  task,
  onEdit,
  onDelete,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-150 rounded-xl px-4 py-2 h-11 flex items-center justify-between gap-4 bg-white relative">
      
      {/* Task description (left) */}
      <div className="truncate pr-4">
        <p className="text-sm font-medium text-gray-700 truncate">
          {task.description}
        </p>
      </div>

      {/* Task details & menu (right) */}
      <div className="flex items-center gap-3 shrink-0">
        
        {/* Hours count */}
        <span className="text-xs text-gray-400 font-semibold select-none">
          {task.hours} hrs
        </span>

        {/* Project Tag */}
        <span className="bg-blue-50/50 border border-blue-100 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded tracking-wide uppercase select-none">
          {task.project}
        </span>

        {/* Menu Dropdown Trigger */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-gray-400 font-bold focus:outline-none cursor-pointer"
          >
            ⋯
          </button>

          {open && (
            <>
              {/* Overlay to close menu on click outside */}
              <div
                className="fixed inset-0 z-20"
                onClick={() => setOpen(false)}
              />
              
              {/* Action Dropdown Card */}
              <div className="absolute right-0 top-8 bg-white border border-gray-200 shadow-lg rounded-xl w-28 z-30 overflow-hidden py-1">
                <button
                  onClick={() => {
                    onEdit(task);
                    setOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-xs text-gray-600 hover:bg-gray-50 font-medium transition-colors cursor-pointer"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    onDelete(task.id);
                    setOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-xs text-red-600 hover:bg-red-50 font-medium transition-colors cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>

      </div>

    </div>
  );
}