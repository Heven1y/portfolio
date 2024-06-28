import classNames from "classnames";
import React from "react";

export default function RevealOnScroll({
  children,
  variant,
  delay = 0,
}: {
  variant: "arise-from-top" | "arise-from-left" | "arise-from-right";
  delay?: number;
  children: React.ReactNode;
}) {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        scrollObserver.unobserve(entry.target);
      }
    });
    if (ref.current) {
      scrollObserver.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        scrollObserver.unobserve(ref.current);
      }
    };
  }, []);

  const classAnim = classNames("transition duration-1000", {
    "opacity-0 translate-y-[-30px] translate-x-[0px]":
      variant === "arise-from-top" && !isVisible,
    "opacity-0 translate-y-[0px] translate-x-[-30px]":
      variant === "arise-from-left" && !isVisible,
    "opacity-0 translate-y-[0px] translate-x-[30px]":
      variant === "arise-from-right" && !isVisible,
    "opacity-100 translate-y-[0] translate-x-[0]": isVisible,
  });

  // const classes = `transition duration-1000 delay-[1s]
  //     ${
  //       isVisible
  //         ? `opacity-100 translate-y-[0] translate-x-[0]`
  //         : `opacity-0 translate-y-[${offsetY ?? 0}px] translate-x-[${offsetX ?? 0}px]`
  //     }`;

  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      ref={ref}
      className={classAnim}
    >
      {children}
    </div>
  );
}
