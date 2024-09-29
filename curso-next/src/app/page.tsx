import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-full w-full">
      <div className="flex flex-row gap-4 justify-center py-4 border-b-[1px] border-slate-400">
        <Link
          href="#"
          className="rounded text-white px-5 py-2 bg-slate-600 hover:opacity-40"
        >
          Home
        </Link>
        <Link
          href="#"
          className="rounded text-white px-5 py-2 bg-slate-600 hover:opacity-40"
        >
          Regras
        </Link>
        <Link
          href="#"
          className="rounded text-white px-5 py-2 bg-slate-600 hover:opacity-40"
        >
          Sober nós
        </Link>
        <Link
          href="#"
          className="rounded text-white px-5 py-2 bg-slate-600 hover:opacity-40"
        >
          FAQ
        </Link>
      </div>

      <div className="py-4">Page</div>
    </div>
  );
}
