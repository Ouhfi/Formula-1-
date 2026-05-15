import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'outline';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  block?: boolean;
  children: ReactNode;
};

export function Button({
  variant = 'outline',
  block = false,
  className = '',
  children,
  ...rest
}: Props) {
  return (
    <button
      type="button"
      className={[
        'btn',
        variant === 'primary' ? 'btn-primary' : 'btn-outline',
        block ? 'btn-block' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {children}
    </button>
  );
}
