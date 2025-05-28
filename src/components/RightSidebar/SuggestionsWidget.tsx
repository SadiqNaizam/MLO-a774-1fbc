import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Plus, Users, X } from 'lucide-react';

interface GroupSuggestion {
  id: string;
  name: string;
  members: string;
  imageUrl: string;
  mutualFriends?: number;
  category?: string;
}

interface SuggestionsWidgetProps {
  className?: string;
}

const suggestedGroupsData: GroupSuggestion[] = [
  {
    id: 'group1',
    name: 'Mad Men (MADdicts)',
    members: '6,195 members',
    imageUrl: 'https://picsum.photos/seed/madmen/300/100',
    mutualFriends: 5,
    category: 'TV Show Fan Club'
  },
  {
    id: 'group2',
    name: 'Dexter Morgan Fans',
    members: '6,984 members',
    imageUrl: 'https://picsum.photos/seed/dexter/300/100',
    mutualFriends: 3,
    category: 'TV Show Fan Club'
  },
  {
    id: 'group3',
    name: 'Tech Innovators Hub',
    members: '12,300 members',
    imageUrl: 'https://picsum.photos/seed/tech/300/100',
    category: 'Technology & Innovation'
  },
];

const SuggestionsWidget: React.FC<SuggestionsWidgetProps> = ({ className }) => {
  const [groups, setGroups] = React.useState(suggestedGroupsData);

  const handleDismiss = (groupId: string) => {
    setGroups(prevGroups => prevGroups.filter(group => group.id !== groupId));
  };

  return (
    <Card className={cn('w-full shadow-sm', className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 px-4 pt-3">
        <CardTitle className="text-base font-semibold text-foreground">Suggested Groups</CardTitle>
        <Button variant="link" size="sm" className="text-sm text-primary hover:underline p-0 h-auto">
          See All
        </Button>
      </CardHeader>
      <CardContent className="p-4 pt-2 space-y-3">
        {groups.map((group) => (
          <div key={group.id} className="border border-border rounded-lg overflow-hidden">
            <div className="relative h-24 bg-muted">
              <img src={group.imageUrl} alt={group.name} className="w-full h-full object-cover" />
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-1 right-1 h-6 w-6 bg-black/30 hover:bg-black/50 text-white rounded-full"
                onClick={() => handleDismiss(group.id)}
              >
                <X className="h-3 w-3" />
              </Button>
               {/* Avatar group mockup - simplified */}
              <div className="absolute bottom-2 left-2 flex -space-x-2">
                {[...Array(Math.min(group.mutualFriends || 0, 3))].map((_, i) => (
                  <Avatar key={i} className="h-6 w-6 border-2 border-card">
                    <AvatarImage src={`https://i.pravatar.cc/24?u=mutual${group.id}${i}`} />
                    <AvatarFallback>{i}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>
            <div className="p-3">
              <h4 className="font-semibold text-sm text-foreground truncate">{group.name}</h4>
              <p className="text-xs text-muted-foreground">{group.members}</p>
              {group.category && <p className="text-xs text-muted-foreground mt-0.5">{group.category}</p>}
              <Button variant="outline" size="sm" className="w-full mt-2 text-primary border-primary/50 hover:bg-primary/5 hover:text-primary">
                <Plus className="h-4 w-4 mr-1" /> Join Group
              </Button>
            </div>
          </div>
        ))}
        {groups.length === 0 && (
          <p className="text-sm text-muted-foreground text-center py-4">No more suggestions for now.</p>
        )}
      </CardContent>
    </Card>
  );
};

export default SuggestionsWidget;
