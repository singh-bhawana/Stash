import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const HSL_COLOR = {
  accent_primary: "240, 60%, 70%",
  accent_secondary: "10, 70%, 80%",
  button_text_light: "0,0%,98%",
  text_primary: "220, 20%, 20%",
  text_muted: "220, 10%, 40%",
};

const Hero = () => {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 100);
    }, 70);
    return () => clearInterval(id);
  }, []);

  const hueShift = animationPhase * 3.6;

  return (
    <section
      className="min-h-[75vh] flex flex-col justify-center items-center text-center relative z-10 px-4"
      style={{
        background: "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)",
        color: `hsl(${HSL_COLOR.text_primary})`,
      }}
    >
      <div
        className="w-28 h-28 md:w-36 md:h-36 flex items-center justify-center rounded-full shadow-lg mb-7 animate-float"
        style={{
          background: `linear-gradient(135deg, hsl(${HSL_COLOR.accent_primary}), hsl(${HSL_COLOR.accent_secondary}))`,
          boxShadow: `0 12px 48px 0 hsla(${HSL_COLOR.accent_primary}, 0.3)`,
        }}
      >
        <BookOpen className="h-16 w-16 md:h-20 md:w-20 text-white drop-shadow-xl" />
      </div>

      <h1
        style={{
          transform: `scale(${1 + 0.07 * Math.sin(animationPhase * 0.12)})`,
          background: `linear-gradient(90deg, hsl(${hueShift}, 80%, 65%), hsl(${(hueShift + 80) % 360}, 80%, 65%))`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          transition: "transform 0.2s ease",
          userSelect: "none",
          letterSpacing: "-0.05em",
        }}
        className="select-none text-8xl font-extrabold mb-4"
      >
        STASH
      </h1>

      <p
        style={{ color: `hsl(${HSL_COLOR.text_muted})` }}
        className="max-w-md text-2xl font-semibold mb-12"
      >
        Shh… it’s the backbenchers’ secret.
      </p>

      <Button
        size="lg"
        className="text-lg font-bold rounded-3xl shadow-lg transition-transform hover:scale-105"
        style={{
          background: `linear-gradient(90deg, hsl(${HSL_COLOR.accent_primary}), hsl(${HSL_COLOR.accent_secondary}))`,
          color: `hsl(${HSL_COLOR.button_text_light})`,
          boxShadow: `0 8px 32px hsla(${HSL_COLOR.accent_primary}, 0.27)`,
        }}
        onClick={() =>
          document.getElementById("branches-section")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Explore
      </Button>

      <style>{`
        .animate-float {
          animation: float 3s ease-in-out infinite alternate;
        }
        @keyframes float {
          0% { transform: translateY(0);}
          100% { transform: translateY(-16px);}
        }
      `}</style>
    </section>
  );
};

export default Hero;
