interface Props {
  status: string;
}

export default function Badge({ status }: Props) {
  const getColor = () => {
    switch (status) {
      case "COMPLETED":
        return "bg-green-100 text-green-700";

      case "INCOMPLETE":
        return "bg-yellow-100 text-yellow-700";

      case "MISSING":
        return "bg-pink-100 text-pink-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${getColor()}`}
    >
      {status}
    </span>
  );
}