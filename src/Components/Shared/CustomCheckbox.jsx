import { Check } from "lucide-react";

export const CustomCheckbox = ({ checked, onChange, children, count }) => (
  <label className="flex items-center justify-between cursor-pointer py-1 hover:bg-gray-50 px-1 rounded">
    <div className="flex items-center gap-3">
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div
          className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${
            checked
              ? "bg-orange-500 border-orange-500"
              : "border-gray-300 bg-white hover:border-orange-300"
          }`}
        >
          {checked && <Check size={10} className="text-white" />}
        </div>
      </div>
      <span className="text-sm text-gray-700">{children}</span>
    </div>
    {count && (
      <span className="text-xs text-gray-400">
        ({count.toString().padStart(2, "0")})
      </span>
    )}
  </label>
);
