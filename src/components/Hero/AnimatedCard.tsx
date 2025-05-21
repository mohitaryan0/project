import { forwardRef } from 'react';
import clsx from 'clsx';

interface AnimatedCardProps {
  isOpen: boolean;
  onClick: () => void;
  isMobile?: boolean;
}

const AnimatedCard = forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ isOpen, onClick, isMobile }, ref) => {
    const content = {
      title: "🚶‍♂️ Ready to Make a Comeback?",
      subtitle: "Steppps is here to get you moving with fun, flexible challenges made for every type of stepper:",
      items: [
        {
          icon: "👣",
          title: "Walk • Lose • Win",
          description: "Join the leaderboard and win cash prizes by stepping your way to the top by June 2025."
        },
        {
          icon: "🏏",
          title: "IPL Challenges",
          description: "Not into competition? Walk to support your favorite IPL team — no pressure, just pride."
        },
        {
          icon: "🔒",
          title: "Personal Challenges (Premium)",
          description: "Prefer privacy? Set your own step goals and timelines. You're the creator and judge of your own challenge."
        }
      ]
    };

    return (
      <div
        ref={ref}
        onClick={onClick}
        className={clsx(
          isMobile
            ? 'bg-white dark:bg-gray-800 shadow-lg z-50 p-4 xs:p-6 flex items-center justify-center cursor-pointer transform transition-transform duration-500 origin-top w-full mb-4 rounded-lg'
            : 'absolute left-44 top-1/2 -translate-y-1/2 h-[300px] w-[800px] bg-green/70 shadow-lg z-50 p-6 flex items-center justify-center cursor-pointer transform transition-transform duration-500 origin-top',
          isOpen ? 'scale-y-100' : 'scale-y-0'
        )}
      >
        <div className={`text-black dark:text-white ${isMobile ? 'text-xs xs:text-sm' : 'text-sm md:text-base'}`}>
          <p className="mb-4 font-bold">{content.title}</p>
          <p className="font-semibold mb-2">{content.subtitle}</p>
          <ul className="space-y-2">
            {content.items.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">{item.icon}</span>
                <span>
                  <strong>{item.title}</strong>
                  <br />
                  {item.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
);

AnimatedCard.displayName = 'AnimatedCard';

export default AnimatedCard; 