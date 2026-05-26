"use client";

import { useEffect } from "react";
import Modal from "../common/Modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addTaskSchema } from "@/lib/validations";

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmitTask: (data: any) => void;
  editData?: any;
}

export default function AddEditTaskModal({
  open,
  onClose,
  onSubmitTask,
  editData,
}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addTaskSchema),
    defaultValues: {
      project: "",
      typeOfWork: "",
      description: "",
      hours: 1,
    },
  });

  /*
    Edit mode
  */
  useEffect(() => {
    if (editData) {
      reset({
        project: editData.project,
        typeOfWork: editData.typeOfWork,
        description: editData.description,
        hours: editData.hours,
      });
    } else {
      reset({
        project: "",
        typeOfWork: "",
        description: "",
        hours: 12, // Default to 12 as seen in mockup
      });
    }
  }, [editData, reset]);

  const hours = watch("hours");

  const submitHandler = (data: any) => {
    onSubmitTask(data);
    onClose();
  };

  return (
    <Modal
      isOpen={open}
      onClose={onClose}
      title={editData ? "Edit Entry" : "Add New Entry"}
    >
      <form onSubmit={handleSubmit(submitHandler)} className="space-y-4 text-left">
        
        {/* Project Select */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Select Project *
          </label>
          <div className="relative mt-1">
            <select
              {...register("project")}
              className="appearance-none w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-600 outline-none focus:border-blue-500 bg-white cursor-pointer"
            >
              <option value="">Project Name</option>
              <option value="Website">Website</option>
              <option value="Admin Panel">Admin Panel</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-xs text-gray-400">
              ▼
            </div>
          </div>
          {errors.project && (
            <p className="text-red-500 text-xs mt-1">{errors.project.message as string}</p>
          )}
        </div>

        {/* Type of Work Select */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Type of Work *
          </label>
          <div className="relative mt-1">
            <select
              {...register("typeOfWork")}
              className="appearance-none w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-600 outline-none focus:border-blue-500 bg-white cursor-pointer"
            >
              <option value="">Select Work Type</option>
              <option value="Development">Development</option>
              <option value="Bug fixes">Bug fixes</option>
              <option value="Testing">Testing</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-xs text-gray-400">
              ▼
            </div>
          </div>
          {errors.typeOfWork && (
            <p className="text-red-500 text-xs mt-1">{errors.typeOfWork.message as string}</p>
          )}
        </div>

        {/* Task Description */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Task description *
          </label>
          <textarea
            {...register("description")}
            rows={3}
            placeholder="Write text here ..."
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-600 mt-1 outline-none focus:border-blue-500 resize-none"
          />
          <p className="text-xs text-gray-400 mt-1">A note for extra info</p>
          {errors.description && (
            <p className="text-red-500 text-xs mt-1">{errors.description.message as string}</p>
          )}
        </div>

        {/* Hours Counter */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Hours *
          </label>
          <div className="flex items-center mt-1.5 w-fit border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white">
            <button
              type="button"
              onClick={() => setValue("hours", Math.max(1, hours - 1))}
              className="w-10 h-10 text-lg border-r border-gray-200 hover:bg-gray-55 transition-colors cursor-pointer select-none"
            >
              -
            </button>
            <div className="w-12 h-10 flex items-center justify-center text-sm font-semibold text-gray-700">
              {hours}
            </div>
            <button
              type="button"
              onClick={() => setValue("hours", Math.min(24, hours + 1))}
              className="w-10 h-10 text-lg border-l border-gray-200 hover:bg-gray-55 transition-colors cursor-pointer select-none"
            >
              +
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-3">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white h-11 rounded-xl text-sm font-semibold transition-colors cursor-pointer shadow-sm"
          >
            {editData ? "Update entry" : "Add entry"}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="border border-gray-200 hover:bg-gray-55 text-gray-600 h-11 rounded-xl text-sm font-semibold transition-colors cursor-pointer"
          >
            Cancel
          </button>
        </div>

      </form>
    </Modal>
  );
}