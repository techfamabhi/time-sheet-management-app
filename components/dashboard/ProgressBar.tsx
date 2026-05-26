interface Props {
  current: number;
  total: number;
}

export default function ProgressBar({
  current,
  total,
}: Props) {
  const percentage = (current / total) * 100;
  const fillWidth = Math.min(100, percentage);

  return (
    <div className="w-48 text-right md:text-left">

      <div className="flex justify-between items-baseline mb-1.5">
        
        <p className="text-sm font-bold text-gray-800">
          {current}/{total} hrs
        </p>

        <p className="text-xs font-semibold text-gray-400">
          {percentage.toFixed(0)}%
        </p>

      </div>

      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
        
        <div
          className="h-full bg-orange-400 rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${fillWidth}%`,
          }}
        />

      </div>

    </div>
  );
}