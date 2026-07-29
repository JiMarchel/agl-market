export function Hero() {
  return (
    <section
      className="relative flex min-h-150 items-center bg-cover bg-center"
      style={{ backgroundImage: "url(/hero.png)" }}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-end px-6">
        <div className="max-w-md text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">
            Unlock Global Markets with Ease
          </h1>
          <p className="mb-6 text-lg text-white/80">
            Invest confidently with advanced security measures tailored to protect your trades.
          </p>
        </div>
      </div>
    </section>
  )
}