// src/components/bottom-bar/BottomBar.jsx
import React, { useEffect, useCallback, useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  CalendarHeart,
  MapPin,
  Gift,
  MessageCircleHeart,
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: Home, label: "Home", href: "#home", id: "home" },
  { icon: CalendarHeart, label: "Event", href: "#event", id: "event" },
  { icon: MapPin, label: "Location", href: "#location", id: "location" },
  { icon: Gift, label: "Gifts", href: "#gifts", id: "gifts" },
  { icon: MessageCircleHeart, label: "Wishes", href: "#wishes", id: "wishes" },
];

/**
 * BottomBar — a fixed, animated bottom navigation bar with active section detection.
 * Uses Intersection Observer for auto-highlighting and Framer Motion for smooth entry animations.
 * Ideal for single-page wedding or event websites.
 */
const BottomBar = () => {
  const [active, setActive] = useState("home");

  // Smooth scroll on click
  const handleMenuClick = useCallback((e, href, id) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      setActive(id);
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  // Auto-detect active section using Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (menuItems.find((item) => item.id === sectionId)) {
            setActive(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all menu-related sections
    menuItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4">
      <motion.div
        className="w-auto"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        <div className="backdrop-blur-md bg-white/90 border border-pink-100/80 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] px-3 py-2">
          <nav className="flex items-center gap-1">
            {menuItems.map((item) => (
              <motion.a
                key={item.id}
                href={item.href}
                onClick={(e) => handleMenuClick(e, item.href, item.id)}
                className={cn(
                  "flex flex-col items-center justify-center py-2 px-3 rounded-xl transition-all duration-300 ease-in-out",
                  "hover:bg-pink-50 cursor-pointer min-w-[60px]",
                  active === item.id
                    ? "text-pink-600 bg-pink-50"
                    : "text-gray-600"
                )}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{
                    scale: active === item.id ? 1.15 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <item.icon
                    className={cn(
                      "h-[18px] w-[18px] sm:h-5 sm:w-5 mb-0.5 sm:mb-1 transition-all duration-300",
                      active === item.id
                        ? "stroke-pink-600 stroke-[2.5px]"
                        : "stroke-gray-600 stroke-2"
                    )}
                  />
                </motion.div>
                <motion.span
                  animate={{
                    scale: active === item.id ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "text-[10px] sm:text-xs font-medium transition-all duration-300 line-clamp-1",
                    active === item.id
                      ? "text-pink-600 font-semibold"
                      : "text-gray-600"
                  )}
                >
                  {item.label}
                </motion.span>
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.div>
    </div>
  );
};

export default BottomBar;
