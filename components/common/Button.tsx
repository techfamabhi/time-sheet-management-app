interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: Props) {
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white"
      : "border bg-white text-black";

  return (
    <button
      {...props}
      className={`h-12 px-6 rounded-xl font-semibold transition hover:opacity-90 ${styles} ${className}`}
    >
      {children}
    </button>
  );
}