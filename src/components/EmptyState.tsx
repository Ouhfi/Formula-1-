import type { ReactNode } from 'react';

type Props = {
  title: string;
  children?: ReactNode;
  action?: ReactNode;
};

export function EmptyState({ title, children, action }: Props) {
  return (
    <div className="card empty-state">
      <h2 className="empty-state__title">{title}</h2>
      {children ? <div className="empty-state__text">{children}</div> : null}
      {action ? <div className="empty-state__action">{action}</div> : null}
    </div>
  );
}
