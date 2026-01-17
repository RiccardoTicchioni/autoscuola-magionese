// Database Types for Autoscuola Magionese

export type UserRole = 'visitor' | 'student' | 'instructor' | 'admin';

export type EnrollmentStatus = 'pending' | 'paid' | 'confirmed' | 'cancelled' | 'completed';

export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled' | 'no_show';

export type DocumentType = 'id_card' | 'fiscal_code' | 'photo' | 'permit' | 'medical' | 'other';

export type DocumentStatus = 'pending' | 'approved' | 'rejected';

export type ServiceCategory = 'patente' | 'corso_professionale' | 'recupero_punti';

export type LicenseType = 'AM' | 'A1' | 'A2' | 'A' | 'B' | 'B96' | 'BE' | 'C' | 'CE' | 'D' | 'DE';

export type TransmissionType = 'manual' | 'automatic';

export type QuizMode = 'topic' | 'simulation';

// Database Tables
export interface Profile {
    id: string;
    user_id: string;
    role: UserRole;
    first_name: string;
    last_name: string;
    email: string;
    phone: string | null;
    fiscal_code: string | null;
    birth_date: string | null;
    address: string | null;
    city: string | null;
    postal_code: string | null;
    preferred_branch_id: string | null;
    quiz_enabled: boolean;
    avatar_url: string | null;
    created_at: string;
    updated_at: string;
}

export interface Branch {
    id: string;
    name: string;
    slug: string;
    address: string;
    city: string;
    postal_code: string;
    phone: string;
    email: string;
    hours: BranchHours;
    lat: number;
    lng: number;
    parking_info: string | null;
    directions: string | null;
    photos: string[];
    active: boolean;
    created_at: string;
    updated_at: string;
}

export interface BranchHours {
    monday: DayHours | null;
    tuesday: DayHours | null;
    wednesday: DayHours | null;
    thursday: DayHours | null;
    friday: DayHours | null;
    saturday: DayHours | null;
    sunday: DayHours | null;
}

export interface DayHours {
    open: string;
    close: string;
    break_start?: string;
    break_end?: string;
}

export interface Instructor {
    id: string;
    user_id: string;
    branch_id: string;
    license_types: LicenseType[];
    bio: string | null;
    photo_url: string | null;
    active: boolean;
    created_at: string;
    updated_at: string;
    // Relations
    profile?: Profile;
    branch?: Branch;
}

export interface Vehicle {
    id: string;
    branch_id: string;
    type: LicenseType;
    plate: string;
    brand: string;
    model: string;
    year: number;
    transmission: TransmissionType;
    photo_url: string | null;
    active: boolean;
    created_at: string;
    updated_at: string;
    // Relations
    branch?: Branch;
}

export interface Service {
    id: string;
    category: ServiceCategory;
    name: string;
    slug: string;
    short_description: string;
    description: string;
    requirements: string[];
    includes: string[];
    base_price: number;
    duration_info: string | null;
    image_url: string | null;
    badge: string | null;
    active: boolean;
    order_index: number;
    created_at: string;
    updated_at: string;
}

export interface Enrollment {
    id: string;
    user_id: string;
    service_id: string;
    branch_id: string;
    status: EnrollmentStatus;
    stripe_session_id: string | null;
    stripe_payment_intent_id: string | null;
    amount_paid: number | null;
    notes: string | null;
    created_at: string;
    updated_at: string;
    // Relations
    profile?: Profile;
    service?: Service;
    branch?: Branch;
    documents?: Document[];
    payments?: Payment[];
}

export interface Document {
    id: string;
    enrollment_id: string;
    type: DocumentType;
    file_url: string;
    file_name: string;
    status: DocumentStatus;
    rejection_reason: string | null;
    created_at: string;
    updated_at: string;
}

export interface Payment {
    id: string;
    enrollment_id: string;
    stripe_payment_intent_id: string;
    amount: number;
    currency: string;
    status: string;
    receipt_url: string | null;
    created_at: string;
}

export interface AvailabilityRule {
    id: string;
    branch_id: string;
    instructor_id: string | null;
    vehicle_id: string | null;
    day_of_week: number; // 0-6 (Sunday-Saturday)
    start_time: string; // HH:MM
    end_time: string; // HH:MM
    slot_duration_minutes: number;
    buffer_minutes: number;
    active: boolean;
    created_at: string;
    updated_at: string;
}

export interface BlockedDate {
    id: string;
    branch_id: string;
    date: string;
    reason: string | null;
    created_at: string;
}

export interface Booking {
    id: string;
    student_id: string;
    instructor_id: string;
    vehicle_id: string;
    branch_id: string;
    start_time: string;
    end_time: string;
    status: BookingStatus;
    notes: string | null;
    instructor_feedback: string | null;
    created_at: string;
    updated_at: string;
    // Relations
    student?: Profile;
    instructor?: Instructor;
    vehicle?: Vehicle;
    branch?: Branch;
}

export interface QuizTopic {
    id: string;
    name: string;
    description: string | null;
    icon: string | null;
    order_index: number;
    active: boolean;
    created_at: string;
    updated_at: string;
    // Computed
    question_count?: number;
}

export interface QuizQuestion {
    id: string;
    topic_id: string;
    question_text: string;
    image_url: string | null;
    answers: QuizAnswer[];
    correct_answer_index: number;
    explanation: string | null;
    difficulty: number; // 1-3
    active: boolean;
    created_at: string;
    updated_at: string;
    // Relations
    topic?: QuizTopic;
}

export interface QuizAnswer {
    text: string;
    is_correct: boolean;
}

export interface QuizAttempt {
    id: string;
    user_id: string;
    mode: QuizMode;
    topic_id: string | null;
    score: number;
    total_questions: number;
    time_seconds: number;
    created_at: string;
    // Relations
    topic?: QuizTopic;
    answers?: QuizAttemptAnswer[];
}

export interface QuizAttemptAnswer {
    id: string;
    attempt_id: string;
    question_id: string;
    selected_answer_index: number;
    is_correct: boolean;
    // Relations
    question?: QuizQuestion;
}

export interface CookieConsent {
    id: string;
    session_id: string;
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
    created_at: string;
    updated_at: string;
}

export interface AuditLog {
    id: string;
    user_id: string;
    action: string;
    entity_type: string;
    entity_id: string;
    old_values: Record<string, unknown> | null;
    new_values: Record<string, unknown> | null;
    ip_address: string | null;
    user_agent: string | null;
    created_at: string;
}

export interface ContactSubmission {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    subject: string | null;
    message: string;
    gdpr_consent: boolean;
    honeypot: string | null;
    ip_address: string | null;
    created_at: string;
}

// API Response Types
export interface ApiResponse<T> {
    data?: T;
    error?: string;
    message?: string;
}

export interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    per_page: number;
    total_pages: number;
}

// Form Types
export interface EnrollmentFormData {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    birth_date: string;
    fiscal_code: string;
    address: string;
    city: string;
    postal_code: string;
    service_id: string;
    branch_id: string;
    gdpr_consent: boolean;
}

export interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    subject?: string;
    message: string;
    gdpr_consent: boolean;
}

export interface BookingFormData {
    instructor_id: string;
    vehicle_id: string;
    branch_id: string;
    date: string;
    time_slot: string;
    notes?: string;
}

// Stats Types
export interface QuizStats {
    total_attempts: number;
    average_score: number;
    best_score: number;
    weak_topics: { topic_id: string; topic_name: string; average_score: number }[];
    recent_trend: { date: string; score: number }[];
    hardest_questions: { question_id: string; question_text: string; error_rate: number }[];
}

export interface AdminDashboardStats {
    total_enrollments: number;
    pending_enrollments: number;
    total_bookings_today: number;
    total_bookings_week: number;
    revenue_month: number;
    active_students: number;
    recent_activities: AuditLog[];
}

// Slot Types for Booking
export interface TimeSlot {
    start: string;
    end: string;
    available: boolean;
    instructor_id?: string;
    vehicle_id?: string;
}

export interface DayAvailability {
    date: string;
    slots: TimeSlot[];
}
