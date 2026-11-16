import type { Metadata } from 'next';
import { CommunityPage } from '@/components/Community/Community';

export const metadata: Metadata = { title: 'Donate' };

export default function Page() {
  return <CommunityPage kind="donate" />;
}
