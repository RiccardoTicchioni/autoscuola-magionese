import { Metadata } from 'next';
import Link from 'next/link';
import { Button, Card, CardContent, Badge } from '@/components/ui';

export const metadata: Metadata = {
    title: 'Dashboard',
    description: 'La tua area riservata per gestire corsi, prenotazioni e quiz.',
};

// Mock data - in production this would come from Supabase
const mockData = {
    user: {
        firstName: 'Mario',
        lastName: 'Rossi',
        email: 'mario@esempio.it',
    },
    enrollment: {
        service: 'Patente B',
        status: 'confirmed',
        progress: 65,
        theorySessions: 18,
        theoryTotal: 24,
        practiceHours: 4,
        practiceTotal: 6,
    },
    upcomingBookings: [
        {
            id: '1',
            type: 'Guida pratica',
            date: '2026-01-20',
            time: '10:00',
            instructor: 'Marco Bianchi',
            vehicle: 'Fiat 500 - AB123CD',
        },
        {
            id: '2',
            type: 'Lezione teoria',
            date: '2026-01-22',
            time: '18:00',
            instructor: 'Laura Verdi',
            vehicle: null,
        },
    ],
    quizStats: {
        totalAttempts: 15,
        averageScore: 87,
        lastScore: 92,
        weakTopics: ['Segnali di obbligo', 'Precedenza agli incroci'],
    },
};

export default function DashboardPage() {
    const { user, enrollment, upcomingBookings, quizStats } = mockData;

    return (
        <div className="min-h-screen pt-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Welcome Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-display font-bold text-gray-900">
                        Ciao, {user.firstName}! 👋
                    </h1>
                    <p className="text-gray-600 mt-1">
                        Ecco il riepilogo del tuo percorso verso la patente
                    </p>
                </div>

                {/* Quick Actions */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <Link href="/dashboard/prenotazioni">
                        <Card hover className="h-full bg-gradient-to-br from-primary-500 to-primary-600 text-white">
                            <CardContent className="p-5 flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-semibold">Prenota Guida</p>
                                    <p className="text-sm text-white/80">Scegli data e ora</p>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>

                    <Link href="/dashboard/quiz">
                        <Card hover className="h-full bg-gradient-to-br from-secondary-500 to-secondary-600 text-white">
                            <CardContent className="p-5 flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-semibold">Fai un Quiz</p>
                                    <p className="text-sm text-white/80">Esercitati ora</p>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>

                    <Link href="/dashboard/documenti">
                        <Card hover className="h-full">
                            <CardContent className="p-5 flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Documenti</p>
                                    <p className="text-sm text-gray-500">Carica o visualizza</p>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>

                    <Link href="/contatti">
                        <Card hover className="h-full">
                            <CardContent className="p-5 flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Assistenza</p>
                                    <p className="text-sm text-gray-500">Hai bisogno di aiuto?</p>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Course Progress */}
                        <Card variant="elevated">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h2 className="text-xl font-bold text-gray-900">Il tuo percorso</h2>
                                        <p className="text-gray-600">{enrollment.service}</p>
                                    </div>
                                    <Badge variant="success">{enrollment.status === 'confirmed' ? 'In corso' : 'In attesa'}</Badge>
                                </div>

                                {/* Progress Bar */}
                                <div className="mb-6">
                                    <div className="flex items-center justify-between text-sm mb-2">
                                        <span className="text-gray-600">Progresso complessivo</span>
                                        <span className="font-semibold text-gray-900">{enrollment.progress}%</span>
                                    </div>
                                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full transition-all duration-500"
                                            style={{ width: `${enrollment.progress}%` }}
                                        />
                                    </div>
                                </div>

                                {/* Stats Grid */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="p-4 bg-gray-50 rounded-xl">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                                                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">Lezioni Teoria</p>
                                                <p className="font-bold text-gray-900">{enrollment.theorySessions} / {enrollment.theoryTotal}</p>
                                            </div>
                                        </div>
                                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-primary-500 rounded-full"
                                                style={{ width: `${(enrollment.theorySessions / enrollment.theoryTotal) * 100}%` }}
                                            />
                                        </div>
                                    </div>

                                    <div className="p-4 bg-gray-50 rounded-xl">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center">
                                                <svg className="w-5 h-5 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">Ore di Guida</p>
                                                <p className="font-bold text-gray-900">{enrollment.practiceHours} / {enrollment.practiceTotal}</p>
                                            </div>
                                        </div>
                                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-secondary-500 rounded-full"
                                                style={{ width: `${(enrollment.practiceHours / enrollment.practiceTotal) * 100}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Upcoming Bookings */}
                        <Card variant="elevated">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-xl font-bold text-gray-900">Prossimi appuntamenti</h2>
                                    <Link href="/dashboard/prenotazioni">
                                        <Button variant="ghost" size="sm">
                                            Vedi tutti
                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Button>
                                    </Link>
                                </div>

                                {upcomingBookings.length > 0 ? (
                                    <div className="space-y-4">
                                        {upcomingBookings.map((booking) => (
                                            <div key={booking.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                                                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
                                                    {booking.vehicle ? '🚗' : '📚'}
                                                </div>
                                                <div className="flex-1">
                                                    <p className="font-semibold text-gray-900">{booking.type}</p>
                                                    <p className="text-sm text-gray-600">
                                                        {new Date(booking.date).toLocaleDateString('it-IT', { weekday: 'long', day: 'numeric', month: 'long' })} alle {booking.time}
                                                    </p>
                                                    <p className="text-sm text-gray-500">con {booking.instructor}</p>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    Dettagli
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-8">
                                        <p className="text-gray-500 mb-4">Nessun appuntamento in programma</p>
                                        <Link href="/dashboard/prenotazioni">
                                            <Button variant="primary">Prenota ora</Button>
                                        </Link>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Quiz Stats */}
                        <Card variant="elevated">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-bold text-gray-900">Statistiche Quiz</h3>
                                    <Link href="/dashboard/quiz/statistiche">
                                        <Button variant="ghost" size="sm">Dettagli</Button>
                                    </Link>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600">Quiz completati</span>
                                        <span className="font-bold text-gray-900">{quizStats.totalAttempts}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600">Media punteggio</span>
                                        <span className="font-bold text-success-600">{quizStats.averageScore}%</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600">Ultimo risultato</span>
                                        <span className="font-bold text-gray-900">{quizStats.lastScore}%</span>
                                    </div>
                                </div>

                                {quizStats.weakTopics.length > 0 && (
                                    <div className="mt-4 pt-4 border-t border-gray-100">
                                        <p className="text-sm text-gray-500 mb-2">Da ripassare:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {quizStats.weakTopics.map((topic, i) => (
                                                <Badge key={i} variant="warning" size="sm">{topic}</Badge>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <Link href="/dashboard/quiz" className="block mt-4">
                                    <Button variant="secondary" className="w-full">
                                        Fai un quiz
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>

                        {/* Quick Links */}
                        <Card variant="outlined">
                            <CardContent className="p-6">
                                <h3 className="font-bold text-gray-900 mb-4">Link utili</h3>
                                <nav className="space-y-2">
                                    <Link href="/dashboard/profilo" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        <span className="text-gray-700">Il mio profilo</span>
                                    </Link>
                                    <Link href="/sedi" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="text-gray-700">Le nostre sedi</span>
                                    </Link>
                                    <Link href="/contatti" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <span className="text-gray-700">Contatti</span>
                                    </Link>
                                </nav>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
