import { Plane } from "lucide-react";

export const RouteCard = ({ route }) => (
  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
    <div className="flex items-center gap-2">
      {/* From Section */}
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-gray-900 text-sm truncate">
          {route.from}
        </div>
        <div className="text-xs text-gray-600 truncate leading-tight">
          {route.fromAirport}
        </div>
      </div>

      {/* Plane Icon Section */}
      <div className="flex items-center gap-1 px-1 flex-shrink-0">
        <div className="w-6 h-px bg-gray-300"></div>
        <Plane className="w-6 h-6 text-orange-500 flex-shrink-0" />
        <div className="w-6 h-px bg-gray-300"></div>
      </div>

      {/* To Section */}
      <div className="flex-1 min-w-0 text-right">
        <div className="font-semibold text-gray-900 text-sm truncate">
          {route.to}
        </div>
        <div className="text-xs text-gray-600 truncate leading-tight">
          {route.toAirport}
        </div>
      </div>
    </div>
  </div>
);
