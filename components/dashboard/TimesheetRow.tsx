"use client";

import { useRouter } from "next/navigation";
import Badge from "../common/Badge";

interface Props {
  item: any;
}

export default function TimesheetRow({
  item,
}: Props) {
  const router = useRouter();

  return (
    <tr className="hover:bg-gray-50/80 transition-colors">

      <td className="px-6 py-4 text-sm font-medium text-gray-700">
        {item.week}
      </td>

      <td className="px-6 py-4 text-sm text-gray-600">
        {item.dateRange}
      </td>

      <td className="px-6 py-4">
        <Badge status={item.status} />
      </td>

      <td className="px-6 py-4">
        <button
          onClick={() =>
            router.push(`/dashboard/${item.id}`)
          }
          className="text-blue-600 hover:text-blue-800 text-sm font-semibold transition-colors cursor-pointer"
        >
          {item.status === "MISSING"
            ? "Create"
            : item.status === "INCOMPLETE"
            ? "Update"
            : "View"}
        </button>
      </td>
    </tr>
  );
}