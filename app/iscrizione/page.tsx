import { Suspense } from 'react';
import IscrizioneContent from './IscrizioneContent';
import { Skeleton } from '@/components/ui';

export const metadata = {
    title: 'Iscrizione Online',
    description: 'Iscriviti online ad Autoscuola Magionese. Completa il pagamento in modo sicuro con Stripe.',
};

export default function IscrizionePage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen pt-20 bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-gray-600">Caricamento...</p>
                </div>
            </div>
        }>
            <IscrizioneContent />
        </Suspense>
    );
}
