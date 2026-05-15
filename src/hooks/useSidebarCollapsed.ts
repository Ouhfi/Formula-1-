import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

const KEY = 'pitlane-sidebar-collapsed';

export function useSidebarCollapsed() {
  const [collapsed, setCollapsed] = useLocalStorage(KEY, false);

  const toggle = useCallback(() => {
    setCollapsed((c) => !c);
  }, [setCollapsed]);

  return { collapsed, setCollapsed, toggle };
}
