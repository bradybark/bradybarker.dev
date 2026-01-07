// src/hooks/useAchievements.js
import { useContext } from 'react';
import { AchievementContext } from '../context/AchievementContext';

export const useAchievements = () => useContext(AchievementContext);
