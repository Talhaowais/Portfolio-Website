export default function Button({ children, variant = "primary" }) {
  const base = "px-6 py-2 rounded-full transition";

  const styles = {
    primary: "bg-white text-black hover:bg-gray-200",
    outline: "border border-white text-white hover:bg-white hover:text-black",
  };

  return <button className={`${base} ${styles[variant]}`}>{children}</button>;
}