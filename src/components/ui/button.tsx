import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[12px] font-bold text-xs transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2B85] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer',
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-b from-[#FF3D92] via-[#FF2B85] to-[#E01E71] text-white border border-white/20 shadow-md shadow-[#FF2B85]/20 hover:from-[#FF4D9C] hover:via-[#FF338C] hover:to-[#D41565] hover:shadow-lg hover:shadow-[#FF2B85]/30 active:scale-[0.99]',
        secondary:
          'bg-white text-[#343B46] border border-[#E5E7EB] hover:bg-[#F5F5F6] hover:border-[#343B46] shadow-xs hover:shadow-md active:scale-[0.99]',
        outline:
          'border border-[#E5E7EB] bg-transparent text-[#343B46] hover:bg-[#F5F5F6] hover:text-[#000000] active:scale-[0.99]',
        ghost:
          'text-[#343B46] hover:bg-[#F5F5F6] hover:text-[#000000]',
        brandOutline:
          'border border-[#FF2B85] bg-white text-[#FF2B85] hover:bg-[#FFF0F6] shadow-xs active:scale-[0.99]',
        brandGhost:
          'text-[#FF2B85] hover:bg-[#FFF0F6]',
        destructive:
          'bg-rose-500 text-white hover:bg-rose-600 shadow-xs active:scale-[0.99]',
        link:
          'text-[#FF2B85] underline-offset-4 hover:underline p-0 h-auto',
      },
      size: {
        default: 'h-11 px-5 py-2.5',
        xs: 'h-7 px-2.5 text-[11px]',
        sm: 'h-9 px-3.5 text-xs',
        lg: 'h-12 px-6 text-sm',
        icon: 'h-10 w-10 p-0',
        'icon-sm': 'h-8 w-8 p-0',
        'icon-xs': 'h-6 w-6 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
