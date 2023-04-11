import { IconAppointment, IconAppointmentActive, IconComplaint, IconComplaintActive, IconHome, IconHomeActive, IconInventory, IconInventoryActive, IconNotification, IconNotificationActive, IconSettings, IconSettingsActive, UserAvatar1, UserAvatar2 } from "../assets"


export const AppAppointments = [
    {
        name: 'Kelechi Daniel',
        gender: 'Male',
        avatar: UserAvatar1,
        bloodGroup: 'O+',
        phone: '09029923883',
        date: new Date('2023-04-02').toISOString(),
        recentActivity: 'Donated blood on 19th Feb. 2023',
    },
    {
        name: 'Ifeanyi Chukwu',
        gender: 'Male',
        avatar: UserAvatar2,
        bloodGroup: 'AB+',
        phone: '09029923883',
        date: new Date('2023-04-02').toISOString(),
        recentActivity: 'Donated blood on 19th Feb. 2023',
    },
    {
        name: 'Dorathy Jang',
        gender: 'Female',
        avatar: UserAvatar1,
        bloodGroup: 'O+',
        phone: '09029923883',
        date: new Date('2023-04-02').toISOString(),
        recentActivity: 'Donated blood on 19th Feb. 2023',
    },
    {
        name: 'Joy Thomas',
        gender: 'Female',
        avatar: UserAvatar2,
        bloodGroup: 'O+',
        phone: '09029923883',
        date: new Date('2023-04-02').toISOString(),
        recentActivity: 'Donated blood on 19th Feb. 2023',
    },
]


export const AppInventoryItems = [
    {
        bloodGroup: 'O+',
        name: 'Rhesus O+ (Positive)',
        units: 1000,
        recentActivity: '10 pints added on 19th Feb. 2023',
    },
    {
        bloodGroup: 'AB+',
        name: 'Rhesus AB+ (Positive)',
        units: 30,
        recentActivity: '30 pints added on 19th Feb. 2023',
    },
    {
        bloodGroup: 'A+',
        name: 'Rhesus A+ (Positive)',
        units: 45,
        recentActivity: '45 pints added on 19th Feb. 2023',
    },
    {
        bloodGroup: 'B+',
        name: 'Rhesus B+ (Positive)',
        units: 45,
        recentActivity: '45 pints added on 19th Feb. 2023',
    },
    {
        bloodGroup: 'O-',
        name: 'Rhesus O- (Negative)',
        units: 1,
        recentActivity: '1 pints added on 19th Feb. 2023',
    },
    {
        bloodGroup: 'AB-',
        name: 'Rhesus AB- (Negative)',
        units: 23,
        recentActivity: '23 pints added on 19th Feb. 2023',
    },
    {
        bloodGroup: 'A-',
        name: 'Rhesus A- (Negative)',
        units: 7,
        recentActivity: '7 pints added on 19th Feb. 2023',
    },
    {
        bloodGroup: 'B-',
        name: 'Rhesus B- (Negative)',
        units: 12,
        recentActivity: '12 pints added on 19th Feb. 2023',
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
    showDonationHistoryModal: false,
    showUpdateInventoryItemModal: false,
    showInventoryItemHistoryModal: false,
    showRescheduleAppointmentModal: false,
}