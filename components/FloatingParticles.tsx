// Pre-defined positions — no Math.random() to avoid hydration mismatch
const particles = [
  { id: 0, x: "8%",  y: "22%", size: 2,   dur: 6,   delay: 0   },
  { id: 1, x: "18%", y: "68%", size: 1.5, dur: 8,   delay: 1   },
  { id: 2, x: "32%", y: "38%", size: 3,   dur: 7,   delay: 2   },
  { id: 3, x: "48%", y: "80%", size: 1,   dur: 9,   delay: 0.5 },
  { id: 4, x: "62%", y: "14%", size: 2,   dur: 6.5, delay: 3   },
  { id: 5, x: "74%", y: "54%", size: 1.5, dur: 8.5, delay: 1.5 },
  { id: 6, x: "86%", y: "28%", size: 2,   dur: 7.5, delay: 2.5 },
  { id: 7, x: "92%", y: "74%", size: 1.5, dur: 6,   delay: 4   },
  { id: 8, x: "25%", y: "90%", size: 1,   dur: 9.5, delay: 0.8 },
  { id: 9, x: "55%", y: "46%", size: 2.5, dur: 7,   delay: 3.5 },
  { id: 10, x: "4%",  y: "52%", size: 1,  dur: 8,   delay: 2   },
  { id: 11, x: "40%", y: "8%",  size: 1.5, dur: 10,  delay: 1.2 },
];

export function FloatingParticles() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-violet-400/30"
          style={{
            left: p.x,
            top: p.y,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `float-particle ${p.dur}s ease-in-out ${p.delay}s infinite alternate`,
          }}
        />
      ))}
    </div>
  );
}
