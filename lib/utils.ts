import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind CSS classes with clsx
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Format price in EUR
 */
export function formatPrice(price: number): string {
    return new Intl.NumberFormat('it-IT', {
        style: 'currency',
        currency: 'EUR',
    }).format(price);
}

/**
 * Format date in Italian locale
 */
export function formatDate(date: string | Date, options?: Intl.DateTimeFormatOptions): string {
    const d = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat('it-IT', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        ...options,
    }).format(d);
}

/**
 * Format time in Italian locale
 */
export function formatTime(time: string): string {
    const [hours, minutes] = time.split(':');
    return `${hours}:${minutes}`;
}

/**
 * Format date and time together
 */
export function formatDateTime(date: string | Date): string {
    const d = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat('it-IT', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    }).format(d);
}

/**
 * Format relative time (e.g., "2 giorni fa")
 */
export function formatRelativeTime(date: string | Date): string {
    const d = typeof date === 'string' ? new Date(date) : date;
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - d.getTime()) / 1000);

    const intervals = [
        { label: 'anno', plural: 'anni', seconds: 31536000 },
        { label: 'mese', plural: 'mesi', seconds: 2592000 },
        { label: 'settimana', plural: 'settimane', seconds: 604800 },
        { label: 'giorno', plural: 'giorni', seconds: 86400 },
        { label: 'ora', plural: 'ore', seconds: 3600 },
        { label: 'minuto', plural: 'minuti', seconds: 60 },
    ];

    for (const interval of intervals) {
        const count = Math.floor(diffInSeconds / interval.seconds);
        if (count >= 1) {
            return `${count} ${count === 1 ? interval.label : interval.plural} fa`;
        }
    }

    return 'adesso';
}

/**
 * Generate Italian fiscal code checksum (simplified)
 */
export function validateFiscalCode(code: string): boolean {
    if (!code || code.length !== 16) return false;
    const pattern = /^[A-Z]{6}[0-9]{2}[A-Z][0-9]{2}[A-Z][0-9]{3}[A-Z]$/i;
    return pattern.test(code);
}

/**
 * Validate Italian phone number
 */
export function validatePhoneNumber(phone: string): boolean {
    const cleaned = phone.replace(/[\s\-\.]/g, '');
    const pattern = /^(\+39)?3[0-9]{8,9}$/;
    return pattern.test(cleaned);
}

/**
 * Validate email
 */
export function validateEmail(email: string): boolean {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

/**
 * Slugify a string
 */
export function slugify(text: string): string {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
}

/**
 * Truncate text with ellipsis
 */
export function truncate(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
}

/**
 * Get initials from name
 */
export function getInitials(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
}

/**
 * Generate WhatsApp link
 */
export function getWhatsAppLink(phone: string, message?: string): string {
    const cleanPhone = phone.replace(/[^0-9+]/g, '');
    const encodedMessage = message ? encodeURIComponent(message) : '';
    return `https://wa.me/${cleanPhone}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
}

/**
 * Get day name in Italian
 */
export function getDayName(dayIndex: number): string {
    const days = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
    return days[dayIndex] || '';
}

/**
 * Get month name in Italian
 */
export function getMonthName(monthIndex: number): string {
    const months = [
        'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
        'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'
    ];
    return months[monthIndex] || '';
}

/**
 * Calculate age from birth date
 */
export function calculateAge(birthDate: string | Date): number {
    const today = new Date();
    const birth = typeof birthDate === 'string' ? new Date(birthDate) : birthDate;
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
}

/**
 * Check if user meets age requirement for license type
 */
export function meetsAgeRequirement(birthDate: string, licenseType: string): boolean {
    const age = calculateAge(birthDate);
    const ageRequirements: Record<string, number> = {
        'AM': 14,
        'A1': 16,
        'A2': 18,
        'A': 24,
        'B': 18,
        'B96': 18,
        'BE': 18,
    };
    return age >= (ageRequirements[licenseType] || 18);
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout | null = null;

    return (...args: Parameters<T>) => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

/**
 * Sleep/delay function
 */
export function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Generate random ID
 */
export function generateId(): string {
    return Math.random().toString(36).substring(2, 15);
}

/**
 * File size formatter
 */
export function formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * Get file extension
 */
export function getFileExtension(filename: string): string {
    return filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2).toLowerCase();
}

/**
 * Check if file is an image
 */
export function isImageFile(filename: string): boolean {
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'];
    return imageExtensions.includes(getFileExtension(filename));
}

/**
 * Check if file is a PDF
 */
export function isPdfFile(filename: string): boolean {
    return getFileExtension(filename) === 'pdf';
}
