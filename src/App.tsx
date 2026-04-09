diff --git a/src/App.tsx b/src/App.tsx
index 464f86457d5239be97be3dcaadd8ce25ba514912..41204ec1f8b3c449c0440a31609ecd332e78bab7 100644
--- a/src/App.tsx
+++ b/src/App.tsx
@@ -1,34 +1,34 @@
 import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
 import { BrowserRouter, Route, Routes } from "react-router-dom";
 import { Toaster as Sonner } from "@/components/ui/sonner";
 import { Toaster } from "@/components/ui/toaster";
 import { TooltipProvider } from "@/components/ui/tooltip";
 import Index from "./pages/Index";
 import Work from "./pages/Work";
 import WorkProject from "./pages/WorkProject";
 import About from "./pages/About";
 import Contact from "./pages/Contact";
 import NotFound from "./pages/NotFound";
 
 const queryClient = new QueryClient();
 
 const App = () => (
   <QueryClientProvider client={queryClient}>
     <TooltipProvider>
       <Toaster />
       <Sonner />
-      <BrowserRouter>
+      <BrowserRouter basename={import.meta.env.BASE_URL}>
         <Routes>
           <Route path="/" element={<Index />} />
           <Route path="/work" element={<Work />} />
           <Route path="/work/:projectId" element={<WorkProject />} />
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="*" element={<NotFound />} />
         </Routes>
       </BrowserRouter>
     </TooltipProvider>
   </QueryClientProvider>
 );
 
 export default App;
