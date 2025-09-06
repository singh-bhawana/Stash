import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ResourceViewer from "./components/ResourceViewer";
import GpaCalculator from "./pages/GpaCalculator";
import Navigation from "./components/Navigation"; // Import the Navigation component

import SubjectViewer from "./pages/SubjectViewer"; 
import SubjectSectionViewer from "./pages/SubjectSectionViewer";
import CSE from "./pages/CSE";
import ECE from "./pages/ECE";
import IT from "./pages/IT";
import AIML from "./pages/AIML";
import CSEAI from "./pages/CSEAI";
import ECEAI from "./pages/ECEAI";
import FunGame from "@/components/FunGame";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <main style={{ paddingTop: '80px' }}> {/* Applying inline style for padding */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/branches" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/gpa-calculator" element={<GpaCalculator />} />
            <Route path="/resources/:branch" element={<SubjectViewer />} />
            <Route path="/fun-game" element={<FunGame />} />
            <Route path="/resources/CSE" element={<CSE />} />
            <Route path="/resources/ECE" element={<ECE />} />
            <Route path="/resources/IT" element={<IT />} />
            <Route path="/resources/AIML" element={<AIML />} />
            <Route path="/resources/CSE-AI" element={<CSEAI />} />
            <Route path="/resources/ECE-AI" element={<ECEAI />} />
            <Route path="/resources/:branch/:subject" element={<SubjectSectionViewer />} />
            <Route path="/resources/:branch/:subject/:type" element={<ResourceViewer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;