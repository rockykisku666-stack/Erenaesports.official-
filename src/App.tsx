import React, { useState } from 'react';
import {
  Download,
  Trophy,
  Users,
  Gamepad2,
  KeyRound,
  Sparkles,
  Clock,
  MapPin,
  ChevronRight,
  Mail,
  MessageSquare,
  FileText,
  BookOpen,
  ShieldAlert,
  HelpCircle,
} from 'lucide-react';
import {
  EsportsArenaCrest,
  FreeFireSquadVisual,
  AuthenticLudoBoardAndGotiSVG,
} from './components/ArenaVisuals';
import { LegalModal, LegalModalType } from './components/LegalModals';

const APK_DOWNLOAD_URL =
  'https://www.mediafire.com/file/fe0peoiczl7mgdv/Erena_Esports_apk.apk/file';

type NavTab = 'home' | 'tournaments' | 'ludo' | 'about';
type TournamentFormat = 'solo' | 'duo' | 'squad' | 'clash';

interface LobbySlot {
  id: string;
  title: string;
  map: string;
  time: string;
  modeLabel: string;
  slotsTotal: number;
  slotsFilled: number;
  trophyPoints: string;
}

const TOURNAMENT_LOBBIES: Record<TournamentFormat, LobbySlot[]> = {
  solo: [
    {
      id: 'FF-S101',
      title: 'Evening Solo Survival Scrim',
      map: 'Bermuda Classic',
      time: '06:00 PM IST',
      modeLabel: 'Solo • 48 Players',
      slotsTotal: 48,
      slotsFilled: 42,
      trophyPoints: '+150 Arena Trophies',
    },
    {
      id: 'FF-S102',
      title: 'Prime Time Solo Marksman Cup',
      map: 'Purgatory',
      time: '08:30 PM IST',
      modeLabel: 'Solo • 48 Players',
      slotsTotal: 48,
      slotsFilled: 39,
      trophyPoints: '+200 Arena Trophies',
    },
  ],
  duo: [
    {
      id: 'FF-D201',
      title: 'Tactical Duo Synergy Room',
      map: 'Kalahari',
      time: '07:00 PM IST',
      modeLabel: 'Duo • 24 Teams',
      slotsTotal: 24,
      slotsFilled: 21,
      trophyPoints: '+250 Team Trophies',
    },
    {
      id: 'FF-D202',
      title: 'Nightfall Duo Arena Challenge',
      map: 'Bermuda Remastered',
      time: '09:30 PM IST',
      modeLabel: 'Duo • 24 Teams',
      slotsTotal: 24,
      slotsFilled: 19,
      trophyPoints: '+250 Team Trophies',
    },
  ],
  squad: [
    {
      id: 'FF-SQ301',
      title: 'Pro Practice Squad Custom Room',
      map: 'Bermuda + Alpine',
      time: '07:30 PM IST',
      modeLabel: 'Squad • 12 Rosters',
      slotsTotal: 12,
      slotsFilled: 11,
      trophyPoints: '+400 Clan Trophies',
    },
    {
      id: 'FF-SQ302',
      title: 'Championship Squad Showdown',
      map: 'Purgatory',
      time: '10:00 PM IST',
      modeLabel: 'Squad • 12 Rosters',
      slotsTotal: 12,
      slotsFilled: 10,
      trophyPoints: '+500 Clan Trophies',
    },
  ],
  clash: [
    {
      id: 'FF-CS401',
      title: '4v4 Clash Squad Headshot Room',
      map: 'Bermuda Close-Quarters',
      time: '05:30 PM IST',
      modeLabel: '4v4 Custom • 7 Rounds',
      slotsTotal: 8,
      slotsFilled: 8,
      trophyPoints: '+180 Squad Trophies',
    },
    {
      id: 'FF-CS402',
      title: 'Late Night 4v4 Rush Scrim',
      map: 'Kalahari Arena',
      time: '10:30 PM IST',
      modeLabel: '4v4 Custom • 7 Rounds',
      slotsTotal: 8,
      slotsFilled: 6,
      trophyPoints: '+180 Squad Trophies',
    },
  ],
};

export default function App() {
  const [activeNav, setActiveNav] = useState<NavTab>('home');
  const [selectedFormat, setSelectedFormat] = useState<TournamentFormat>('squad');
  const [activeModal, setActiveModal] = useState<LegalModalType>(null);

  const scrollToSection = (id: string, tab: NavTab) => {
    setActiveNav(tab);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-carbon-grid text-zinc-100 flex flex-col relative selection:bg-orange-500 selection:text-black">
      {/* Subtle Side Tactical Framing Accents matching the reference image */}
      <div
        className="hidden xl:block fixed left-0 top-28 bottom-28 w-3 border-r border-orange-500/25 bg-gradient-to-b from-transparent via-orange-500/10 to-transparent pointer-events-none z-10"
        aria-hidden="true"
      />
      <div
        className="hidden xl:block fixed right-0 top-28 bottom-28 w-3 border-l border-orange-500/25 bg-gradient-to-b from-transparent via-orange-500/10 to-transparent pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* 1. TOP STICKY NAVBAR (Strict 3-Zone Top Bar Contract) */}
      <header className="sticky top-0 z-40 w-full bg-zinc-950/90 backdrop-blur-xl border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Uploaded ESPORTS ARENA Logo + Brand Name */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home', 'home');
            }}
            className="flex items-center gap-3 whitespace-nowrap shrink-0 group focus:outline-none"
          >
            <EsportsArenaCrest size="sm" />
            <span className="font-display text-2xl sm:text-3xl font-extrabold tracking-wider text-metallic-gold whitespace-nowrap shrink-0">
              ESPORTS ARENA
            </span>
          </a>

          {/* Zone 2: Center Navigation Links (Home, Tournaments, Free Ludo, About Us) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-xl bg-zinc-900/90 border border-zinc-800/90"
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home', 'home');
              }}
              className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeNav === 'home'
                  ? 'bg-gradient-to-b from-amber-500/25 to-orange-600/10 text-amber-300 border-b-2 border-amber-400'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              Home
            </a>
            <a
              href="#tournaments"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('tournaments', 'tournaments');
              }}
              className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeNav === 'tournaments'
                  ? 'bg-gradient-to-b from-amber-500/25 to-orange-600/10 text-amber-300 border-b-2 border-amber-400'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              Tournaments
            </a>
            <a
              href="#free-ludo"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('free-ludo', 'ludo');
              }}
              className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeNav === 'ludo'
                  ? 'bg-gradient-to-b from-amber-500/25 to-orange-600/10 text-amber-300 border-b-2 border-amber-400'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              Free Ludo
            </a>
            <a
              href="#about-us"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about-us', 'about');
              }}
              className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeNav === 'about'
                  ? 'bg-gradient-to-b from-amber-500/25 to-orange-600/10 text-amber-300 border-b-2 border-amber-400'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              About Us
            </a>
          </nav>

          {/* Zone 3: Primary Glowing Orange-Gold DOWNLOAD APP Button */}
          <div className="flex items-center shrink-0">
            <a
              href={APK_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-arena-gold px-4 sm:px-6 py-2.5 rounded-xl font-display text-base sm:text-lg font-extrabold tracking-wider text-zinc-950 whitespace-nowrap shrink-0 flex items-center gap-2"
            >
              <span>DOWNLOAD APP</span>
              <Download className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1">
        {/* 2. HERO SECTION & 3. FEATURED GAME MODES CARDS (Matching Reference Layout) */}
        <section
          id="home"
          className="relative pt-6 pb-12 sm:py-14 lg:py-16 overflow-hidden border-b border-zinc-800/80"
        >
          {/* Ambient Arena Spotlights */}
          <div
            className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-10 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              {/* LEFT / CENTER HERO COLUMN (7 Cols on Desktop) */}
              <div className="lg:col-span-7 flex flex-col items-center text-center justify-center py-4 sm:py-6 px-2 sm:px-4">
                {/* Prominent ESPORTS ARENA Logo Crest Badge */}
                <EsportsArenaCrest size="lg" className="mb-3" />

                {/* Community Milestone Kicker (20K+ Downloads) */}
                <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-medium text-amber-300/95 tracking-wide mb-3">
                  <span className="font-mono-tabular font-semibold text-amber-400">
                    20K+ Downloads
                  </span>
                  <span aria-hidden="true" className="text-zinc-600">
                    ·
                  </span>
                  <span className="text-zinc-300">Skill-Based Esports Community</span>
                  <span aria-hidden="true" className="text-zinc-600">
                    ·
                  </span>
                  <span className="text-amber-400">100% Free Multiplayer</span>
                </div>

                {/* Bold Athletic Display Heading matching reference artwork */}
                <h1
                  className="font-display font-extrabold tracking-tight leading-[0.98] mb-4 max-w-2xl"
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
                    textWrap: 'balance',
                  }}
                >
                  <span className="text-metallic-silver">PLAY </span>
                  <span className="text-metallic-gold">FREE FIRE</span>
                  <br />
                  <span className="text-metallic-silver">TOURNAMENTS &amp; FREE LUDO</span>
                </h1>

                {/* Subtitle matching reference artwork */}
                <p className="text-base sm:text-xl font-medium text-zinc-200 max-w-xl mb-8 leading-relaxed">
                  Skill-Based <span className="text-amber-400 font-semibold">Esports</span>{' '}
                  Community &amp;{' '}
                  <span className="text-amber-400 font-semibold">Fun Multiplayer</span> Gaming
                </p>

                {/* Two Buttons Side-by-Side: Primary DOWNLOAD NOW + Secondary Glassmorphic ABOUT US */}
                <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
                  <a
                    href={APK_DOWNLOAD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-arena-gold px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-display text-xl sm:text-2xl font-extrabold tracking-wider text-zinc-950 whitespace-nowrap shrink-0 flex items-center justify-center gap-2.5 min-w-[220px]"
                  >
                    <span>DOWNLOAD NOW</span>
                    <Download className="w-5 h-5 stroke-[2.5]" />
                  </a>

                  <button
                    type="button"
                    onClick={() => scrollToSection('about-us', 'about')}
                    className="btn-arena-glass px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-display text-xl sm:text-2xl font-bold tracking-wider text-white whitespace-nowrap shrink-0 min-w-[165px] cursor-pointer"
                  >
                    ABOUT US
                  </button>
                </div>

                {/* Quiet Platform Compatibility Note */}
                <div className="mt-5 flex items-center justify-center gap-2 text-xs text-zinc-400">
                  <span>Official Android APK (v2.4)</span>
                  <span aria-hidden="true">·</span>
                  <span>Zero Entry Cost</span>
                  <span aria-hidden="true">·</span>
                  <span>Instant Custom Room Access</span>
                </div>
              </div>

              {/* RIGHT COLUMN: 3. FEATURED GAME MODES (2 Premium Glassmorphic Cards) */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                {/* CARD 1: FREE FIRE TOURNAMENT */}
                <article
                  id="tournaments"
                  className="arena-glass-card rounded-2xl overflow-hidden flex flex-col justify-between group transition-transform duration-150 hover:-translate-y-0.5"
                >
                  <div className="relative p-5 sm:p-6 flex items-center justify-between gap-4 min-h-[185px]">
                    {/* Left Text Content */}
                    <div className="relative z-10 max-w-[58%]">
                      <div className="text-xs font-medium text-amber-400 tracking-wider mb-1">
                        Battle Royale &amp; Clash Squad
                      </div>
                      <h2 className="font-display text-3xl sm:text-4xl font-extrabold leading-[0.95] tracking-wide text-white mb-3">
                        <span className="text-metallic-silver">FREE F</span>
                        <span className="text-amber-400">I</span>
                        <span className="text-metallic-silver">RE</span>
                        <br />
                        <span className="text-metallic-silver">TOURNAMENT</span>
                      </h2>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-300">
                        <li className="flex items-center gap-2">
                          <KeyRound className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>Instant Room ID &amp; Password in App</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>Competitive Leaderboard &amp; Trophies</span>
                        </li>
                      </ul>
                    </div>

                    {/* Right Cropped Artwork from Uploaded Reference + Trophy Accent */}
                    <div className="absolute right-0 top-0 bottom-0 w-[52%] pointer-events-none">
                      <FreeFireSquadVisual className="w-full h-full" />
                    </div>
                  </div>

                  {/* Card Footer Bar matching Reference Image */}
                  <div className="px-5 py-3 bg-black/60 border-t border-white/10 flex items-center justify-between gap-2 text-xs sm:text-sm font-medium text-zinc-200">
                    <div className="flex items-center gap-2 truncate">
                      <span>Daily Custom Matches</span>
                      <span className="text-amber-400" aria-hidden="true">
                        •
                      </span>
                      <span className="text-white font-semibold">Solo / Duo / Squad</span>
                    </div>
                    <a
                      href={APK_DOWNLOAD_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:text-amber-300 font-semibold whitespace-nowrap shrink-0 flex items-center gap-1"
                    >
                      <span>Join Room</span>
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </article>

                {/* CARD 2: FREE LUDO GAME (Authentic 4-Color Classic Ludo Board & Pawn Goti Icon) */}
                <article
                  id="free-ludo"
                  className="arena-glass-card rounded-2xl overflow-hidden flex flex-col justify-between group transition-transform duration-150 hover:-translate-y-0.5"
                >
                  <div className="relative p-5 sm:p-6 flex items-center justify-between gap-4 min-h-[185px]">
                    {/* Left Text Content */}
                    <div className="relative z-10 max-w-[58%]">
                      <div className="text-xs font-medium text-amber-400 tracking-wider mb-1">
                        Classic Tabletop Strategy
                      </div>
                      <h2 className="font-display text-3xl sm:text-4xl font-extrabold leading-[0.95] tracking-wide text-metallic-silver mb-3">
                        FREE LUDO
                        <br />
                        GAME
                      </h2>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-300">
                        <li className="flex items-center gap-2">
                          <Gamepad2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>1v1 Quick Mode &amp; Classic Mode</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Users className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>Play with Friends &amp; Pass-and-Play</span>
                        </li>
                      </ul>
                    </div>

                    {/* Right Authentic 4-Color Classic Ludo Board & Pawn (Goti) Visual (No Casino Dice) */}
                    <div className="relative z-10 flex items-center justify-center pr-1 sm:pr-2">
                      <div className="relative transform -rotate-6 group-hover:rotate-0 transition-transform duration-200">
                        <AuthenticLudoBoardAndGotiSVG className="w-32 h-32 sm:w-36 sm:h-36 drop-shadow-[0_12px_20px_rgba(0,0,0,0.85)]" />
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Bar matching Reference Image */}
                  <div className="px-5 py-3 bg-black/60 border-t border-white/10 flex items-center justify-between gap-2 text-xs sm:text-sm font-medium text-zinc-200">
                    <div className="flex items-center gap-2 truncate">
                      <span className="text-white font-semibold">100% Free to Play</span>
                      <span className="text-amber-400" aria-hidden="true">
                        •
                      </span>
                      <span>Classic &amp; Quick Mode</span>
                    </div>
                    <a
                      href={APK_DOWNLOAD_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:text-amber-300 font-semibold whitespace-nowrap shrink-0 flex items-center gap-1"
                    >
                      <span>Play Free</span>
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              </div>
            </div>

            {/* IMMEDIATE ABOUT US BANNER BAR (Matching Bottom Glass Bar in Reference Image) */}
            <div className="mt-8 sm:mt-10 arena-glass-card rounded-2xl px-6 py-5 text-center">
              <div className="font-display text-lg sm:text-xl font-bold tracking-wider text-amber-300 mb-1">
                ABOUT US
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-3xl mx-auto leading-relaxed">
                Esports Arena is a dedicated gaming &amp; esports platform offering daily
                skill-based Free Fire custom matches and free-to-play classic Ludo for gaming
                enthusiasts.
              </p>
            </div>
          </div>
        </section>

        {/* INTERACTIVE DAILY CUSTOM TOURNAMENT SCHEDULE & LUDO MODES EXPLORER */}
        <section className="py-14 sm:py-16 border-b border-zinc-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div>
                <div className="text-xs font-medium text-amber-400 mb-2">
                  Daily Practice Scrims · Skill-Based Matchmaking
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-wide text-white">
                  Daily Free Fire Custom Rooms &amp; Ludo Modes
                </h2>
              </div>

              {/* Interactive Format Filter Tabs */}
              <div
                role="tablist"
                aria-label="Free Fire Match Formats"
                className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-zinc-900 border border-zinc-800 self-start"
              >
                {(
                  [
                    { key: 'solo', label: 'Solo Custom' },
                    { key: 'duo', label: 'Duo Custom' },
                    { key: 'squad', label: 'Squad Custom' },
                    { key: 'clash', label: 'Clash Squad 4v4' },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    role="tab"
                    aria-selected={selectedFormat === tab.key}
                    onClick={() => setSelectedFormat(tab.key)}
                    className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      selectedFormat === tab.key
                        ? 'bg-gradient-to-b from-amber-400 to-orange-500 text-zinc-950 shadow-sm'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Format Custom Room Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {TOURNAMENT_LOBBIES[selectedFormat].map((lobby) => (
                <div
                  key={lobby.id}
                  className="arena-glass-card rounded-2xl p-6 flex flex-col justify-between gap-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-zinc-400 mb-1.5">
                        <span className="font-mono-tabular text-amber-400 font-semibold">
                          Lobby #{lobby.id}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{lobby.modeLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-emerald-400">Free Entry</span>
                      </div>
                      <h3 className="font-display text-2xl font-bold text-white tracking-wide">
                        {lobby.title}
                      </h3>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="text-xs text-zinc-400">Standing Points</div>
                      <div className="font-mono-tabular text-sm font-bold text-amber-400">
                        {lobby.trophyPoints}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 py-3 border-y border-zinc-800/90 text-xs sm:text-sm">
                    <div>
                      <div className="text-zinc-400 flex items-center gap-1.5 mb-0.5">
                        <MapPin className="w-3.5 h-3.5 text-amber-400" />
                        <span>Arena Map</span>
                      </div>
                      <div className="font-semibold text-white truncate">{lobby.map}</div>
                    </div>
                    <div>
                      <div className="text-zinc-400 flex items-center gap-1.5 mb-0.5">
                        <Clock className="w-3.5 h-3.5 text-amber-400" />
                        <span>Start Time</span>
                      </div>
                      <div className="font-mono-tabular font-semibold text-white">{lobby.time}</div>
                    </div>
                    <div>
                      <div className="text-zinc-400 flex items-center gap-1.5 mb-0.5">
                        <Users className="w-3.5 h-3.5 text-amber-400" />
                        <span>Registered</span>
                      </div>
                      <div className="font-mono-tabular font-semibold text-amber-300">
                        {lobby.slotsFilled} / {lobby.slotsTotal} Slots
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="text-xs text-zinc-400">
                      Room ID &amp; Password published in-app 15 mins before match start.
                    </div>
                    <a
                      href={APK_DOWNLOAD_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-arena-gold px-4 py-2 rounded-lg font-display text-sm font-extrabold tracking-wider text-zinc-950 whitespace-nowrap shrink-0 flex items-center gap-1.5"
                    >
                      <span>GET ROOM ID IN APP</span>
                      <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Free Ludo Classic Feature Strip */}
            <div className="rounded-2xl bg-zinc-900/75 border border-zinc-800 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
                <AuthenticLudoBoardAndGotiSVG className="w-20 h-20 shrink-0" />
                <div>
                  <div className="text-xs font-medium text-amber-400 mb-1">
                    Authentic 4-Color Tabletop Board &amp; Pawn (Goti) Gameplay
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white tracking-wide mb-2">
                    Play Classic Free Ludo with Friends Anytime
                  </h3>
                  <p className="text-sm text-zinc-300 max-w-2xl leading-relaxed">
                    Enjoy traditional 4-color Ludo goti movement across 1v1 Quick Mode (5-minute
                    fast matches), 4-Player Classic Mode, Private Room Codes with friends, and
                    offline Pass-and-Play on a single mobile device—100% free for casual fun.
                  </p>
                </div>
              </div>

              <a
                href={APK_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-arena-gold px-6 py-3 rounded-xl font-display text-lg font-extrabold tracking-wider text-zinc-950 whitespace-nowrap shrink-0 flex items-center gap-2"
              >
                <span>PLAY FREE LUDO</span>
                <Download className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>
          </div>
        </section>

        {/* 4. HOW TO PLAY SECTION (3 Editorial Steps) */}
        <section className="py-14 sm:py-16 border-b border-zinc-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="text-xs font-medium text-amber-400 mb-2">
                Simple 3-Step Onboarding · Free Community Access
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-wide text-white">
                HOW TO PLAY ON ESPORTS ARENA
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Step 1 */}
              <div className="arena-glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="font-display text-3xl font-extrabold text-metallic-gold">
                      01. Step One
                    </span>
                    <Download className="w-6 h-6 text-amber-400 shrink-0" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white tracking-wide mb-2">
                    Download the Esports Arena App
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    Tap any download button on this page to get the official Esports Arena Android
                    APK package and install it on your mobile device.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-800/80 text-xs text-amber-400 font-medium">
                  Lightweight Android Package · Fast Installation
                </div>
              </div>

              {/* Step 2 */}
              <div className="arena-glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="font-display text-3xl font-extrabold text-metallic-gold">
                      02. Step Two
                    </span>
                    <Sparkles className="w-6 h-6 text-amber-400 shrink-0" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white tracking-wide mb-2">
                    Create your free Gamer Profile
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    Choose your gamer nickname, link your in-game Free Fire character UID for custom
                    lobby entry, and set up your free community profile.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-800/80 text-xs text-amber-400 font-medium">
                  100% Free Registration · No Financial Details Required
                </div>
              </div>

              {/* Step 3 */}
              <div className="arena-glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="font-display text-3xl font-extrabold text-metallic-gold">
                      03. Step Three
                    </span>
                    <Trophy className="w-6 h-6 text-amber-400 shrink-0" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white tracking-wide mb-2">
                    Join daily Free Fire custom rooms or play Free Ludo matches with friends
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    Copy the instant in-app Room ID &amp; Password to enter Solo, Duo, or Squad
                    custom matches, or launch a 1v1 / 4-player classic Ludo board game.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-800/80 text-xs text-amber-400 font-medium">
                  Climb Community Leaderboards &amp; Collect Trophies
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. ABOUT US SECTION (Required for Meta Ads Transparency) */}
        <section id="about-us" className="py-14 sm:py-16 border-b border-zinc-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="arena-glass-card rounded-3xl p-6 sm:p-10 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="text-xs font-medium text-amber-400 mb-2">
                    Platform Transparency &amp; Community Charter
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-wide text-white mb-4">
                    ABOUT US
                  </h2>
                  <p className="text-base sm:text-lg text-zinc-200 leading-relaxed mb-6">
                    Esports Arena is a dedicated skill-based gaming and esports community platform
                    built for Indian mobile gamers. We organize daily custom Free Fire practice
                    tournaments (Solo, Duo, Squad, and Clash Squad) and offer 100% free-to-play
                    classic Ludo modes for entertainment and friendly competition.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-zinc-800 text-xs sm:text-sm">
                    <div>
                      <div className="font-semibold text-amber-400 mb-1">
                        Skill-Based Esports Community
                      </div>
                      <p className="text-zinc-400">
                        Structured custom rooms for practice, squad coordination, and seasonal
                        trophy leaderboards.
                      </p>
                    </div>
                    <div>
                      <div className="font-semibold text-amber-400 mb-1">
                        Free Multiplayer Gaming Platform
                      </div>
                      <p className="text-zinc-400">
                        Every tournament lobby and classic 4-color Ludo board match is 100% free to
                        join and play.
                      </p>
                    </div>
                    <div>
                      <div className="font-semibold text-amber-400 mb-1">
                        Dedicated Player Support
                      </div>
                      <p className="text-zinc-400">
                        Active community moderators and responsive WhatsApp &amp; Email helpdesk for
                        all players.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right CTA Card inside About Section */}
                <div className="lg:col-span-4 flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-950/90 border border-zinc-800">
                  <EsportsArenaCrest size="md" className="mb-3" />
                  <div className="font-display text-2xl font-bold text-white tracking-wide mb-1">
                    READY TO ENTER THE ARENA?
                  </div>
                  <p className="text-xs text-zinc-400 mb-5">
                    Join 20,000+ Indian mobile gamers practicing daily in custom rooms and classic
                    Ludo matches.
                  </p>
                  <a
                    href={APK_DOWNLOAD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-arena-gold w-full py-3.5 px-6 rounded-xl font-display text-xl font-extrabold tracking-wider text-zinc-950 flex items-center justify-center gap-2"
                  >
                    <span>DOWNLOAD APK</span>
                    <Download className="w-5 h-5 stroke-[2.5]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 6. FOOTER (Complete Website Transparency for Meta Ads Crawlers) */}
      <footer className="bg-zinc-950 border-t border-orange-500/20 pt-12 pb-10 text-zinc-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-zinc-800/80">
            {/* Brand & Platform Classification */}
            <div className="md:col-span-5 space-y-3">
              <div className="flex items-center gap-3">
                <EsportsArenaCrest size="sm" />
                <span className="font-display text-2xl font-extrabold tracking-wider text-metallic-gold">
                  ESPORTS ARENA
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed">
                Skill-Based Esports Community &amp; Free Multiplayer Gaming Platform. Built for
                Indian mobile gaming enthusiasts to practice daily Free Fire custom matches and play
                classic 4-color Ludo with friends.
              </p>
              <div className="text-xs text-zinc-500 pt-1">
                Community Operations · Bengaluru, Karnataka, India · Age 13+ Friendly Gaming
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="md:col-span-3 space-y-2.5">
              <div className="font-display text-base font-bold tracking-wider text-white">
                PLATFORM SECTIONS
              </div>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a
                    href="#home"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('home', 'home');
                    }}
                    className="hover:text-amber-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#tournaments"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('tournaments', 'tournaments');
                    }}
                    className="hover:text-amber-400 transition-colors"
                  >
                    Free Fire Custom Tournaments
                  </a>
                </li>
                <li>
                  <a
                    href="#free-ludo"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('free-ludo', 'ludo');
                    }}
                    className="hover:text-amber-400 transition-colors"
                  >
                    Free Classic Ludo Game
                  </a>
                </li>
                <li>
                  <a
                    href="#about-us"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('about-us', 'about');
                    }}
                    className="hover:text-amber-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href={APK_DOWNLOAD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 font-medium"
                  >
                    Download Official Android App
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Policies & Contact Support (Meta Ads Transparency Links) */}
            <div className="md:col-span-4 space-y-2.5">
              <div className="font-display text-base font-bold tracking-wider text-white">
                POLICIES &amp; PLAYER SUPPORT
              </div>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveModal('privacy')}
                    className="flex items-center gap-2 hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-amber-400" />
                    <span>Privacy Policy</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveModal('terms')}
                    className="flex items-center gap-2 hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                    <span>Terms &amp; Conditions</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveModal('fairplay')}
                    className="flex items-center gap-2 hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                    <span>Fair Play Policy</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveModal('contact')}
                    className="flex items-center gap-2 hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                    <span>Contact Support (WhatsApp / Email)</span>
                  </button>
                </li>
              </ul>

              <div className="pt-3 flex flex-wrap items-center gap-4 text-xs">
                <a
                  href="https://wa.me/919876543210?text=Hello%20Esports%20Arena%20Support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-medium"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Helpdesk</span>
                </a>
                <a
                  href="mailto:support@esportsarena.in"
                  className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>support@esportsarena.in</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Legal & Meta Compliance Disclosure */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <p>© {new Date().getFullYear()} Esports Arena Community. All rights reserved.</p>
            <p className="text-center sm:text-right max-w-xl">
              Disclaimer: Esports Arena is a 100% free-to-play, skill-based esports community and
              casual multiplayer gaming platform for entertainment only. Not affiliated with or
              endorsed by Garena International.
            </p>
          </div>
        </div>
      </footer>

      {/* Interactive Legal & Support Modal for Policy Transparency */}
      <LegalModal activeModal={activeModal} onClose={() => setActiveModal(null)} />
    </div>
  );
}
