import React from 'react';
import { X, Mail, MessageSquare, ShieldAlert, FileText, BookOpen, HelpCircle } from 'lucide-react';

export type LegalModalType = 'privacy' | 'terms' | 'fairplay' | 'contact' | null;

interface LegalModalProps {
  activeModal: LegalModalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ activeModal, onClose }) => {
  if (!activeModal) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-zinc-950 border border-orange-500/35 p-6 sm:p-8 text-zinc-200 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 pb-4 mb-6 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            {activeModal === 'privacy' && <FileText className="w-5 h-5 text-amber-400 shrink-0" />}
            {activeModal === 'terms' && <BookOpen className="w-5 h-5 text-amber-400 shrink-0" />}
            {activeModal === 'fairplay' && <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />}
            {activeModal === 'contact' && <HelpCircle className="w-5 h-5 text-amber-400 shrink-0" />}
            <h3 className="font-display text-2xl font-bold tracking-wide text-white">
              {activeModal === 'privacy' && 'Privacy Policy — Esports Arena'}
              {activeModal === 'terms' && 'Terms & Conditions — Esports Arena'}
              {activeModal === 'fairplay' && 'Fair Play & Anti-Cheat Charter'}
              {activeModal === 'contact' && 'Player Helpdesk & Contact Support'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {activeModal === 'privacy' && (
          <div className="space-y-4 text-sm leading-relaxed text-zinc-300">
            <p className="text-zinc-400">
              Effective Date: November 2026 · Platform: Esports Arena Community App (Android)
            </p>
            <h4 className="font-semibold text-white text-base">1. Information We Collect</h4>
            <p>
              Esports Arena collects only basic gamer profile information required to organize custom
              multiplayer rooms and maintain community leaderboards, including your chosen gamer tag,
              in-game character UID for custom room matchmaking, and optional email or phone contact
              for support tickets.
            </p>
            <h4 className="font-semibold text-white text-base">2. How We Use Information</h4>
            <p>
              Your profile details are strictly used to share custom match Room IDs and Passwords
              inside the app, calculate tournament leaderboard standings, and match you with friends
              in 100% free-to-play classic Ludo sessions.
            </p>
            <h4 className="font-semibold text-white text-base">3. Non-Monetary Community Commitment</h4>
            <p>
              Esports Arena operates exclusively as a free multiplayer gaming and skill-based
              practice community. We do not collect financial data, banking credentials, or billing
              details from players.
            </p>
            <h4 className="font-semibold text-white text-base">4. Data Protection & Deletion</h4>
            <p>
              We do not sell or rent player data to third-party marketers. Players may request
              complete profile deletion at any time by contacting our support desk at{' '}
              <span className="text-amber-400">support@esportsarena.in</span>.
            </p>
          </div>
        )}

        {activeModal === 'terms' && (
          <div className="space-y-4 text-sm leading-relaxed text-zinc-300">
            <p className="text-zinc-400">
              Last Updated: November 2026 · Skill-Based Esports Community Guidelines
            </p>
            <h4 className="font-semibold text-white text-base">1. Nature of Platform</h4>
            <p>
              Esports Arena is a dedicated skill-based esports community and free multiplayer gaming
              platform designed for Indian mobile gamers. All custom rooms, practice scrims, and
              classic Ludo matches are provided for entertainment, skill development, and friendly
              competition.
            </p>
            <h4 className="font-semibold text-white text-base">2. Eligibility & Player Conduct</h4>
            <p>
              Players must be at least 13 years of age to create a Gamer Profile. Users agree to
              maintain respectful communication in custom lobbies and adhere to scheduled match start
              times.
            </p>
            <h4 className="font-semibold text-white text-base">3. Custom Room Access</h4>
            <p>
              Room ID and Password credentials published inside the Esports Arena app are strictly
              for registered lobby participants. Sharing room credentials outside the lobby or
              inviting unregistered spectators may result in temporary cooldown from daily practice
              matches.
            </p>
            <h4 className="font-semibold text-white text-base">4. Intellectual Property Disclaimer</h4>
            <p>
              Esports Arena is an independent community tournament organizer and casual multiplayer
              hub. Free Fire is a registered trademark of Garena International. Esports Arena is not
              endorsed by or affiliated with Garena International.
            </p>
          </div>
        )}

        {activeModal === 'fairplay' && (
          <div className="space-y-4 text-sm leading-relaxed text-zinc-300">
            <p className="text-zinc-400">
              Esports Arena Zero-Tolerance Competitive Integrity Policy
            </p>
            <h4 className="font-semibold text-white text-base">1. Pure Skill-Based Matchmaking</h4>
            <p>
              Every Free Fire custom match (Solo, Duo, Squad, and Clash Squad) and every classic
              Ludo board session on Esports Arena relies strictly on player strategy, reflexes, and
              teamwork.
            </p>
            <h4 className="font-semibold text-white text-base">2. Prohibited Modifications & Emulators</h4>
            <p>
              The use of third-party scripts, modified game clients, auto-aim tools, wall-hacks, or
              unauthorized PC emulators in mobile-only custom lobbies is strictly forbidden. Any
              account found using unfair modifications is permanently removed from the community
              leaderboard.
            </p>
            <h4 className="font-semibold text-white text-base">3. Teaming & Lobby Collusion</h4>
            <p>
              Cross-squad teaming in Solo or Duo Battle Royale practice rooms violates community
              sportsmanship rules. Match moderators review lobby replays to uphold fair leaderboard
              rankings and trophy progression.
            </p>
            <h4 className="font-semibold text-white text-base">4. Authentic Ludo Board Mechanics</h4>
            <p>
              Free Ludo Game modes (1v1 Quick Mode, Classic 4-Player, and Pass-and-Play) follow
              standard tabletop board rules with turn timers to prevent intentional stalling.
            </p>
          </div>
        )}

        {activeModal === 'contact' && (
          <div className="space-y-5 text-sm leading-relaxed text-zinc-300">
            <p>
              Need help installing the official APK, joining a Free Fire custom room, or setting up
              a private Ludo match with friends? Reach out to our community support team below:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://wa.me/919876543210?text=Hello%20Esports%20Arena%20Support%2C%20I%20need%20help%20with%20the%20app."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-orange-500/50 transition-colors"
              >
                <MessageSquare className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">WhatsApp Community Desk</div>
                  <div className="text-xs text-zinc-400 mt-1">
                    Instant help with Custom Room IDs &amp; APK setup
                  </div>
                  <div className="text-xs text-amber-400 font-medium mt-2">
                    Chat on WhatsApp →
                  </div>
                </div>
              </a>

              <a
                href="mailto:support@esportsarena.in?subject=Esports%20Arena%20Support%20Request"
                className="flex items-start gap-3 p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-orange-500/50 transition-colors"
              >
                <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Email Support</div>
                  <div className="text-xs text-zinc-400 mt-1">
                    support@esportsarena.in
                  </div>
                  <div className="text-xs text-amber-400 font-medium mt-2">
                    Response within 4 hours →
                  </div>
                </div>
              </a>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-xs text-zinc-400">
              <strong className="text-zinc-200">Support Hours:</strong> Daily 10:00 AM – 11:00 PM IST
              · Community Operations Hub, Bengaluru, Karnataka, India.
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-lg text-sm font-semibold bg-zinc-800 text-white hover:bg-zinc-700 transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
