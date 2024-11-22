import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-4x1 font-bold mb-8'>Show do Milhão</h1>
      <Link href="/game">
        <button className='px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
          Iniciar Jogo
        </button>
      </Link>
    </div>
  );
}
