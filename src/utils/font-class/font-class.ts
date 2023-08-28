/* 
    define local and google Next.js fonts
    https://nextjs.org/docs/app/building-your-application/optimizing/fonts
*/

import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-family-default",
});

export const FontClass = {
    DEFAULT: inter.className,
};
