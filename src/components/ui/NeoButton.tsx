import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type HoverTone = "primary" | "secondary" | "accent";

type NeoButtonBaseProps = {
  children?: ReactNode;
  className?: string;
  hoverTone?: HoverTone;
};

type NeoButtonProps = NeoButtonBaseProps &
  (
    | ({ as?: "button" } & ButtonHTMLAttributes<HTMLButtonElement>)
    | ({ as: "a" } & AnchorHTMLAttributes<HTMLAnchorElement>)
  );

const hoverToneClasses: Record<HoverTone, string> = {
  primary: "hover:bg-primary",
  secondary: "hover:bg-secondary",
  accent: "hover:bg-accent",
};

function getButtonClasses(className: string, hoverTone: HoverTone) {
  return [
    "inline-flex items-center justify-center",
    "cursor-pointer",
    "border-4 border-black bg-white",
    "px-4 py-2",
    "text-xs font-black uppercase tracking-wide text-black",
    "shadow-neo-shadow transition-all duration-150 ease-in-out",
    "active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]",
    "disabled:cursor-not-allowed disabled:opacity-60",
    hoverToneClasses[hoverTone],
    className,
  ].join(" ");
}

function omitNeoProps(props: NeoButtonProps) {
  const elementProps = { ...props } as Record<string, unknown>;
  delete elementProps.as;
  delete elementProps.className;
  delete elementProps.hoverTone;

  return elementProps;
}

export default function NeoButton(props: NeoButtonProps) {
  const { className = "", hoverTone = "secondary" } = props;
  const buttonClasses = getButtonClasses(className, hoverTone);

  if (props.as === "a") {
    const anchorProps = omitNeoProps(props) as AnchorHTMLAttributes<HTMLAnchorElement>;

    return <a className={buttonClasses} {...anchorProps} />;
  }

  const buttonProps = omitNeoProps(props) as ButtonHTMLAttributes<HTMLButtonElement>;
  const type = props.type ?? "button";

  return (
    <button
      {...buttonProps}
      type={type}
      className={buttonClasses}
    />
  );
}
