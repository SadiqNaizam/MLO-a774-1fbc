import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Facebook,
  Search,
  Home,
  Users,
  MessageCircle,
  Bell,
  ChevronDown,
  HelpCircle,
  Settings2
} from 'lucide-react';

interface TopHeaderProps {
  className?: string;
  user?: {
    name: string;
    avatarUrl?: string;
  };
}

const TopHeader: React.FC<TopHeaderProps> = ({ className, user }) => {
  const defaultUser = {
    name: 'Olenna Mason',
    avatarUrl: 'https://i.pravatar.cc/32?u=olennamason_header'
  };
  const currentUser = user || defaultUser;

  return (
    <header className={cn('bg-card text-card-foreground border-b border-border fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 h-[60px]', className)}>
      {/* Left Section */}
      <div className="flex items-center space-x-2">
        <Facebook className="h-10 w-10 text-primary" />
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search Facebook"
            className="pl-10 pr-3 py-2 h-10 w-60 rounded-full bg-background focus:bg-white"
          />
        </div>
      </div>

      {/* Middle Section - Nav Links (simplified as per image reference) */}
      <nav className="flex items-center space-x-2">
        {/* These are often centrally aligned or part of user actions area depending on FB version */}
        {/* For this design, they are closer to user actions */}
      </nav>

      {/* Right Section */}
      <div className="flex items-center space-x-2">
        <Button variant="ghost" className="hidden md:flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-muted">
          <Avatar className="h-7 w-7">
            {currentUser.avatarUrl && <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} />}
            <AvatarFallback className="text-xs">{currentUser.name.substring(0, 1)}</AvatarFallback>
          </Avatar>
          <span className="font-semibold text-sm text-foreground">{currentUser.name.split(' ')[0]}</span>
        </Button>
        <Button variant="ghost" className="px-3 py-2 rounded-md text-foreground hover:bg-muted hidden sm:inline-flex">Home</Button>
        <Button variant="ghost" className="px-3 py-2 rounded-md text-foreground hover:bg-muted hidden sm:inline-flex">Find Friends</Button>
        
        {/* Icon Buttons with Badges */}
        <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-muted/50 hover:bg-muted relative">
          <Users className="h-5 w-5 text-foreground" />
          <Badge variant="destructive" className="absolute -top-1 -right-1 p-0.5 h-4 min-w-[1rem] text-xs flex items-center justify-center">8</Badge>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-muted/50 hover:bg-muted relative">
          <MessageCircle className="h-5 w-5 text-foreground" />
          <Badge variant="destructive" className="absolute -top-1 -right-1 p-0.5 h-4 min-w-[1rem] text-xs flex items-center justify-center">36</Badge>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-muted/50 hover:bg-muted">
          <Bell className="h-5 w-5 text-foreground" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-muted/50 hover:bg-muted">
          <HelpCircle className="h-5 w-5 text-foreground" />
        </Button>
         {/* <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-muted/50 hover:bg-muted">
          <Settings2 className="h-5 w-5 text-foreground" />
        </Button> */}
      </div>
    </header>
  );
};

export default TopHeader;
