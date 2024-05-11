import React from "react";

type BadgeProps = {
  children: React.ReactNode;
  style?: "primary" | "secondary";
};

export default function Badge({ children, style }: BadgeProps) {
  const className =
    !!style && style === "secondary"
      ? "inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      : "inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2";

  return <span className={className}>{children}</span>;
}
