import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

// Pages
import { Home } from "@/pages/Home";
import { RentalInfo } from "@/pages/RentalInfo";
import { Vendors } from "@/pages/Vendors";
import { Gallery } from "@/pages/Gallery";
import { Couples } from "@/pages/Couples";
import { History } from "@/pages/History";
import { Contact } from "@/pages/Contact";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/rental" component={RentalInfo} />
      <Route path="/vendors" component={Vendors} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/couples" component={Couples} />
      <Route path="/history" component={History} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <div className="flex min-h-[100dvh] flex-col">
            <Nav />
            <main className="flex-1 w-full">
              <Router />
            </main>
            <Footer />
          </div>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
