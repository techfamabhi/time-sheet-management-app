interface Props {
  title: string;
}

export default function EmptyState({
  title,
}: Props) {
  return (
    <div className="py-20 text-center text-gray-400">

      <p className="text-xl">
        {title}
      </p>

    </div>
  );
}