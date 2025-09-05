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
    <Card className="hover-lift cursor-pointer shadow-card border-border" onClick={onClick}>
      <CardContent className="p-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
            <GraduationCap className="h-8 w-8 text-primary-foreground" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm">{fullName}</p>
        <Button variant="ghost" className="mt-4 w-full" size="sm">
          Explore Resources
        </Button>
      </CardContent>
    </Card>
  );
};

export default BranchCard;