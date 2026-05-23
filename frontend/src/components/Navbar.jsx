export default function Navbar() {
  return (
    <nav className="w-full px-10 py-6 flex justify-between items-center bg-white shadow-sm">

      <div>
        <h1 className="text-2xl font-bold">
          NRI Wealth Copilot
        </h1>
      </div>

      <button
        onClick={() => {

            document
            .getElementById(
                "chat-section"
            )
            ?.scrollIntoView({
                behavior:
                "smooth"
            });

        }}

        className="
        bg-black
        text-white
        px-5
        py-2
        rounded-full
        hover:scale-105
        transition"
        >
        Try Assistant
        </button>
    </nav>
  );
}