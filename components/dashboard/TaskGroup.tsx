import TaskRow from "./TaskRow";

interface Props {
  group: any;
  onAdd: (date: string) => void;
  onEdit: (task: any) => void;
  onDelete: (taskId: number) => void;
}

export default function TaskGroup({
  group,
  onAdd,
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className="py-4 first:pt-0 border-b border-gray-100 last:border-b-0">
      
      <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-4 md:gap-6">
        
        {/* Date column (left) */}
        <div className="pt-2">
          <h2 className="text-sm font-bold text-gray-900 tracking-tight">
            {group.date}
          </h2>
        </div>

        {/* Tasks list & Add button (right) */}
        <div className="space-y-3">
          
          {group.entries.map((task: any) => (
            <TaskRow
              key={task.id}
              task={task}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}

          {/* Add task button with dotted outline card style */}
          <button
            onClick={() => onAdd(group.date)}
            className="w-full border border-dashed border-blue-200 hover:border-blue-300 rounded-xl h-11 text-xs font-semibold text-blue-600 bg-blue-50/10 hover:bg-blue-50/30 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
          >
            + Add new task
          </button>

        </div>

      </div>

    </div>
  );
}