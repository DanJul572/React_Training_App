import { useState } from 'react';

const useZListView = () => {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggleExpand = (id: any) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return {
    expanded,
    toggleExpand,
  };
};

export default useZListView;
