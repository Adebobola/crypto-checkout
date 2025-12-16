type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
};

export default function Button({ children, disabled, className = "" }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={`
        w-full rounded-full bg-[#063B3B] py-4 text-white text-lg font-semibold
        disabled:opacity-50
        ${!disabled ? "cursor-pointer hover:bg-[#055151]" : "cursor-not-allowed"}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
