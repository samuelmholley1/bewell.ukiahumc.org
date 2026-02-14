import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section bg-neutral-bg">
      <div className="container">
        <div className="max-w-xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary">
            Page Not Found
          </h1>
          <p className="text-lg text-text/70">
            Sorry, we couldn&apos;t find that page. Let&apos;s get you back on track.
          </p>
          <Link
            href="/"
            className="btn-primary inline-block text-center"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
