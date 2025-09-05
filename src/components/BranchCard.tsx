import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

// New color palette in HSL
const HSL_COLOR = {
  bg_solid_component: "hsl(220, 20%, 90%)",
  text_primary: "hsl(220, 20%, 20%)",
  text_muted: "hsl(220, 10%, 40%)",
  accent_primary: "hsl(240, 60%, 70%)",
  accent_secondary: "hsl(10, 70%, 80%)",
  button_text_light: "hsl(0, 0%, 98%)",
};

interface BranchCardProps {
  name: string;
  fullName: string;
  onClick: () => void;
}

const BranchCard = ({ name, fullName, onClick }: BranchCardProps) => {
  return (
    <Card 
      className="relative hover-lift cursor-pointer shadow-xl border border-transparent"
      style={{
        backgroundColor: HSL_COLOR.bg_solid_component,
        border: `1px solid ${HSL_COLOR.bg_solid_component}`,
      }}
      onClick={onClick}
    >
      <CardContent className="p-6 text-center flex flex-col items-center">
        <div className="relative mb-4">
          <div className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
               style={{ background: `linear-gradient(45deg, ${HSL_COLOR.accent_primary}, ${HSL_COLOR.accent_secondary})` }}>
            <GraduationCap className="h-8 w-8" style={{ color: HSL_COLOR.button_text_light }} />
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 transition-colors duration-300" style={{ color: HSL_COLOR.text_primary }}>{name}</h3>
        <p className="text-sm" style={{ color: HSL_COLOR.text_muted }}>{fullName}</p>
        <Button 
          variant="ghost" 
          className="mt-4 w-full transition-colors duration-300"
          style={{ 
            color: HSL_COLOR.button_text_light, 
            backgroundColor: HSL_COLOR.accent_primary,
            boxShadow: `0 4px 10px ${HSL_COLOR.accent_primary}80`
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
