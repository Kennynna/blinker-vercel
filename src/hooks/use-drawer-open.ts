'use client';

import { useState } from 'react';





type DrawerState = 'closed' | 'open' | 'fullOpen';



export function DrawerOpenAndFullOpen() {
  const [drawerState, setDrawerState] = useState<DrawerState>('open');

  const [open, setOpen] = useState(true);
  const [fullOpen, setFullOpen] = useState(false);

  return { open, fullOpen, setOpen, setFullOpen, drawerState, setDrawerState };
}
