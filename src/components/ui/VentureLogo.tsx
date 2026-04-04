import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface VentureLogoProps {
    ventureId: 'accurify' | 'bakr' | 'valid8' | string;
    collapsed?: boolean;
    className?: string;
    color?: 'primary' | 'gray' | 'white';
}

export const VentureLogo: React.FC<VentureLogoProps> = ({
    ventureId,
    collapsed = false,
    className = '',
    color = 'primary'
}) => {
    // Styles based on the user-provided snippet for Accurify
    if (ventureId === 'accurify') {
        return (
            <div className={cn(
                "inline-flex items-center font-sans tracking-[-0.04em] leading-none select-none transition-all duration-200 ease-in-out",
                className
            )}>
                <span className={cn(
                    "font-bold transition-all duration-200",
                    collapsed ? "text-[28px]" : "text-[24px] mb-[1px]",
                    color === 'primary' && "text-[#0f62fe]",
                    color === 'gray' && "text-[#262626]",
                    color === 'white' && "text-white"
                )}>
                    {collapsed ? 'a' : 'accurify'}
                </span>
            </div>
        );
    }

    if (ventureId === 'bakr') {
        return (
            <div className={cn("relative h-8 w-auto flex items-center", className)}>
                <Image
                    src="/images/bakr_logo.png"
                    alt="Bakr Logo"
                    width={collapsed ? 32 : 100}
                    height={32}
                    className="h-full w-auto object-contain"
                />
            </div>
        );
    }

    if (ventureId === 'valid8') {
        return (
            <div className={cn("relative h-8 w-auto flex items-center", className)}>
                <Image
                    src={collapsed ? "/images/valid8_icon.png" : "/images/valid8_logo.png"}
                    alt="Valid8 Logo"
                    width={collapsed ? 32 : 100}
                    height={32}
                    className="h-full w-auto object-contain"
                />
            </div>
        );
    }

    // Fallback for other ventures
    const brandColors: Record<string, string> = {
        bakr: '#F59E0B',
        valid8: '#1e08e5ff',
    };

    const activeColor = brandColors[ventureId.toLowerCase()] || '#FF6B6B';

    return (
        <div className={cn(
            "inline-flex items-center font-sans tracking-[-0.04em] leading-none select-none transition-all duration-200 ease-in-out",
            className
        )}>
            <span
                className={cn(
                    "font-bold transition-all duration-200",
                    collapsed ? "text-[28px] uppercase" : "text-[24px] mb-[1px] lowercase",
                    color === 'gray' && "text-[#262626]",
                    color === 'white' && "text-white"
                )}
                style={{ color: color === 'primary' ? activeColor : undefined }}
            >
                {collapsed ? ventureId[0].toLowerCase() : ventureId.toLowerCase()}
            </span>
        </div>
    );
};
