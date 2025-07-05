import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

// Section with consistent lateral padding
export const SectionPadded: React.FC<SectionProps> = ({
  children,
  className = "",
}) => {
  return <div className={`px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
};

// Full-width section without padding
export const SectionFull: React.FC<SectionProps> = ({
  children,
  className = "",
}) => {
  return <div className={`w-full ${className}`}>{children}</div>;
};

// Full-width section with inner padding
export const SectionFullWithPadding: React.FC<SectionProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="px-4 sm:px-6 lg:px-8">{children}</div>
    </div>
  );
};
