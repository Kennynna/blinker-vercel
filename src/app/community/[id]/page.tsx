import { Community } from '@/components/community/community';

interface PageProps {
  params: { id: string };
}

export default function CommunityPage({ params }: PageProps) {
  const { id } = params;

  return (
    <div className="community-page">
      <Community />
    </div>
  );
}
