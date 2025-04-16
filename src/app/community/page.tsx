import { DrawerFiltersEvents } from '@/components/drawer/default-drawer-components/filters/default-drawer-filters';

import './index.css';

import { CommunityOrEventTab } from '@/components/drawer/default-drawer-components/ui/place-or-event-tab';
import { GrayBlockArrow } from '@/components/drawer/default-drawer-components/ui/gray-block-arrow';
import { CommunityMainBody } from '@/components/community/community-main-body';
import { DrawerFooter } from '@/components/drawer/default-drawer-components/drawer-footer';

export default function Page(): React.JSX.Element {
  return (
    <div className="communities-main-page container">
      <CommunityOrEventTab />
      <DrawerFiltersEvents isScroll={false} />
      <GrayBlockArrow/>
      <CommunityMainBody/>
      <DrawerFooter drawerState='nofull'/>
    </div>
  );
}
