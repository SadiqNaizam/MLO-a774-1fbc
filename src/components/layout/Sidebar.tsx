import React from 'react';
import { cn } from '@/lib/utils';
import SidebarNav from '../NewsFeed/SidebarNav'; // Assuming SidebarNav is in components/NewsFeed/

interface SidebarProps {
  className?: string;
  user?: {
    name: string;
    avatarUrl?: string;
  };
}

const Sidebar: React.FC<SidebarProps> = ({ className, user }) => {
  // SidebarNav component from context already handles its own fixed positioning,
  // width (w-60), height (h-screen), and top offset (top-[60px]).
  // This Sidebar component acts as a wrapper or direct export for SidebarNav
  // within the layout structure.
  // The className prop is passed to SidebarNav for any additional styling overrides or additions.

  // Layout Requirements for 'sidebar':
  // "layout": "flex flex-col h-screen fixed left-0 bg-sidebar"
  // "sizing.sidebar": "w-60"
  // SidebarNav.tsx implements: 'w-60 bg-sidebar ... h-screen fixed left-0 top-[60px] ...'
  // This is consistent with the requirements, with SidebarNav itself being the fixed element.

  return <SidebarNav className={className} user={user} />;
};

export default Sidebar;