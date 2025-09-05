import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

interface BranchCardProps {
  name: string;
  fullName: string;
  onClick: () => void;
}

const BranchCard = ({ name, fullName, onClick }: BranchCardProps) => {
  return (
    <Card 
      className="relative hover:scale-105 cursor-pointer transition-all duration-300 shadow-xl border border-gray-700 bg-[hsl(var(--image-dark-background))] bg-opacity-70 backdrop-blur-sm group hover:border-[hsl(var(--image-accent-pink))]" 
      onClick={onClick}
    >
      <CardContent className="p-6 text-center flex flex-col items-center">
        <div className="relative mb-4">
          <div className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
               style={{ background: 'linear-gradient(45deg, hsl(var(--image-accent-pink)), hsl(var(--image-accent-orange)))' }}>
            <GraduationCap className="h-8 w-8 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-[hsl(var(--image-text-light))] mb-2 group-hover:text-[hsl(var(--image-accent-pink))] transition-colors duration-300">{name}</h3>
        <p className="text-[hsl(var(--image-badge-text))] text-sm">{fullName}</p>
        <Button variant="ghost" className="mt-4 w-full text-white hover:bg-opacity-20 hover:text-[hsl(var(--image-accent-pink))] transition-colors duration-300" size="sm">
          Explore Resources
        </Button>
      </CardContent>
    </Card>
  );
};

export default BranchCard;
