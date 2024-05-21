import React, { ReactNode } from "react";
import MobileMenu from "@/components/Sections/MobileMenu/MobileMenu";
import DesktopMenu from "@/components/Sections/DesktopMenu/DesktopMenu";
import PageTransitionProvider from "@/context/PageTransition/PageTransitionProvider";
import PageTransitionContent from "@/context/PageTransition/PageTransitionContent";
import Loading from "@/components/Elements/Loading";

interface IndexLayoutProps {
  children: ReactNode;
}

const IndexLayout = (props: IndexLayoutProps) => {
  return (
    <div className="pt-12 pb-16 lg:pb-0 text-white">
      <PageTransitionProvider transitionDuration={0.25}>
        <DesktopMenu />
        <MobileMenu />
        <PageTransitionContent loadingComponent={Loading}>
          {props.children}
        </PageTransitionContent>
      </PageTransitionProvider>
    </div>
  );
};

export default IndexLayout;
