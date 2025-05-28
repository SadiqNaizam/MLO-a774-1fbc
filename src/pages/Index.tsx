import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import PostCard from '@/components/NewsFeed/PostCard';
import StoriesWidget from '@/components/RightSidebar/StoriesWidget';
import SuggestionsWidget from '@/components/RightSidebar/SuggestionsWidget';

// TypeScript interfaces for Post data structures
interface UserProfile {
  name: string;
  avatarUrl: string;
}

interface PostLocationDetails {
  place: string;
  type: string; // e.g., "City", "Restaurant"
  context?: string; // e.g., "Bryan Durand and 2 others have been here"
}

type PostPrivacy = 'public' | 'friends' | 'only_me';

interface PostData {
  id: string;
  user: UserProfile;
  timestamp: string; // e.g., "2 hrs ago", "Yesterday at 8:15 PM"
  privacy?: PostPrivacy;
  content?: string;
  imageSrc?: string;
  locationInfo?: PostLocationDetails;
  likes: number;
  comments: number;
  shares: number;
}

// Dummy data for posts, adhering to the PostData interface
const dummyPostsData: PostData[] = [
  {
    id: 'post1',
    user: {
      name: 'Julia Fillory',
      avatarUrl: 'https://i.pravatar.cc/48?u=juliafillory',
    },
    timestamp: '2 hrs',
    privacy: 'friends',
    content: "Checking out some new stores downtown! So many cool finds today. Can't wait to show you all. 🛍️",
    locationInfo: {
      place: 'Raleigh, North Carolina',
      type: 'City / Downtown Area',
      context: 'Bryan Durand and 2 others have been here',
    },
    imageSrc: 'https://picsum.photos/seed/raleighmap/600/400',
    likes: 128,
    comments: 17,
    shares: 5,
  },
  {
    id: 'post2',
    user: {
      name: 'Alex Green',
      avatarUrl: 'https://i.pravatar.cc/48?u=alexgreen',
    },
    timestamp: '5 hrs ago',
    privacy: 'public',
    content: "Just finished an amazing book on software architecture. Highly recommend 'Designing Data-Intensive Applications' by Martin Kleppmann. So many insights! Feeling inspired to refactor everything now. 😂 #reading #techbooks #softwarearchitecture #mustread",
    likes: 78,
    comments: 22,
    shares: 10,
  },
  {
    id: 'post3',
    user: {
      name: 'Maria Garcia',
      avatarUrl: 'https://i.pravatar.cc/48?u=mariagarcia',
    },
    timestamp: 'Yesterday at 8:15 PM',
    privacy: 'friends',
    content: "My new WFH setup is finally complete! 💻🪴 So happy with how it turned out. Productivity levels are 📈! What do you think? #wfh #homeoffice #desksetup #productivity",
    imageSrc: 'https://picsum.photos/seed/wfhsetup/600/750',
    likes: 230,
    comments: 45,
    shares: 12,
  },
  {
    id: 'post4',
    user: {
        name: 'David Lee',
        avatarUrl: 'https://i.pravatar.cc/48?u=davidlee',
    },
    timestamp: '3 days ago',
    privacy: 'public',
    content: "Exploring the beautiful hiking trails near Mount Rainier. The views are breathtaking! Nature truly is the best therapy. 🏞️🌲 #hiking #nature #mountrainier #adventure",
    imageSrc: 'https://picsum.photos/seed/rainier/600/450',
    locationInfo: {
        place: 'Mount Rainier National Park',
        type: 'National Park'
    },
    likes: 312,
    comments: 58,
    shares: 25,
  }
];

// The NewsFeedPage component, which serves as the main index page for the News Feed.
const NewsFeedPage: React.FC = () => {
  // Content for the right sidebar, stacking Stories and Suggestions widgets.
  // Layout Requirements (rightSidebar.layout): "flex flex-col gap-4"
  const rightSidebarContent = (
    <div className="flex flex-col gap-4">
      <StoriesWidget />
      <SuggestionsWidget />
      {/* Additional right sidebar components like Chat or Contacts could be added here if specified */}
    </div>
  );

  // The main content area will display a list of posts.
  // Layout Requirements (mainContent.layout): "flex flex-col gap-4 p-6"
  // p-6 is handled by MainAppLayout's <main> tag. This div handles the "flex flex-col gap-4".
  return (
    <MainAppLayout rightSidebarContent={rightSidebarContent}>
      <div className="flex flex-col gap-4">
        {/* 
          A "Create Post" widget would typically be rendered at the top of the news feed.
          e.g., <CreatePostWidget />
          However, it's not explicitly listed in the NewsFeedPage's organism composition 
          as per the provided project requirements for this specific generation task.
        */}
        {dummyPostsData.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </MainAppLayout>
  );
};

export default NewsFeedPage;
