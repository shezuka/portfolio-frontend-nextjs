import React, { ReactNode } from "react";
import MobileMenu from "@/components/Sections/MobileMenu/MobileMenu";
import DesktopMenu from "@/components/Sections/DesktopMenu/DesktopMenu";
import PageTransitionProvider from "@/context/PageTransition/PageTransitionProvider";
import PageTransitionContent from "@/context/PageTransition/PageTransitionContent";
import Loading from "@/components/Elements/Loading";
import ContactMeButton from "@/components/Functional/ContactMeButton";
import Section from "@/components/Elements/Section";

interface IndexLayoutProps {
  children: ReactNode;
}

const IndexLayout = (props: IndexLayoutProps) => {
  return (
    <>
      <div className="min-h-[100vh] pt-12 pb-16 lg:pb-0 text-white bg-gray-900">
        <PageTransitionProvider transitionDuration={0.25}>
          <DesktopMenu />
          <MobileMenu />
          <PageTransitionContent loadingComponent={Loading}>
            {props.children}
          </PageTransitionContent>
        </PageTransitionProvider>
      </div>
      <footer className="bg-gray-950">
        <Section id="contact-me">
          <div className="text-center">
            <h2 className="text-3xl text-blue-600 mb-3">Get In Touch</h2>
            <p className="text-lg text-gray-300">
              Feel free to reach out for collaborations or just a friendly hello
              👋
            </p>
            <div id="contact-section" className="mt-4">
              <ContactMeButton />
            </div>
          </div>
        </Section>
      </footer>
    </>
  );
};

export default IndexLayout;
