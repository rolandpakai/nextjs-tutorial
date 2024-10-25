"use client";

const error = (error) => {
  return (
    <span className="error">Error: {error.error.message}</span>
  );
}

export default error;