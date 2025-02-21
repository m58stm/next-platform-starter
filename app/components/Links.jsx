import Link from 'next/link';

export default function Links() {
    return (
        <section className="flex flex-col items-start gap-3 sm:gap-4">
            <Link
                href="/"
                className="btn btn-lg btn-primary sm:btn-wide"
            >   
                home
            </Link>
            <Link
                href="/pages/edit"
                className="btn btn-lg btn-primary sm:btn-wide"
            >   
                edit
            </Link>
        </section>
    );
}
