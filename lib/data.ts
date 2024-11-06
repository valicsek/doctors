export interface Doctor {
    id: number
    name: string
    specialty: string
    city: string
    image: string
    phone?: string
    availability?: string
    featured?: boolean
    rating?: number
    price: number
    languages: string[]
    hasDiscount?: boolean
    acceptsCard?: boolean
    acceptsHealthInsurance?: boolean
}

export const doctors: Doctor[] = [
    {
        id: 1,
        name: 'Dr. Nagy János',
        specialty: 'Cardiologist',
        city: 'Budapest',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
        phone: '+36 1 234 5678',
        availability: 'Mon-Fri, 9:00-17:00',
        featured: true,
        rating: 4.9,
        price: 25000,
        languages: ['English', 'Hungarian'],
        hasDiscount: true,
        acceptsCard: true,
        acceptsHealthInsurance: true,
    },
    {
        id: 2,
        name: 'Dr. Kiss Éva',
        specialty: 'Dermatologist',
        city: 'Debrecen',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop',
        phone: '+36 1 234 5679',
        availability: 'Mon-Fri, 8:00-16:00',
        featured: true,
        rating: 4.8,
        price: 30000,
        languages: ['Hungarian', 'German'],
        acceptsCard: true,
    },
    {
        id: 3,
        name: 'Dr. Kovács Péter',
        specialty: 'Pediatrician',
        city: 'Budapest',
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop',
        phone: '+36 1 234 5680',
        availability: 'Mon-Sat, 9:00-18:00',
        featured: true,
        rating: 4.7,
        price: 20000,
        languages: ['Hungarian', 'English', 'French'],
        hasDiscount: true,
        acceptsHealthInsurance: true,
    },
    {
        id: 4,
        name: 'Dr. Szabó Mária',
        specialty: 'Neurologist',
        city: 'Szeged',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
        phone: '+36 1 234 5681',
        availability: 'Mon-Fri, 10:00-18:00',
        rating: 4.6,
        price: 35000,
        languages: ['Hungarian', 'English'],
        acceptsCard: true,
        acceptsHealthInsurance: true,
    },
]

export const defaultWeeklySchedule = [
    {
        day: 'Monday',
        slots: [
            { time: '09:00', isBooked: true },
            { time: '10:00', isBooked: false },
            { time: '11:00', isBooked: true },
            { time: '14:00', isBooked: false },
            { time: '15:00', isBooked: true },
        ],
    },
    {
        day: 'Tuesday',
        slots: [
            { time: '09:00', isBooked: false },
            { time: '10:00', isBooked: true },
            { time: '11:00', isBooked: false },
            { time: '14:00', isBooked: true },
            { time: '15:00', isBooked: false },
        ],
    },
    {
        day: 'Wednesday',
        slots: [
            { time: '09:00', isBooked: true },
            { time: '10:00', isBooked: true },
            { time: '11:00', isBooked: false },
            { time: '14:00', isBooked: false },
            { time: '15:00', isBooked: false },
        ],
    },
    {
        day: 'Thursday',
        slots: [
            { time: '09:00', isBooked: false },
            { time: '10:00', isBooked: false },
            { time: '11:00', isBooked: true },
            { time: '14:00', isBooked: true },
            { time: '15:00', isBooked: false },
        ],
    },
    {
        day: 'Friday',
        slots: [
            { time: '09:00', isBooked: true },
            { time: '10:00', isBooked: false },
            { time: '11:00', isBooked: false },
            { time: '14:00', isBooked: false },
            { time: '15:00', isBooked: true },
        ],
    },
]
