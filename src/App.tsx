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
import StudentHub from "./pages/StudentHub";




const queryClient = new QueryClient();



const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/branches" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/gpa-calculator" element={<GpaCalculator />} /> {/* New Route */}
          <Route path="/resources/:branch/:subject/:type" element={<ResourceViewer />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/student-hub" element={<StudentHub />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);


export default App;
