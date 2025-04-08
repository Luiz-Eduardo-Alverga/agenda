'use client'

import * as React from 'react'
import { LayoutDashboard, Mail } from 'lucide-react'

import { NavMain } from '@/components/nav-main'

import { NavHeader } from '@/components/nav-header'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'

const data = {
  navMain: [
    {
      title: 'Painel de Avisos',
      url: '/painel-de-avisos',
      icon: Mail,
    },
    {
      icon: LayoutDashboard,
      title: 'Painel Individual',
      url: '/painel-individual',
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavHeader />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
