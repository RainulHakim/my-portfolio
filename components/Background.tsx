export function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Primary violet orb */}
      <div
        className="orb-1 absolute -top-[20%] -right-[10%] w-[900px] h-[900px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(124,58,237,0.18) 0%, rgba(99,102,241,0.08) 40%, transparent 70%)",
        }}
      />

      {/* Cyan accent orb */}
      <div
        className="orb-2 absolute -bottom-[15%] -left-[5%] w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(6,182,212,0.12) 0%, rgba(59,130,246,0.06) 45%, transparent 70%)",
        }}
      />

      {/* Mid violet-pink soft orb */}
      <div
        className="orb-3 absolute top-[35%] left-[25%] w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(168,85,247,0.07) 0%, transparent 65%)",
        }}
      />

      {/* Deep indigo center orb */}
      <div
        className="orb-4 absolute top-[55%] right-[20%] w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(67,56,202,0.09) 0%, rgba(79,70,229,0.05) 45%, transparent 70%)",
        }}
      />

      {/* Subtle dot-grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />
    </div>
  );
}
