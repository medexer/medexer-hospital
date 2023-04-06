import { IconAppointment, IconAppointmentActive, IconComplaint, IconComplaintActive, IconHome, IconHomeActive, IconInventory, IconInventoryActive, IconNotification, IconNotificationActive, IconSettings, IconSettingsActive } from "../assets"


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
}