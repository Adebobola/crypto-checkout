type SelectFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

export default function SelectField({
  label,
  value,
  onChange,
}: SelectFieldProps) {
  return (
    <div className="space-y-2">
      <label className="text-[#063B3B] font-medium">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-full border border-gray-200 px-4 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#063B3B]"
      >
        <option value="">Select an option</option>
        <option value="wallet">Wallet</option>
        <option value="bank">Bank</option>
      </select>
    </div>
  );
}
