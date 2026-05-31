export function Button({
    children,
    variant = "primary",
    className = "",
}) {
    const base =
        "px-5 py-2 rounded-xl font-semibold transition duration-200 transform hover:scale-105 active:scale-95";

    const styles = {
        primary:
            "bg-green-400 text-black hover:bg-green-300 shadow-[0_0_10px_rgba(34,197,94,0.5)]",

        secondary:
            "bg-purple-600 text-white hover:bg-purple-700 shadow-[0_0_10px_rgba(124,58,237,0.4)]",

        outline:
            "border border-green-400 text-green-400 hover:bg-green-400/10",
    };

    return (
        <button
            className={`${base} ${styles[variant]} ${className}`}
        >
            {children}
        </button>
    );
}