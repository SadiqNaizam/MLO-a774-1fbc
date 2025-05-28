import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import {
  MoreHorizontal,
  ThumbsUp,
  MessageSquare,
  Share2,
  Globe,
  Users,
  MapPin
} from 'lucide-react';

interface PostCardProps {
  post: {
    id: string;
    user: {
      name: string;
      avatarUrl: string;
    };
    timestamp: string;
    privacy?: 'public' | 'friends' | 'only_me';
    content?: string;
    imageSrc?: string; // For image posts
    locationInfo?: {
      place: string;
      type: string;
      context?: string;
    };
    likes: number;
    comments: number;
    shares: number;
  };
  className?: string;
}

const PostCard: React.FC<PostCardProps> = ({ post, className }) => {
  const PrivacyIcon = post.privacy === 'public' ? Globe : post.privacy === 'friends' ? Users : Users;

  return (
    <Card className={cn('w-full max-w-xl mx-auto shadow-sm', className)}>
      <CardHeader className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={post.user.avatarUrl} alt={post.user.name} />
              <AvatarFallback>{post.user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-sm text-foreground">
                {post.user.name}
                {post.locationInfo && (
                  <span className="font-normal text-muted-foreground"> is in <span className="font-semibold text-foreground">{post.locationInfo.place}</span>.</span>
                )}
              </p>
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <span>{post.timestamp}</span>
                {post.privacy && <PrivacyIcon className="h-3 w-3" />}
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-muted rounded-full">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        {post.content && <p className="px-4 pb-3 text-sm text-foreground whitespace-pre-wrap">{post.content}</p>}
        {post.imageSrc && (
          <div className="w-full aspect-video bg-muted flex items-center justify-center text-muted-foreground">
            {/* In a real app, this would be an <img /> or a more complex media component */}
            {/* <img src={post.imageSrc} alt="Post image" className="w-full h-full object-cover" /> */}
            Map/Image Placeholder (actual image: {post.imageSrc})
          </div>
        )}
        {post.locationInfo && !post.imageSrc && (
            <div className="p-4 border-t border-border">
                <div className="flex items-start space-x-3">
                    <MapPin className="h-10 w-10 text-muted-foreground mt-1" />
                    <div>
                        <p className="font-semibold text-foreground">{post.locationInfo.place}</p>
                        <p className="text-sm text-muted-foreground">{post.locationInfo.type}</p>
                        {post.locationInfo.context && <p className="text-xs text-muted-foreground">{post.locationInfo.context}</p>}
                    </div>
                    <Button variant="outline" size="sm" className="ml-auto">Save</Button>
                </div>
            </div>
        )}
      </CardContent>

      <CardFooter className="p-4 flex flex-col items-start space-y-3">
        {(post.likes > 0 || post.comments > 0 || post.shares > 0) && (
          <div className="flex justify-between w-full text-xs text-muted-foreground">
            <span>{post.likes > 0 ? `${post.likes} Likes` : ''}</span>
            <div className="space-x-2">
              <span>{post.comments > 0 ? `${post.comments} Comments` : ''}</span>
              <span>{post.shares > 0 ? `${post.shares} Shares` : ''}</span>
            </div>
          </div>
        )}
        <div className="w-full border-t border-border pt-2 flex justify-around">
          <Button variant="ghost" className="flex-1 text-muted-foreground hover:bg-muted hover:text-foreground">
            <ThumbsUp className="h-5 w-5 mr-2" /> Like
          </Button>
          <Button variant="ghost" className="flex-1 text-muted-foreground hover:bg-muted hover:text-foreground">
            <MessageSquare className="h-5 w-5 mr-2" /> Comment
          </Button>
          <Button variant="ghost" className="flex-1 text-muted-foreground hover:bg-muted hover:text-foreground">
            <Share2 className="h-5 w-5 mr-2" /> Share
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
