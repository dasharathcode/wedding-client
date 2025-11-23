






// import config from '@/config/config';
import { motion } from 'framer-motion'
import {
    Copy,
    Gift,
    CheckCircle,
    Wallet,
    Building2, Heart
} from 'lucide-react'
import { useState, useEffect } from 'react';

export default function Gifts({ config }) {
    const [copiedAccount, setCopiedAccount] = useState(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        setHasAnimated(true);
    }, []);

    const copyToClipboard = (text, bank) => {
        navigator.clipboard.writeText(text);
        setCopiedAccount(bank);
        setTimeout(() => setCopiedAccount(null), 2000);
    };


    const FloatingHearts = () => {
        return (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            opacity: 0,
                            scale: 0,
                            x: Math.random() * window.innerWidth,
                            y: window.innerHeight
                        }}
                        animate={{
                            opacity: [0, 1, 1, 0],
                            scale: [0, 1, 1, 0.5],
                            x: Math.random() * window.innerWidth,
                            y: -100
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: i * 0.8,
                            ease: "easeOut"
                        }}
                        className="absolute"
                    >
                        <Heart
                            className={`w-${Math.floor(Math.random() * 2) + 8} h-${Math.floor(Math.random() * 2) + 8} ${i % 3 === 0 ? 'text-rose-400' :
                                i % 3 === 1 ? 'text-pink-400' :
                                    'text-red-400'
                                }`}
                            fill="currentColor"
                        />
                    </motion.div>
                ))}
            </div>
        );
    };













    return (
        <section id="gifts" className="min-h-screen relative overflow-hidden">
            <div className="container mx-auto px-4 py-20 relative z-10">
                {/* Couple Photos */}
                <motion.div
                    initial="hidden"
                    animate={hasAnimated ? "visible" : "hidden"}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } }
                    }}
                    className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12"
                >
                    {/* Bride */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
                        }}
                        className="flex flex-col items-center"
                    >
                        <img
                           src={config.brideImage}
                            alt="Bride"
                            className="w-40 h-40 object-cover rounded-full border-4 border-rose-300 shadow-lg"
                        />
                        <span className="mt-3 font-serif text-lg text-rose-600 font-semibold">{config.brideName}</span>
                        <span className="text-sm text-gray-500">The Princess</span>
                    </motion.div>

                    {/* Heart */}
                    <div className="pt-6 relative">
                        <FloatingHearts />
                        <motion.div
                            animate={{
                                scale: [1, 1.15, 1],
                                rotate: [0, 5, -5, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <Heart className="w-10 sm:w-12 h-10 sm:h-12 text-rose-500 mx-auto" fill="currentColor" />
                        </motion.div>
                    </div>

                    {/* Groom */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
                        }}
                        className="flex flex-col items-center"
                    >
                        <img
                            src={config.groomImage}
                            alt="Groom"
                            className="w-40 h-40 object-cover rounded-full border-4 border-pink-300 shadow-lg"
                        />
                        <span className="mt-3 font-serif text-lg text-pink-600 font-semibold">  {config.groomName}</span>
                        <span className="text-sm text-gray-500">The Prince</span>
                    </motion.div>
                </motion.div>


                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-4 mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="inline-block text-rose-500 font-medium"
                    >
                        Wedding Gift
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 }}
                        className="text-4xl md:text-5xl font-serif text-gray-800"
                    >
                        Give a Gift
                    </motion.h2>

                    {/* Decorative Divider */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={hasAnimated ? { scale: 1 } : {}}
                        transition={{ delay: 0.4 }}
                        className="flex items-center justify-center gap-4 pt-4"
                    >
                        <div className="h-[1px] w-12 bg-rose-200" />
                        <Gift className="w-5 h-5 text-rose-400" />
                        <div className="h-[1px] w-12 bg-rose-200" />
                    </motion.div>

                    {/* Message Container */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={hasAnimated ? { opacity: 1 } : {}}
                        transition={{ delay: 0.5 }}
                        className="space-y-4 max-w-md mx-auto text-center"
                    >
                        {/* Header Line */}
                        <p className="text-2xl font-semibold text-pink-600">
                            With Love and Blessings
                        </p>

                        {/* Main Message */}
                        <p className="text-gray-600 leading-relaxed">
                            We believe every celebration is special. With heartfelt dedication, we aim to connect people across West Bengal with the best venues, vendors, and memories that last forever.
                        </p>

                        {/* Closing Blessing */}
                        <div className="space-y-2">
                            <p className="text-lg font-medium text-gray-800">
                                May your event be filled with joy, love, and togetherness.
                            </p>
                            <p className="text-gray-500 italic text-sm">
                                — Team EventBangla
                            </p>
                        </div>
                    </motion.div>

                    {/* Optional: Additional Decorative Element */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={hasAnimated ? { scale: 1 } : {}}
                        transition={{ delay: 0.6 }}
                        className="flex items-center justify-center gap-3 pt-4"
                    >
                        <div className="h-px w-8 bg-rose-200/50" />
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-300" />
                        <div className="h-px w-8 bg-rose-200/50" />
                    </motion.div>
                </motion.div>

                {/* Bank Accounts Grid */}
                {/* <div className="max-w-2xl mx-auto grid gap-6">
                    {config.data.banks.map((account, index) => (
                        <motion.div
                            key={account.accountNumber}
                            initial={{ opacity: 0, y: 20 }}
                            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 * index + 0.7 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-rose-100/50 to-pink-100/50 rounded-2xl transform transition-transform group-hover:scale-105 duration-300" />
                            <div className="relative backdrop-blur-sm bg-white/80 p-6 rounded-2xl border border-rose-100/50 shadow-lg">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 rounded-lg bg-white p-2 shadow-sm">
                                            <Building2 className="w-full h-full text-rose-500" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-800">{account.bank}</h3>
                                            <p className="text-sm text-gray-500">{account.accountName}</p>
                                        </div>
                                    </div>
                                    <Wallet className="w-5 h-5 text-rose-400" />
                                </div>

                                <div className="mt-4">
                                    <div className="flex items-center justify-between bg-gray-50/80 px-4 py-3 rounded-lg">
                                        <p className="font-mono text-gray-700">{account.accountNumber}</p>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => copyToClipboard(account.accountNumber, account.bank)}
                                            className="flex items-center space-x-1 text-rose-500 hover:text-rose-600"
                                        >
                                            {copiedAccount === account.bank ? (
                                                <CheckCircle className="w-4 h-4" />
                                            ) : (
                                                <Copy className="w-4 h-4" />
                                            )}
                                            <span className="text-sm">
                                                {copiedAccount === account.bank ? 'Copied!' : 'Copy'}
                                            </span>
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div> */}
            </div>
        </section>
    );
}