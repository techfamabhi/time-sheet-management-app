import TimesheetRow from "./TimesheetRow";

interface Props {
  data: any[];
  sortColumn: string;
  sortDirection: "asc" | "desc" | null;
  onSort: (column: string) => void;
}

export default function TimesheetTable({
  data,
  sortColumn,
  sortDirection,
  onSort,
}: Props) {
  
  const renderHeader = (label: string, field: string) => {
    const isSorted = sortColumn === field;
    const arrow = isSorted ? (sortDirection === "asc" ? "↑" : "↓") : "↓";
    const arrowColor = isSorted ? "text-gray-900" : "text-gray-400";

    return (
      <th 
        className="px-6 py-4 cursor-pointer select-none text-[11px] font-bold text-gray-500 tracking-wider hover:bg-gray-100 transition-colors"
        onClick={() => onSort(field)}
      >
        <div className="flex items-center gap-1.5 uppercase">
          <span>{label}</span>
          <span className={`text-[12px] font-bold ${arrowColor}`}>{arrow}</span>
        </div>
      </th>
    );
  };

  return (
    <div className="overflow-hidden border border-gray-100 rounded-xl">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          
          <thead>
            <tr className="bg-[#F8F9FB] border-b border-gray-100">
              {renderHeader("Week #", "week")}
              {renderHeader("Date", "date")}
              {renderHeader("Status", "status")}
              <th className="px-6 py-4 text-[11px] font-bold text-gray-400 tracking-wider uppercase">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 bg-white">
            {data.map((item) => (
              <TimesheetRow
                key={item.id}
                item={item}
              />
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}