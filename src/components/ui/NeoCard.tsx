import type { HTMLAttributes } from "react";

type NeoCardProps = HTMLAttributes<HTMLDivElement>;

export default function NeoCard({ className = "", children, ...props }: NeoCardProps) {
  return (
    <div
      className={[
        "border-4 border-black bg-background p-4 text-black",
        "shadow-neo-shadow",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
