import { IconAppointment, IconAppointmentActive, IconComplaint, IconComplaintActive, IconHome, IconHomeActive, IconInventory, IconInventoryActive, IconNotification, IconNotificationActive, IconSettings, IconSettingsActive, UserAvatar1, UserAvatar2 } from "../assets"


export const AppAppointments = [
    {
        name: 'Kelechi Daniel',
        gender: 'Male',
        avatar: UserAvatar1,
        bloodGroup: 'O+',
        date: new Date().toISOString(),
        recentActivity: 'Donated blood on 19th Feb. 2023',
    },
    {
        name: 'Ifeanyi Chukwu',
        gender: 'Male',
        avatar: UserAvatar2,
        bloodGroup: 'AB+',
        date: new Date().toISOString(),
        recentActivity: 'Donated blood on 19th Feb. 2023',
    },
    {
        name: 'Dorathy Jang',
        gender: 'Female',
        avatar: UserAvatar1,
        bloodGroup: 'O+',
        date: new Date().toISOString(),
        recentActivity: 'Donated blood on 19th Feb. 2023',
    },
    {
        name: 'Joy Thomas',
        gender: 'Female',
        avatar: UserAvatar2,
        bloodGroup: 'O+',
        date: new Date().toISOString(),
        recentActivity: 'Donated blood on 19th Feb. 2023',
    },
]


export const SidebarMenuItems = [
    {
        title: 'Home',
        icon: IconHome,
        activeIcon: IconHomeActive,
    },
    {
        title: 'Appointments',
        icon: IconAppointment,
        activeIcon: IconAppointmentActive,
    },
    {
        title: 'Inventory',
        icon: IconInventory,
        activeIcon: IconInventoryActive,
    },
    {
        title: 'Complaints',
        icon: IconComplaint,
        activeIcon: IconComplaintActive,
    },
    {
        title: 'Notifications',
        icon: IconNotification,
        activeIcon: IconNotificationActive,
    },
    {
        title: 'Settings',
        icon: IconSettings,
        activeIcon: IconSettingsActive,
    },
]

export const RootModals = {
    showUpdatePasswordModal: false,
    showRescheduleAppointmentModal: false,
}