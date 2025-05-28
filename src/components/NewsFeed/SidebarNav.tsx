import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Newspaper,
  MessageCircle,
  Tv2,
  Store,
  Users,
  CalendarDays,
  Flag,
  ListChecks,
  HeartHandshake,
  ChevronDown,
  Plus,
  Settings,
  UserCircle,
  RadioTower, // Placeholder for Farmville-like icon
  Briefcase // Placeholder for 'Create' category generic icons
} from 'lucide-react';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  href?: string;
  isActive?: boolean;
  isAvatar?: boolean;
  avatarSrc?: string;
  avatarFallback?: string;
  className?: string;
  iconClassName?: string;
}

const NavItem: React.FC<NavItemProps> = ({
  icon: IconComponent,
  label,
  href = '#',
  isActive = false,
  isAvatar = false,
  avatarSrc,
  avatarFallback = 'AV',
  className,
  iconClassName
}) => {
  return (
    <a
      href={href}
      className={cn(
        'flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium',
        'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
        isActive ? 'bg-sidebar-accent text-sidebar-primary font-semibold' : 'text-sidebar-foreground',
        className
      )}
    >
      {isAvatar ? (
        <Avatar className="h-7 w-7">
          {avatarSrc && <AvatarImage src={avatarSrc} alt={label} />}
          <AvatarFallback className="bg-muted text-muted-foreground text-xs">{avatarFallback}</AvatarFallback>
        </Avatar>
      ) : (
        <IconComponent className={cn('h-5 w-5', iconClassName, isActive ? 'text-sidebar-primary' : 'text-sidebar-foreground/80')} />
      )}
      <span>{label}</span>
    </a>
  );
};

interface SidebarNavProps {
  className?: string;
  user?: {
    name: string;
    avatarUrl?: string;
  };
}

const SidebarNav: React.FC<SidebarNavProps> = ({ className, user }) => {
  const defaultUser = {
    name: 'Olenna Mason',
    avatarUrl: 'https://i.pravatar.cc/40?u=olennamason'
  };
  const currentUser = user || defaultUser;

  const mainNavItems = [
    { icon: Newspaper, label: 'News Feed', isActive: true },
    { icon: MessageCircle, label: 'Messenger' },
    { icon: Tv2, label: 'Watch' },
    { icon: Store, label: 'Marketplace' },
  ];

  const shortcuts = [
    { icon: RadioTower, label: 'FarmVille 2', isAvatar: false, avatarFallback: 'FV', iconClassName: 'text-yellow-500' }, 
  ];

  const exploreItems = [
    { icon: CalendarDays, label: 'Events' },
    { icon: Flag, label: 'Pages' },
    { icon: Users, label: 'Groups' },
    { icon: ListChecks, label: 'Friend Lists' },
    { icon: HeartHandshake, label: 'Fundraisers' },
    { icon: ChevronDown, label: 'See More...' },
  ];

  const createItems = [
    { icon: Plus, label: 'Ad', iconClassName: 'text-blue-500' },
    { icon: Flag, label: 'Page', iconClassName: 'text-orange-500' },
    { icon: Users, label: 'Group', iconClassName: 'text-green-500' },
    { icon: CalendarDays, label: 'Event', iconClassName: 'text-red-500' },
    { icon: HeartHandshake, label: 'Fundraiser', iconClassName: 'text-purple-500' },
  ];

  return (
    <aside className={cn('w-60 bg-sidebar text-sidebar-foreground h-screen fixed left-0 top-[60px] pt-4 pb-4', className)}>
      <ScrollArea className="h-full px-2">
        <nav className="flex flex-col space-y-1">
          <NavItem 
            icon={UserCircle} 
            label={currentUser.name} 
            isAvatar 
            avatarSrc={currentUser.avatarUrl} 
            avatarFallback={currentUser.name.substring(0, 2).toUpperCase()} 
          />
          {mainNavItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </nav>

        <div className="mt-4 pt-4 border-t border-sidebar-border/50">
          <h3 className="px-3 mb-2 text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider">Shortcuts</h3>
          <nav className="flex flex-col space-y-1">
            {shortcuts.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
          </nav>
        </div>

        <div className="mt-4 pt-4 border-t border-sidebar-border/50">
          <h3 className="px-3 mb-2 text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider">Explore</h3>
          <nav className="flex flex-col space-y-1">
            {exploreItems.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
          </nav>
        </div>

        <div className="mt-4 pt-4 border-t border-sidebar-border/50">
          <h3 className="px-3 mb-2 text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider">Create</h3>
          <nav className="flex flex-col space-y-1">
            {createItems.map((item) => (
              <NavItem key={item.label} icon={item.icon} label={item.label} iconClassName={item.iconClassName} />
            ))}
          </nav>
        </div>
        
        <div className="px-3 mt-6 text-xs text-sidebar-foreground/50">
          <a href="#" className="hover:underline">Privacy</a> · 
          <a href="#" className="hover:underline">Terms</a> · 
          <a href="#" className="hover:underline">Advertising</a> · 
          <a href="#" className="hover:underline">Ad Choices</a> · 
          <a href="#" className="hover:underline">Cookies</a> · More · Meta © 2024
        </div>
      </ScrollArea>
    </aside>
  );
};

export default SidebarNav;
