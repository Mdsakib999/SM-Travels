export const FlightBadge = ({ text, variant }) => {
  const colors = {
    warning: "text-orange-500",
    success: "text-green-600",
    danger: "text-red-500",
    info: "text-blue-600",
  };

  return (
    <span
      className={`text-xs md:text-lg font-medium text-center  ${
        colors[variant] || colors.info
      }`}
    >
      {text}
    </span>
  );
};
