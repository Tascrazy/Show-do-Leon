import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function Result() {
    const searchParams = useSearchParams();
    const score = searchParams.get('score');

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold">Fim de Jogo!</h1>
            <p className="text-2xl my-4">Score: {score}</p>
            <Link href="/">
                <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Jogar Novamente
                </button>
            </Link>
        </div>
    );
}
