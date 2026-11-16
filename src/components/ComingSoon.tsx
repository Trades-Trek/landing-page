import Head from 'next/head'
import { useQuery } from 'react-query'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Logo from '@/assets/Images/Nav/Logo.png'
import { cachedTime, getCompanyInfoApi } from '@/api/general.api'

const ComingSoon = () => {
  const { data } = useQuery('getCompanyInfoApi', getCompanyInfoApi, cachedTime)

  const socials = [
    { label: 'Facebook', href: data?.facebook_url, Icon: FaFacebook },
    { label: 'Twitter', href: data?.twitter_url, Icon: FaTwitter },
    { label: 'Instagram', href: data?.instagram_url, Icon: FaInstagram },
    { label: 'LinkedIn', href: data?.linkedin_url, Icon: FaLinkedin },
  ].filter((social) => social.href)

  return (
    <>
      <Head>
        <title>Trades Trek | Back soon</title>
        <meta name="robots" content="noindex" />
      </Head>

      <main className="relative flex min-h-screen flex-col overflow-hidden bg-palette-one text-[#140a26]">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[18%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-white/50 blur-3xl"
        />

        <header className="relative mx-auto flex h-28 w-full max-w-[1200px] items-center justify-center px-6 md:justify-start xl:px-0">
          <img src={Logo.src} alt="Trades Trek" />
        </header>

        <section className="relative flex flex-1 flex-col items-center justify-center px-6 pb-16 text-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-[0_24px_60px_-24px_rgba(128,0,255,0.55)]">
            <svg viewBox="0 0 120 120" className="h-16 w-16" aria-hidden>
              <g fill="none" stroke="#8000FF" strokeLinecap="round" strokeWidth="4">
                <path className="steam" d="M46 40c-5-6 5-10 0-17" />
                <path className="steam steam-2" d="M58 40c-5-6 5-10 0-17" />
                <path className="steam steam-3" d="M70 40c-5-6 5-10 0-17" />
              </g>
              <path d="M30 50h52v20a24 24 0 0 1-24 24h-4a24 24 0 0 1-24-24z" fill="#8000FF" />
              <path d="M82 58h5a11 11 0 0 1 0 22h-7" fill="none" stroke="#8000FF" strokeWidth="6" />
              <path d="M24 103h70" stroke="#2525BB" strokeLinecap="round" strokeOpacity=".3" strokeWidth="6" />
            </svg>
          </div>

          <span className="mt-8 rounded-full bg-white/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-palette-two">
            Coming soon
          </span>

          <h1 className="mt-6 max-w-[680px] text-[32px] font-bold leading-tight md:text-[52px]">
            We are currently on a <span className="whitespace-nowrap"><span className="text-[#2525BB]">coffee break</span>.</span>
          </h1>

          <p className="mt-5 max-w-[520px] text-lg font-light text-[#3d3350] md:text-xl">
            We&apos;ll be back with exciting upgrades shortly.
          </p>

          <div className="mt-10 h-1.5 w-40 overflow-hidden rounded-full bg-white/80">
            <div className="brew h-full w-1/3 rounded-full bg-palette-two" />
          </div>
        </section>

        <footer className="relative flex flex-col items-center gap-y-4 px-6 pb-10 text-sm font-light text-[#3d3350]">
          {socials.length > 0 && (
            <div className="flex items-center gap-x-5">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="text-[#3d3350] transition-colors hover:text-palette-two"
                >
                  <Icon className="text-lg" />
                </a>
              ))}
            </div>
          )}
          <p className="m-0">
            &copy; <span suppressHydrationWarning>{new Date().getFullYear()}</span> Trades Trek
          </p>
        </footer>
      </main>

      <style jsx>{`
        .steam {
          opacity: 0;
          animation: steam 2.6s ease-in-out infinite;
        }
        .steam-2 {
          animation-delay: 0.45s;
        }
        .steam-3 {
          animation-delay: 0.9s;
        }
        .brew {
          animation: brew 1.8s ease-in-out infinite;
        }
        @keyframes steam {
          0% {
            opacity: 0;
            transform: translateY(6px);
          }
          45% {
            opacity: 0.7;
          }
          100% {
            opacity: 0;
            transform: translateY(-8px);
          }
        }
        @keyframes brew {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(300%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .steam,
          .brew {
            animation: none;
          }
          .steam {
            opacity: 0.6;
          }
        }
      `}</style>
    </>
  )
}

export default ComingSoon
