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
        name: 'Dr. Mericli Metin',
        specialty: 'Gynecologist',
        city: 'Budapest',
        image: 'https://static.foglaljorvost.hu/1/796/c/dr-mericli-metin-small-webp.webp',
        phone: '',
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
        name: 'Dr. Ozsváth Lilla',
        specialty: 'Dermatologist',
        city: 'Budapest',
        image: 'https://static.foglaljorvost.hu/8/918/c/dr-ozsvath-lilla-small-webp.webp',
        phone: '',
        availability: 'Mon-Fri, 9:00-17:00',
        featured: true,
        rating: 4.9,
        price: 30000,
        languages: ['English', 'Hungarian'],
        hasDiscount: true,
        acceptsCard: true,
        acceptsHealthInsurance: true,
    },
    {
        id: 3,
        name: 'Dr. Melania Szabó Tünde',
        specialty: 'Dermatologist',
        city: 'Budapest',
        image: 'https://static.foglaljorvost.hu/8/918/c/dr-ozsvath-lilla-small-webp.webp',
        phone: '',
        availability: 'Mon-Fri, 9:00-17:00',
        featured: true,
        rating: 4.9,
        price: 35000,
        languages: ['Hungarian', 'French', 'German', 'Romanian', 'Spanish'],
        hasDiscount: true,
        acceptsCard: true,
        acceptsHealthInsurance: true,
    },
    {
        id: 4,
        name: 'Prof. Dr. Wiegand Norbert Ph. D.',
        specialty: 'Orthpedist',
        city: 'Budapest',
        image: 'https://static.foglaljorvost.hu/13/461/c/prof-dr-wiegand-norbert-ph-d-small-webp.webp',
        phone: '',
        availability: 'Mon-Fri, 9:00-17:00',
        featured: true,
        rating: 4.9,
        price: 40000,
        languages: ['Hungarian'],
        hasDiscount: true,
        acceptsCard: true,
        acceptsHealthInsurance: true,
    },
    {
        id: 5,
        name: 'Dr. Gáspár Levente Ph.D',
        specialty: 'Orthpedist',
        city: 'Budapest',
        image: 'https://static.foglaljorvost.hu/5/125/c/dr-gaspar-levente-phd-small-webp.webp',
        phone: '',
        availability: 'Mon-Fri, 9:00-17:00',
        featured: true,
        rating: 4.9,
        price: 35000,
        languages: ['Hungarian'],
        hasDiscount: true,
        acceptsCard: true,
        acceptsHealthInsurance: true,
    },
    {
        id: 6,
        name: 'Dr Zamani Mohammad',
        specialty: 'Ophtalmologist',
        city: 'Budapest',
        image: 'https://static.foglaljorvost.hu/12/569/c/dr-amir-zamani-small-webp.webp',
        phone: '',
        availability: 'Mon-Fri, 9:00-17:00',
        featured: true,
        rating: 4.9,
        price: 30000,
        languages: ['Hungarian', 'English'],
        hasDiscount: true,
        acceptsCard: true,
        acceptsHealthInsurance: true,
    },
    {
        id: 7,
        name: 'Dr. Gábor Vleskó',
        specialty: 'Gynecologist',
        city: 'Budapest',
        image: 'https://static.foglaljorvost.hu/13/677/c/dr-vlesko-gabor-small-webp.webp',
        phone: '',
        availability: 'Mon-Fri, 9:00-17:00',
        featured: true,
        rating: 4.9,
        price: 35000,
        languages: ['Hungarian'],
        hasDiscount: true,
        acceptsCard: true,
        acceptsHealthInsurance: true,
    },
    {
        id: 8,
        name: 'Dr. Para Szabolcs',
        specialty: 'Neurologist',
        city: 'Budapest',
        image: 'https://static.foglaljorvost.hu/14/178/c/dr-para-szabolcs-small-webp.webp',
        phone: '',
        availability: 'Mon-Fri, 9:00-17:00',
        featured: true,
        rating: 4.9,
        price: 35000,
        languages: ['Hungarian'],
        hasDiscount: true,
        acceptsCard: true,
        acceptsHealthInsurance: true,
    },
    {
        id: 9,
        name: 'Dr. Pataki Zsolt',
        specialty: 'Otorhinolaryngologist',
        city: 'Budapest',
        image: 'https://static.foglaljorvost.hu/14/178/c/dr-para-szabolcs-small-webp.webp',
        phone: '',
        availability: 'Mon-Fri, 9:00-17:00',
        featured: true,
        rating: 4.9,
        price: 35000,
        languages: ['Hungarian'],
        hasDiscount: true,
        acceptsCard: true,
        acceptsHealthInsurance: true,
    },
    {
        id: 10,
        name: 'Dr. Emese Németh',
        specialty: 'Cardiologist',
        city: 'Budapest',
        image: 'https://static.foglaljorvost.hu/14/178/c/dr-para-szabolcs-small-webp.webp',
        phone: '',
        availability: 'Mon-Fri, 9:00-17:00',
        featured: true,
        rating: 4.9,
        price: 35000,
        languages: ['Hungarian'],
        hasDiscount: true,
        acceptsCard: true,
        acceptsHealthInsurance: true,
    },
    {
        id: 11,
        name: 'Márk Paput',
        specialty: 'Psychologist',
        city: 'Budapest',
        image: 'https://static.foglaljorvost.hu/5/559/c/paput-mark-small-webp.webp',
        phone: '',
        availability: 'Mon-Sat, 9:00-17:00',
        featured: true,
        rating: 4.9,
        price: 30000,
        languages: ['English', 'Hungarian', 'German', 'Spanish'],
        hasDiscount: true,
        acceptsCard: true,
        acceptsHealthInsurance: true,
    },
    {
        id: 12,
        name: 'Dr. Turbucz Piroska',
        specialty: 'Diabetologist',
        city: 'Budapest',
        image: 'https://static.foglaljorvost.hu/14/281/c/dr-turbucz-piroska-small-webp.webp',
        phone: '',
        availability: 'Mon-Fri, 9:00-17:00',
        featured: true,
        rating: 0.0,
        price: 30000,
        languages: ['Hungarian'],
        hasDiscount: true,
        acceptsCard: true,
        acceptsHealthInsurance: true,
    },
    {
        id: 13,
        name: 'Dr. Szőnyi Magdolna PhD',
        specialty: 'Audiolog',
        city: 'Budapest',
        image: 'https://static.foglaljorvost.hu/9/605/c/dr-szonyi-magdolna-phd-small-webp.webp',
        phone: '',
        availability: 'Mon-Fri, 9:00-17:00',
        featured: true,
        rating: 4.0,
        price: 35000,
        languages: ['Hungarian', 'English'],
        hasDiscount: true,
        acceptsCard: true,
        acceptsHealthInsurance: true,
    },
    {
        id: 14,
        name: 'Dr. Tompa Szabolcs',
        specialty: 'Hand surgeon',
        city: 'Budapest',
        image: 'https://static.foglaljorvost.hu/11/383/c/dr-tompa-szabolcs-small-webp.webp',
        phone: '',
        availability: 'Mon-Fri, 9:00-17:00',
        featured: true,
        rating: 5.0,
        price: 40000,
        languages: ['Hungarian'],
        hasDiscount: true,
        acceptsCard: true,
        acceptsHealthInsurance: true,
    },
    {
        id: 15,
        name: 'Dr. Palotai Virág',
        specialty: 'Dentist',
        city: 'Budapest',
        image: 'https://static.foglaljorvost.hu/13/260/c/dr-palotai-virag-small-webp.webp',
        phone: '',
        availability: 'Mon-Fri, 9:00-17:00',
        featured: true,
        rating: 5.0,
        price: 35000,
        languages: ['Hungarian'],
        hasDiscount: true,
        acceptsCard: true,
        acceptsHealthInsurance: true,
    },
    {
        id: 16,
        name: 'Dr. Dehkhodania Feridoon',
        specialty: 'Surgeon',
        city: 'Budapest',
        image: 'https://static.foglaljorvost.hu/12/378/c/dr-dehkhodania-feridoon-small-webp.webp',
        phone: '',
        availability: 'Mon-Fri, 9:00-17:00',
        featured: true,
        rating: 5.0,
        price: 40000,
        languages: ['Hungarian', 'English'],
        hasDiscount: true,
        acceptsCard: true,
        acceptsHealthInsurance: true,
    },
    {
        id: 17,
        name: 'Dr. Veres Ferenc',
        specialty: 'Pain Management Specialist',
        city: 'Budapest',
        image: 'https://static.foglaljorvost.hu/12/796/c/dr-veres-ferenc-small-webp.webp',
        phone: '',
        availability: 'Mon-Fri, 9:00-17:00',
        featured: true,
        rating: 5.0,
        price: 35000,
        languages: ['Hungarian'],
        hasDiscount: true,
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
