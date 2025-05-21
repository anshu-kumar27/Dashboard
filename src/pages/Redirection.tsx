import React from "react";
import { useNavigate } from "react-router-dom";

const Redirection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <h2 className="text-xl font-semibold mb-4 text-red-600">
        This is a sample component.
      </h2>
      <p className="mb-6 text-center">
        Please click the button below to go back to the dashboard.
      </p>
      <button
        onClick={() => navigate("/dashboard")}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Go Back to Dashboard
      </button>
    </div>
  );
};

export default Redirection;
