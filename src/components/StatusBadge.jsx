const colors = {
  Applied: "bg-gray-200",
  Screening: "bg-blue-200",
  Interview: "bg-yellow-200",
  Offer: "bg-green-200",
  Rejected: "bg-red-200",
};

const StatusBadge = ({ status }) => {
  return (
    <span className={`px-2 py-1 rounded text-sm ${colors[status]}`}>
      {status}
    </span>
  );
};

export default StatusBadge;