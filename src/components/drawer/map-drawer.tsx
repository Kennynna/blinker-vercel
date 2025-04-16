'use client';

import * as React from 'react';
import { useDrawerValue } from '@/shared/store/drawer-value';

import { DrawerOpenAndFullOpen } from '@/hooks/use-drawer-open';
import { CollectionDrawerItem, DefaultDrawer, FilterDrawerItems, MarkerDrawer } from '@/components/drawer';


interface SwiperableEdgeDrawerProps {
  handleUserLocationClick: () => void;
}

export function SwipeableEdgeDrawer({ handleUserLocationClick }: SwiperableEdgeDrawerProps): React.JSX.Element {
  const { open, fullOpen, setFullOpen } = DrawerOpenAndFullOpen();
  const { item, value, setWhatOpen } = useDrawerValue();

  function closeMarkerDrawer(): void {
    setFullOpen(!fullOpen);
    setWhatOpen('default');
  }

  return (
    <div>
      {value === 'default' && <DefaultDrawer handleUserLocationClick={handleUserLocationClick} />}

      {value === 'filter' && <FilterDrawerItems />}

      {value === 'collection' && <CollectionDrawerItem onClose={setWhatOpen} />}

      {value === 'markItem' && item ? (
        <MarkerDrawer eventId={item.id} handleCloseFullScreen={closeMarkerDrawer} setWhatOpen={setWhatOpen} />
      ) : null}
    </div>
  );
}
