import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

// New color palette in HSL
const HSL_COLOR = {
  bg_dark: "hsl(340, 20%, 15%)",
  bg_light: "hsl(340, 20%, 20%)",
  accent_red: "hsl(350, 60%, 45%)",
  accent_orange: "hsl(20, 80%, 60%)",
  text_light: "hsl(0, 0%, 95%)",
  text_muted: "hsl(0, 0%, 75%)",
};

interface BranchCardProps {
  name: string;
  fullName: string;
  onClick: () => void;
}

const BranchCard = ({ name, fullName, onClick }: BranchCardProps) => {
  return (
    <Card 
      className="relative hover:scale-105 cursor-pointer transition-all duration-300 shadow-xl border border-transparent"
      style={{
        backgroundColor: HSL_COLOR.bg_light,
        border: `1px solid ${HSL_COLOR.bg_light}`,
      }}
      onClick={onClick}
    >
      <CardContent className="p-6 text-center flex flex-col items-center">
        <div className="relative mb-4">
          <div className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
               style={{ background: `linear-gradient(45deg, ${HSL_COLOR.accent_red}, ${HSL_COLOR.accent_orange})` }}>
            <GraduationCap className="h-8 w-8 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 transition-colors duration-300" style={{ color: HSL_COLOR.text_light }}>{name}</h3>
        <p className="text-sm" style={{ color: HSL_COLOR.text_muted }}>{fullName}</p>
        <Button 
          variant="ghost" 
          className="mt-4 w-full transition-colors duration-300"
          style={{ 
            color: HSL_COLOR.text_light, 
            backgroundColor: HSL_COLOR.accent_red,
            boxShadow: `0 4px 10px ${HSL_COLOR.accent_red}80`
          }}
          size="sm"
        >
          Explore Resources
        </Button>
      </CardContent>
    </Card>
  );
};

export default BranchCard;
