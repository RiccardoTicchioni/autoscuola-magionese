import { Metadata } from 'next';
import Link from 'next/link';
import { Button, Card, CardContent, Badge } from '@/components/ui';

export const metadata: Metadata = {
    title: 'Admin Dashboard',
    description: 'Pannello di amministrazione Autoscuola Magionese',
};

// Mock data - would come from Supabase in production
const stats = {
    totalStudents: 156,
    activeEnrollments: 42,
    todayBookings: 8,
    pendingDocuments: 5,
    monthlyRevenue: 12450,
    quizAttempts: 324,
};

const recentEnrollments = [
    { id: '1', name: 'Marco Bianchi', service: 'Patente B', date: '2026-01-17', status: 'pending' },
    { id: '2', name: 'Laura Verdi', service: 'Patente A2', date: '2026-01-16', status: 'paid' },
    { id: '3', name: 'Giuseppe Rossi', service: 'CQC Merci', date: '2026-01-15', status: 'confirmed' },
];

const todayBookings = [
    { id: '1', time: '09:00', student: 'Anna Neri', instructor: 'Mario B.', type: 'Guida pratica' },
    { id: '2', time: '10:00', student: 'Paolo Verdi', instructor: 'Mario B.', type: 'Guida pratica' },
    { id: '3', time: '11:00', student: 'Luca Bianchi', instructor: 'Lucia R.', type: 'Guida pratica' },
    { id: '4', time: '14:00', student: 'Sara Gialli', instructor: 'Mario B.', type: 'Guida pratica' },
];

const statusColors: Record<string, string> = {
    pending: 'bg-yellow-100 text-yellow-800',
    paid: 'bg-blue-100 text-blue-800',
    confirmed: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800',
};

const statusLabels: Record<string, string> = {
    pending: 'In attesa',
    paid: 'Pagato',
    confirmed: 'Confermato',
    cancelled: 'Annullato',
};

export default function AdminDashboardPage() {
    return (
        <div className="min-h-screen pt-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-display font-bold text-gray-900">Dashboard Admin</h1>
                        <p className="text-gray-600 mt-1">Benvenuto nel pannello di amministrazione</p>
                    </div>
                    <div className="mt-4 sm:mt-0 flex gap-3">
                        <Link href="/admin/iscrizioni/nuova">
                            <Button variant="primary">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                Nuova Iscrizione
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
                    <Card variant="elevated">
                        <CardContent className="p-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-gray-900">{stats.totalStudents}</p>
                                    <p className="text-xs text-gray-500">Studenti totali</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card variant="elevated">
                        <CardContent className="p-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-gray-900">{stats.activeEnrollments}</p>
                                    <p className="text-xs text-gray-500">Iscrizioni attive</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card variant="elevated">
                        <CardContent className="p-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-gray-900">{stats.todayBookings}</p>
                                    <p className="text-xs text-gray-500">Guide oggi</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card variant="elevated">
                        <CardContent className="p-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-gray-900">{stats.pendingDocuments}</p>
                                    <p className="text-xs text-gray-500">Doc. da verificare</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card variant="elevated">
                        <CardContent className="p-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-gray-900">€{stats.monthlyRevenue.toLocaleString()}</p>
                                    <p className="text-xs text-gray-500">Ricavi mese</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card variant="elevated">
                        <CardContent className="p-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-gray-900">{stats.quizAttempts}</p>
                                    <p className="text-xs text-gray-500">Quiz questo mese</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Recent Enrollments */}
                    <div className="lg:col-span-2">
                        <Card variant="elevated">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-xl font-bold text-gray-900">Ultime Iscrizioni</h2>
                                    <Link href="/admin/iscrizioni">
                                        <Button variant="ghost" size="sm">
                                            Vedi tutte
                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Button>
                                    </Link>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-gray-100">
                                                <th className="text-left py-3 px-2 text-sm font-semibold text-gray-600">Studente</th>
                                                <th className="text-left py-3 px-2 text-sm font-semibold text-gray-600">Corso</th>
                                                <th className="text-left py-3 px-2 text-sm font-semibold text-gray-600">Data</th>
                                                <th className="text-left py-3 px-2 text-sm font-semibold text-gray-600">Stato</th>
                                                <th className="py-3 px-2"></th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            {recentEnrollments.map((enrollment) => (
                                                <tr key={enrollment.id} className="hover:bg-gray-50">
                                                    <td className="py-3 px-2">
                                                        <p className="font-medium text-gray-900">{enrollment.name}</p>
                                                    </td>
                                                    <td className="py-3 px-2 text-gray-600">{enrollment.service}</td>
                                                    <td className="py-3 px-2 text-gray-600">
                                                        {new Date(enrollment.date).toLocaleDateString('it-IT')}
                                                    </td>
                                                    <td className="py-3 px-2">
                                                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${statusColors[enrollment.status]}`}>
                                                            {statusLabels[enrollment.status]}
                                                        </span>
                                                    </td>
                                                    <td className="py-3 px-2">
                                                        <Button variant="ghost" size="sm">Dettagli</Button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Today's Schedule */}
                    <div>
                        <Card variant="elevated">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-xl font-bold text-gray-900">Oggi</h2>
                                    <Badge variant="primary">{todayBookings.length} guide</Badge>
                                </div>

                                <div className="space-y-3">
                                    {todayBookings.map((booking) => (
                                        <div key={booking.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                                            <div className="text-center">
                                                <p className="text-sm font-bold text-gray-900">{booking.time}</p>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-medium text-gray-900 truncate">{booking.student}</p>
                                                <p className="text-xs text-gray-500">{booking.instructor}</p>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-xs text-gray-500">{booking.type}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <Link href="/admin/prenotazioni" className="block mt-4">
                                    <Button variant="outline" className="w-full">
                                        Vedi calendario
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Link href="/admin/utenti">
                        <Card hover className="h-full">
                            <CardContent className="p-4 flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m6 5.197v-1a6 6 0 00-3-5.197" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Gestione Utenti</p>
                                    <p className="text-xs text-gray-500">Studenti, istruttori</p>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>

                    <Link href="/admin/servizi">
                        <Card hover className="h-full">
                            <CardContent className="p-4 flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Servizi e Prezzi</p>
                                    <p className="text-xs text-gray-500">Patenti, corsi</p>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>

                    <Link href="/admin/sedi">
                        <Card hover className="h-full">
                            <CardContent className="p-4 flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Sedi e Veicoli</p>
                                    <p className="text-xs text-gray-500">Gestione risorse</p>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>

                    <Link href="/admin/quiz">
                        <Card hover className="h-full">
                            <CardContent className="p-4 flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Quiz</p>
                                    <p className="text-xs text-gray-500">Domande, statistiche</p>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                </div>
            </div>
        </div>
    );
}
