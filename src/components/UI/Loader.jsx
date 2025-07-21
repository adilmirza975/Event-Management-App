import React from "react";

export const Loader = () => {
  return (
    <div className="loader-container-xyz123">
      <div className="spinner-xyz123"></div>

      <style>{`
        .loader-container-xyz123 {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 150px;
        }

        .spinner-xyz123 {
          width: 40px;
          height: 40px;
          border: 5px solid #ccc;
          border-top-color: #007bff;
          border-radius: 50%;
          animation: spin-xyz123 1s linear infinite;
        }

        @keyframes spin-xyz123 {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};
