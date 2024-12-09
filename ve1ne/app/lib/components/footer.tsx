import { east } from "@/lib/fonts/fonts";
import clsx from 'clsx'
const Footer = () => {
    return (
        <footer className={clsx("flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 text-center",east.className)}>
        <div className="flex flex-col items-center  pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6"><form className="flex w-full justify-center md:w-auto"><div className="w-60 min-w-0 shrink"><input id=":S4:" aria-label="Email address" placeholder="Email address" autoComplete="email" required className="block w-full appearance-none rounded-lg border border-gray-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm" type="email"/></div><button className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors relative overflow-hidden bg-yellow-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors ml-4 flex-none" type="submit" color="cyan" ><span className="hidden lg:inline">Join our newsletter</span><span className="lg:hidden">Join newsletter</span></button></form><p className="mt-6 text-sm text-gray-500 md:mt-0">© Copyright 2024. All rights reserved.</p></div>
    </footer>
    );
}

export default Footer;