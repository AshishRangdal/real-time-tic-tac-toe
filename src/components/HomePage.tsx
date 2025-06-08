import { GamepadIcon, MessageCircle, Sparkles, Users, Zap } from "lucide-react";
import React from "react";
import GameJoinForm from "./GameJoinForm";

interface HomePageProps {
    onCreateRoom: (playerName: string) => void;
    onJoinRoom: (roomCode: string, playerName: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onCreateRoom, onJoinRoom }) => {
    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
            <AnimatedBackground showParticles />
            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-4">
                <GameJoinForm
                    onCreateRoom={onCreateRoom}
                    onJoinRoom={onJoinRoom}
                />
                <Header />
                <Features />
                <Footer />
            </div>
        </div>
    );
};

export default HomePage;

export const Header = () => (
    <div className="animate-fade-in-up mb-16 text-center">
        <div className="relative mb-8 flex items-center justify-center">
            <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-30 blur-xl"></div>
            <div className="relative rounded-full border border-white/20 bg-gradient-to-br from-white/20 to-white/5 p-6 shadow-2xl backdrop-blur-xl">
                <GamepadIcon className="h-16 w-16 text-white drop-shadow-lg" />
                <div className="absolute -top-2 -right-2">
                    <Sparkles className="h-6 w-6 animate-spin text-yellow-300" />
                </div>
            </div>
        </div>
        <h1 className="mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-6xl leading-tight font-black tracking-tight text-transparent md:text-7xl">
            Tic-Tac-Toe
        </h1>
        <div className="relative">
            <h2 className="mb-6 text-2xl font-light tracking-wide text-purple-200 md:text-3xl">
                Real-Time Multiplayer Experience
            </h2>
            <div className="absolute -bottom-2 left-1/2 h-1 w-32 -translate-x-1/2 transform rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
            Challenge friends in an immersive real-time gaming experience with
            seamless chat integration and stunning visual effects
        </p>
    </div>
);

const features = [
    {
        icon: <Users className="h-8 w-8 text-white" />,
        title: "Room-Based Play",
        description:
            "Create private rooms and invite friends for exclusive matches.",
        bgGlow: "from-blue-500/20 to-purple-500/20",
        iconBg: "from-blue-400 to-blue-600",
    },
    {
        icon: <Zap className="h-8 w-8 text-white" />,
        title: "Lightning Fast",
        description:
            "Experience instant moves and real-time updates with zero lag.",
        bgGlow: "from-green-500/20 to-emerald-500/20",
        iconBg: "from-green-400 to-emerald-600",
    },
    {
        icon: <MessageCircle className="h-8 w-8 text-white" />,
        title: "Live Chat",
        description:
            "Communicate with opponents through chat with emoji support.",
        bgGlow: "from-pink-500/20 to-rose-500/20",
        iconBg: "from-pink-400 to-rose-600",
    },
];

export const Features = () => (
    <div className="animate-fade-in-up mb-16 grid max-w-5xl grid-cols-1 gap-8 delay-300 md:grid-cols-3">
        {features.map(({ icon, title, description, bgGlow, iconBg }, i) => (
            <div key={i} className="group relative">
                <div
                    className={`absolute inset-0 bg-gradient-to-r ${bgGlow} rounded-2xl blur-xl transition-all duration-300 group-hover:blur-2xl`}
                />
                <div className="relative rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-white/30 hover:shadow-2xl">
                    <div
                        className={`bg-gradient-to-br ${iconBg} mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl shadow-lg`}
                    >
                        {icon}
                    </div>
                    <h3 className="mb-4 text-center text-xl font-bold text-white">
                        {title}
                    </h3>
                    <p className="text-center leading-relaxed text-white/70">
                        {description}
                    </p>
                </div>
            </div>
        ))}
    </div>
);

export const AnimatedBackground = ({
    showParticles = false,
}: {
    showParticles?: boolean;
}) => (
    <>
        <div className="absolute inset-0">
            <div className="pointer-events-none absolute top-20 left-20 h-72 w-72 animate-pulse rounded-full bg-purple-500/10 blur-3xl"></div>
            <div className="pointer-events-none absolute top-40 right-32 h-96 w-96 animate-pulse rounded-full bg-blue-500/10 blur-3xl delay-1000"></div>
            <div className="pointer-events-none absolute bottom-32 left-1/3 h-80 w-80 animate-pulse rounded-full bg-pink-500/10 blur-3xl delay-2000"></div>
        </div>
        {showParticles && (
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="animate-float absolute h-2 w-2 rounded-full bg-white/20"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`,
                        }}
                    />
                ))}
            </div>
        )}
    </>
);

export const Footer = () => (
    <div className="animate-fade-in-up mt-16 text-center delay-700">
        <div className="mb-4 flex items-center justify-center gap-2 text-sm text-white/60">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-white/30"></div>
            <span>Built with passion using React, Socket.io & TypeScript</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-white/30"></div>
        </div>
        <div className="flex items-center justify-center gap-4 text-white/40">
            <div className="h-2 w-2 animate-pulse rounded-full bg-purple-400"></div>
            <div className="h-2 w-2 animate-pulse rounded-full bg-pink-400 delay-500"></div>
            <div className="h-2 w-2 animate-pulse rounded-full bg-blue-400 delay-1000"></div>
        </div>
    </div>
);
