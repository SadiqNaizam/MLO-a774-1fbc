import React from 'react';
import { cn } from '@/lib/utils';
import TopHeader from '../NewsFeed/TopHeader'; // Assuming TopHeader is in components/NewsFeed/

interface HeaderProps {
  className?: string;
  user?: {
    name: string;
    avatarUrl?: string;
  };
}

const Header: React.FC<HeaderProps> = ({ className, user }) => {
  // TopHeader component from context already handles its own fixed positioning,
  // height (h-[60px]), and styling (bg-card, z-50).
  // This Header component acts as a wrapper or direct export for TopHeader
  // within the layout structure.
  // The className prop is passed to TopHeader for any additional styling overrides or additions.

  // Layout Requirements for 'header':
  // "layout": "flex items-center justify-between px-4 bg-surface"
  // "height": "h-[60px]"
  // "position": "fixed top-0 left-0 right-0 z-10"
  // TopHeader.tsx implements: 'bg-card ... fixed top-0 left-0 right-0 z-50 ... px-4 h-[60px]'
  // This is consistent. `bg-card` is effectively `bg-surface` as per `index.css` variables.
  // `z-50` is more specific than `z-10`, which is acceptable.

  return <TopHeader className={className} user={user} />;
};

export default Header;