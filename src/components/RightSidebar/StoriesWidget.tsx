import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlusCircle, Archive, Settings } from 'lucide-react';

interface Story {
  id: string;
  userName: string;
  userAvatarUrl: string;
  storyImageUrl: string;
}

interface StoriesWidgetProps {
  className?: string;
}

const storiesData: Story[] = [
  {
    id: 'story1',
    userName: 'Jane Doe',
    userAvatarUrl: 'https://i.pravatar.cc/40?u=janedoe',
    storyImageUrl: 'https://picsum.photos/seed/story1/150/250',
  },
  {
    id: 'story2',
    userName: 'John Smith',
    userAvatarUrl: 'https://i.pravatar.cc/40?u=johnsmith',
    storyImageUrl: 'https://picsum.photos/seed/story2/150/250',
  },
  {
    id: 'story3',
    userName: 'Alice Brown',
    userAvatarUrl: 'https://i.pravatar.cc/40?u=alicebrown',
    storyImageUrl: 'https://picsum.photos/seed/story3/150/250',
  },
];

const StoriesWidget: React.FC<StoriesWidgetProps> = ({ className }) => {
  return (
    <Card className={cn('w-full shadow-sm', className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 px-4 pt-3">
        <CardTitle className="text-lg font-semibold text-foreground">Stories</CardTitle>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="text-xs text-primary hover:bg-muted p-1">
            <Archive className="h-4 w-4 mr-1" /> Archive
          </Button>
          <Button variant="ghost" size="sm" className="text-xs text-primary hover:bg-muted p-1">
            <Settings className="h-4 w-4 mr-1" /> Settings
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2">
          {/* Add to Your Story Card */}
          <div className="relative aspect-[2/3] rounded-lg overflow-hidden group border border-border bg-muted/30 hover:border-primary/50 cursor-pointer">
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-card flex flex-col items-center justify-end pb-2">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full p-1.5 border-2 border-card">
                    <PlusCircle className="h-5 w-5" />
                </div>
              <p className="text-xs font-semibold text-center text-foreground mt-3">Add to Your Story</p>
              <p className="text-xs text-muted-foreground text-center px-1">Share a photo, video or write something</p>
            </div>
          </div>

          {/* Dummy Stories */}
          {storiesData.slice(0,2).map((story) => (
            <div
              key={story.id}
              className="relative aspect-[2/3] rounded-lg overflow-hidden group cursor-pointer bg-cover bg-center"
              style={{ backgroundImage: `url(${story.storyImageUrl})` }}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              <Avatar className="absolute top-2 left-2 h-8 w-8 border-2 border-primary">
                <AvatarImage src={story.userAvatarUrl} alt={story.userName} />
                <AvatarFallback>{story.userName.substring(0, 1)}</AvatarFallback>
              </Avatar>
              <p className="absolute bottom-2 left-2 right-2 text-xs font-medium text-white truncate">
                {story.userName}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default StoriesWidget;
