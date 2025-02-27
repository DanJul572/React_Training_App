export type PropsType = {
  id: string;
  item: any;
  expanded: Record<number, boolean>;
  toggleExpand: (id: any) => void;
  enableDeleteButton?: boolean;
  enableDetailButton?: boolean;
  enableEditButton?: boolean;
  onDelete?: (data: any) => void;
  onDetail?: (data: any) => void;
  onEdit?: (data: any) => void;
};
