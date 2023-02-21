import {ReactNode} from "react";

export interface Sidebar {
   name: string
   children: ReactNode
   type: "MENU" | "BASKET"
}

export interface SidebarBackdrop {
   children: ReactNode,
   closeSidebar(): void
}