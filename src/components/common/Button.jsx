export default function Button({
  children,
  href,
  variant = "primary"
}) {
  return (
    <a
      href={href}
      className={
        variant === "primary"
          ? "btn-primary"
          : "btn-outline"
      }
    >
      {children}
    </a>
  );
}