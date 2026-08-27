import Link from "next/link";
import { Menu, ChevronRight, CircleUserRound, ChevronDown  } from "lucide-react";



type BreadCrumbItem = {
    label: string;
    href: string;
};

type BreadCrumbProps = {
    items: BreadCrumbItem[];
};

export const BreadCrumb = ({ items }: BreadCrumbProps) => {
    return (
        <div className="flex w-full h-20 border-b border-gray-200">
            <nav className="flex flex-row items-center w-fit pl-25">
                {/* <button className="mx-10 cursor-pointer"><Menu size={24} /></button> */}
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex font-semibold text-sm ${
                                isLast ? "text-gray-400" : "text-acento"
                            }`}
                        >
                            {item.label}

                            {!isLast && (
                                <ChevronRight
                                    size={20}
                                    className="mt-0.5 mx-3 text-gray-400"
                                />
                            )}
                        </Link>
                    );
                })}
            </nav>
            <div className="flex flex-row items-center ml-auto pr-10">
                <CircleUserRound size={35} strokeWidth={0.5}/>
                <div className="pl-3 text-sm">
                    <p>Admin</p>
                    <p className="text-gray-400">Administrador</p>
                </div>
                <ChevronDown className="pl-2 text-gray-500"/>
            </div>
        </div>
        
    );
};