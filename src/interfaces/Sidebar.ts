import {ReactNode} from "react";

export interface SidebarInterface {
   name: string
   children: ReactNode
   type: "MENU" | "BASKET"
}

export interface SidebarBackdropInterface {
   children: ReactNode,
   closeSidebar(): void
}