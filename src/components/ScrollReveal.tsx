import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delayMs = 0,
  direction = 'up',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = document.getElementById('content-slide-container');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Once revealed, unobserve to keep it visible
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      {
        root: container || null,
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const getDirectionClasses = () => {
    switch (direction) {
      case 'up':
        return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';
      case 'down':
        return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8';
      case 'left':
        return isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8';
      case 'right':
        return isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8';
      case 'none':
        return isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95';
    }
  };

  return (
    <div
      ref={domRef}
      style={{
        transitionDuration: '700ms',
        transitionDelay: `${delayMs}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`transition-all ${getDirectionClasses()} ${className}`}
    >
      {children}
    </div>
  );
};
