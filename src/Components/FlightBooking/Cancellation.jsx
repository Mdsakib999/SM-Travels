import { Eye } from "lucide-react";

export const Cancellation = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5">
      <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-3">
        Cancellation & Date Change Charges
      </h3>
      <h4 className="text-orange-600 font-semibold mb-2">Non Refundable</h4>
      <p className="text-sm sm:text-base text-gray-600 mb-3 leading-relaxed">
        The Cancellation penalty on this booking will depend on how close to the
        departure date you cancel your ticket. View fare rules to know more.
      </p>
      <button className="flex items-center gap-2 text-orange-600 hover:underline text-sm">
        <Eye size={16} />
        <span>View Details</span>
      </button>
    </div>
  );
};
