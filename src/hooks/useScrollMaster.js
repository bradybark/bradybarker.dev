// src/hooks/useScrollMaster.js
import { useEffect, useRef } from 'react';
import { useAchievements } from './useAchievements';

/**
 * Hook that detects when user scrolls to the bottom of the page
 * and unlocks the "Scroll Master" achievement
 */
export const useScrollMaster = () => {
    const { unlockAchievement } = useAchievements();
    const hasTriggeredRef = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            // Don't trigger again if already triggered this session
            if (hasTriggeredRef.current) return;

            // Calculate how close to bottom (within 100px threshold)
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;

            const distanceFromBottom = scrollHeight - (scrollTop + clientHeight);

            // Trigger when within 100px of the bottom
            if (distanceFromBottom < 100) {
                hasTriggeredRef.current = true;
                unlockAchievement('scroll-master');
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [unlockAchievement]);
};
