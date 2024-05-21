"use client";

import React, { ReactNode, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import PageTransitionContext from "@/context/PageTransition/PageTransitionContext";

type StateType = "in" | "out";

interface PageTransitionProviderProps {
  children: ReactNode;
  transitionDuration: number;
}

const PageTransitionProvider = (props: PageTransitionProviderProps) => {
  const router = useRouter();
  const [state, setState] = useState<StateType>("in");
  const [isPending, startTransition] = useTransition();

  const push = (href: string) => {
    setState("out");
    setTimeout(
      () => {
        startTransition(() => {
          router.push(href);
          setState("in");
        });
      },
      Math.floor(props.transitionDuration * 1000),
    );
  };

  return (
    <PageTransitionContext.Provider
      value={{
        state: isPending ? "out" : state,
        push,
        transitionDuration: props.transitionDuration,
      }}
    >
      {props.children}
    </PageTransitionContext.Provider>
  );
};

export default PageTransitionProvider;
