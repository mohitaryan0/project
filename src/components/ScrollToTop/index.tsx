import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { IconQrcode } from "@tabler/icons-react";

export default function ScrollToTop() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed right-8 bottom-8 z-99">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative"
      >
        {/* Main Button */}
        <div
          aria-label="scan qr code"
          className="bg-primary hover:bg-secondary flex h-10 w-10 cursor-pointer items-center justify-center rounded-md text-white shadow-md transition duration-300 ease-in-out"
        >
          <IconQrcode size={24} className="text-white" />
        </div>

        {/* Scanner Popup */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-14 right-0 bg-background dark:bg-background-dark p-4 rounded-lg shadow-xl border border-border dark:border-border-dark"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="relative w-[200px] h-[200px] bg-background dark:bg-background-dark p-2 rounded-lg overflow-hidden">
                  <Image
                    src="/images/about/scan.png"
                    alt="Scanner"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-foreground dark:text-foreground-dark">
                    Try Me
                  </h3>
                  <p className="text-sm text-muted dark:text-muted-dark">
                    Scan to explore
                  </p>
                </div>
              </div>
              {/* Triangle pointer */}
              <div className="absolute -bottom-2 right-4 w-4 h-4 bg-background dark:bg-background-dark border-r border-b border-border dark:border-border-dark transform rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}