import React from 'react';
import { cn } from '@/lib/utils';
import PageHeader from './Header';
import PageSidebar from './Sidebar';

interface MainAppLayoutProps {
  children: React.ReactNode; // For the main content area (middle column)
  rightSidebarContent?: React.ReactNode; // For the right sidebar content (right column)
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({
  children,
  rightSidebarContent,
  className,
}) => {
  // PageHeader (TopHeader) is fixed, height: 60px.
  // PageSidebar (SidebarNav) is fixed, width: w-60 (240px), positioned below PageHeader.

  // Overall Layout Requirements:
  // "layoutType": "HLSBRS" (Header, Left Sidebar, Main Content, Right Sidebar)
  // "overall.definition": "grid-cols-[auto_1fr_auto] grid-rows-[auto_1fr]"
  // - Header (h-[60px]) spans the top row.
  // - Below the header:
  //   - Left Sidebar (w-60) is the first 'auto' column.
  //   - Main Content is the '1fr' column.
  //   - Right Sidebar is the second 'auto' column.
  // This is achieved by having fixed Header and Sidebar, and then structuring the remaining
  // space with margins and a grid for main content + right sidebar.

  return (
    <div className={cn('h-screen flex flex-col bg-background', className)}>
      <PageHeader /> {/* Fixed position, does not participate in the main content grid flow */}

      {/* Container for content below the fixed header */}
      <div className="flex flex-1 pt-[60px]"> {/* pt-[60px] to offset fixed PageHeader */}
        <PageSidebar /> {/* Fixed position, width w-60, effectively the first column */}

        {/* Container for main content and right sidebar, to the right of the fixed PageSidebar */}
        {/* This area uses a grid to manage main content (1fr) and right sidebar (auto) */}
        <div className="flex-1 ml-60 grid grid-cols-[minmax(0,1fr)_auto]">
          {/* Main Content Area */}
          {/* Sizing: "mainContent.min-w-0 overflow-y-auto" */}
          {/* Layout: "mainContent.layout: p-6" (gap-4 and flex flex-col are for content within) */}
          <main
            className={cn(
              'min-w-0 overflow-y-auto',
              'p-6' // Padding for the main content area
            )}
          >
            {children}
          </main>

          {/* Right Sidebar Area */}
          {/* Layout: "rightSidebar.layout: flex flex-col gap-4" (applied by content within) */}
          {rightSidebarContent && (
            <aside
              className={cn(
                'w-[360px] shrink-0', // Fixed width for right sidebar, common for Facebook-style layouts
                'overflow-y-auto',
                'border-l border-border',
                'p-6', // Consistent padding
                'hidden xl:block' // Responsive: hidden on smaller screens, visible on xl and up
              )}
            >
              {rightSidebarContent}
            </aside>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainAppLayout;