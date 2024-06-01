import { createContext } from "react";

interface PageTransitionContextType {
  state: "in" | "out";
  push: (href: string) => void;
  transitionDuration: number;
}

const PageTransitionContext = createContext<PageTransitionContextType>({
  state: "in",
  push: (href: string) => {},
  transitionDuration: 0,
});

export default PageTransitionContext;
