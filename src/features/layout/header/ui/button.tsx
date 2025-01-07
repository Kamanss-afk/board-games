import { cn } from '@/shared/lib/css';
import { Button, ButtonProps } from '@/shared/ui/button';

export function HeaderButton({ className, ...props }: ButtonProps) {
  return(
    <Button
      {...props}
      variant={'outline'}
      className={cn('text-black dark:bg-background dark:text-white', className)}
    />
  );
}