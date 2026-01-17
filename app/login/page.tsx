import { Suspense } from 'react';
import LoginContent from './LoginContent';

export const metadata = {
    title: 'Accedi',
    description: 'Accedi alla tua area riservata su Autoscuola Magionese.',
};

export default function LoginPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-50">
                <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
            </div>
        }>
            <LoginContent />
        </Suspense>
    );
}
