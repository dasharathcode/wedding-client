// import { motion, AnimatePresence } from 'framer-motion'
// import Confetti from 'react-confetti';
// import Marquee from "@/components/ui/marquee";
// import {
//     Calendar,
//     Clock,
//     ChevronDown,
//     User,
//     MessageCircle,
//     Send,
//     Smile,
//     CheckCircle,
//     XCircle,
//     HelpCircle, Heart
// } from 'lucide-react'
// import { useState } from 'react';
// import { formatEventDate } from '@/lib/formatEventDate';

// export default function Wishes() {
//     const [showConfetti, setShowConfetti] = useState(false);
//     const [newWish, setNewWish] = useState('');
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [attendance, setAttendance] = useState('');
//     const [isOpen, setIsOpen] = useState(false);

//     const options = [
//         { value: 'ATTENDING', label: 'Yes, I will attend' },
//         { value: 'NOT_ATTENDING', label: "Sorry, I can’t attend" },
//         { value: 'MAYBE', label: 'Maybe, I will confirm later' }
//     ];

//     // Example wishes - replace with your actual data
//     const [wishes, setWishes] = useState([
//         {
//             id: 1,
//             name: "Ananya Das",
//             message:
//                 "Wishing you both endless love and laughter. May your new journey be filled with joy and togetherness! 💕",
//             timestamp: "2025-02-14T19:30:00Z",
//             attending: "attending",
//         },
//         {
//             id: 2,
//             name: "Rahul Ghosh",
//             message:
//                 "Congratulations to the beautiful couple! May your marriage be blessed with lifelong happiness and understanding. 💫",
//             timestamp: "2025-02-15T12:15:00Z",
//             attending: "not attending",
//         },
//         {
//             id: 3,
//             name: "Moumita Roy",
//             message:
//                 "Sending my warmest wishes! May your wedding day mark the beginning of a wonderful forever. 🌸",
//             timestamp: "2025-02-15T14:45:00Z",
//             attending: "maybe",
//         },
//     ]);



//     const FloatingHearts = () => {
//         return (
//             <div className="absolute inset-0 overflow-hidden pointer-events-none">
//                 {[...Array(8)].map((_, i) => (
//                     <motion.div
//                         key={i}
//                         initial={{
//                             opacity: 0,
//                             scale: 0,
//                             x: Math.random() * window.innerWidth,
//                             y: window.innerHeight
//                         }}
//                         animate={{
//                             opacity: [0, 1, 1, 0],
//                             scale: [0, 1, 1, 0.5],
//                             x: Math.random() * window.innerWidth,
//                             y: -100
//                         }}
//                         transition={{
//                             duration: 4,
//                             repeat: Infinity,
//                             delay: i * 0.8,
//                             ease: "easeOut"
//                         }}
//                         className="absolute"
//                     >
//                         <Heart
//                             className={`w-${Math.floor(Math.random() * 2) + 8} h-${Math.floor(Math.random() * 2) + 8} ${i % 3 === 0 ? 'text-rose-400' :
//                                 i % 3 === 1 ? 'text-pink-400' :
//                                     'text-red-400'
//                                 }`}
//                             fill="currentColor"
//                         />
//                     </motion.div>
//                 ))}
//             </div>
//         );
//     };













//     const handleSubmitWish = async (e) => {
//         e.preventDefault();
//         if (!newWish.trim()) return;

//         setIsSubmitting(true);
//         // Simulating API call
//         await new Promise(resolve => setTimeout(resolve, 1000));

//         const newWishObj = {
//             id: wishes.length + 1,
//             name: "Guest", // Replace with actual user name
//             message: newWish,
//             attend: "attending",
//             timestamp: new Date().toISOString()
//         };

//         setWishes(prev => [newWishObj, ...prev]);
//         setNewWish('');
//         setIsSubmitting(false);
//         setShowConfetti(true);
//         setTimeout(() => setShowConfetti(false), 3000);
//     };
//     const getAttendanceIcon = (status) => {
//         switch (status) {
//             case 'attending':
//                 return <CheckCircle className="w-4 h-4 text-emerald-500" />;
//             case 'not-attending':
//                 return <XCircle className="w-4 h-4 text-rose-500" />;
//             case 'maybe':
//                 return <HelpCircle className="w-4 h-4 text-amber-500" />;
//             default:
//                 return null;
//         }
//     };
//     return (<>
//         <section id="wishes" className="min-h-screen relative overflow-hidden">
//             {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}
//             <div className="container mx-auto px-4 py-20 relative z-10">
//                 {/* Section Header */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     className="text-center space-y-4 mb-16"
//                 >
//                     <motion.span
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.2 }}
//                         className="inline-block text-pink-500 font-medium tracking-wide"
//                     >
//                         Share Your Love & Warm Wishes
//                     </motion.span>

//                     <motion.h2
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.3 }}
//                         className="text-4xl md:text-5xl font-serif text-gray-800"
//                     >
//                         Messages & Blessings
//                     </motion.h2>

//                     {/* Decorative Divider */}
//                     <motion.div
//                         initial={{ scale: 0 }}
//                         animate={{ scale: 1 }}
//                         transition={{ delay: 0.4 }}
//                         className="flex items-center justify-center gap-4 pt-4"
//                     >
//                         <div className="h-[1px] w-12 bg-rose-200" />
//                         <MessageCircle className="w-5 h-5 text-rose-400" />
//                         <div className="h-[1px] w-12 bg-rose-200" />
//                     </motion.div>
//                 </motion.div>

//                 {/* Wishes List */}
//                 <div className="max-w-2xl mx-auto space-y-6">
//                     <AnimatePresence>
//                         <Marquee speed={20}
//                             gradient={false}
//                             className="[--duration:20s] py-2">
//                             {wishes.map((wish, index) => (
//                                 <motion.div
//                                     key={wish.id}
//                                     initial={{ opacity: 0, y: 20 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     exit={{ opacity: 0, y: -20 }}
//                                     transition={{ delay: index * 0.1 }}
//                                     className="group relative w-[280px]"
//                                 >
//                                     {/* Background gradient */}
//                                     <div className="absolute inset-0 bg-gradient-to-r from-rose-100/50 to-pink-100/50 rounded-xl transform transition-transform group-hover:scale-[1.02] duration-300" />

//                                     {/* Card content */}
//                                     <div className="relative backdrop-blur-sm bg-white/80 p-4 rounded-xl border border-rose-100/50 shadow-md">
//                                         {/* Header */}
//                                         <div className="flex items-start space-x-3 mb-2">
//                                             {/* Avatar */}
//                                             <div className="flex-shrink-0">
//                                                 <div className="w-8 h-8 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 flex items-center justify-center text-white text-sm font-medium">
//                                                     {wish.name[0].toUpperCase()}
//                                                 </div>
//                                             </div>

//                                             {/* Name, Time, and Attendance */}
//                                             <div className="flex-1 min-w-0">
//                                                 <div className="flex items-center space-x-2">
//                                                     <h4 className="font-medium text-gray-800 text-sm truncate">
//                                                         {wish.name}
//                                                     </h4>
//                                                     {getAttendanceIcon(wish.attending)}
//                                                 </div>
//                                                 <div className="flex items-center space-x-1 text-gray-500 text-xs">
//                                                     <Clock className="w-3 h-3" />
//                                                     <time className="truncate">
//                                                         {formatEventDate(wish.timestamp)}
//                                                     </time>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         {/* Message */}
//                                         <p className="text-gray-600 text-sm leading-relaxed mb-2 line-clamp-3">
//                                             {wish.message}
//                                         </p>

//                                         {/* Optional: Time indicator for recent messages */}
//                                         {Date.now() - new Date(wish.timestamp).getTime() < 3600000 && (
//                                             <div className="absolute top-2 right-2">
//                                                 <span className="px-2 py-1 rounded-full bg-rose-100 text-rose-600 text-xs font-medium">
//                                                     New
//                                                 </span>
//                                             </div>
//                                         )}
//                                     </div>
//                                 </motion.div>
//                             ))}
//                         </Marquee>
//                     </AnimatePresence>
//                 </div>
//                 {/* Wishes Form */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.5 }}
//                     className="max-w-2xl mx-auto mt-12"
//                 >
//                     <form onSubmit={handleSubmitWish} className="relative">
//                         <div className="backdrop-blur-sm bg-white/80 p-6 rounded-2xl border border-pink-100/50 shadow-lg">
//                             <div className="space-y-4">
//                                 {/* Name Input */}
//                                 <div className="space-y-2">
//                                     <div className="flex items-center space-x-2 text-gray-500 text-sm mb-1">
//                                         <User className="w-4 h-4" />
//                                         <span>Your Name</span>
//                                     </div>
//                                     <input
//                                         type="text"
//                                         placeholder="Enter your name..."
//                                         className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-pink-100 focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 transition-all duration-200 text-gray-700 placeholder-gray-400"
//                                         required
//                                     />
//                                 </div>

//                                 {/* Attendance Select */}
//                                 <motion.div
//                                     initial={{ opacity: 0, y: 20 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ delay: 0.1 }}
//                                     className="space-y-2 relative"
//                                 >
//                                     <div className="flex items-center space-x-2 text-gray-500 text-sm mb-1">
//                                         <Calendar className="w-4 h-4" />
//                                         <span>Will you be attending?</span>
//                                     </div>

//                                     {/* Custom Select Button */}
//                                     <button
//                                         type="button"
//                                         onClick={() => setIsOpen(!isOpen)}
//                                         className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-pink-100 focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 transition-all duration-200 text-left flex items-center justify-between"
//                                     >
//                                         <span className={attendance ? "text-gray-700" : "text-gray-400"}>
//                                             {attendance
//                                                 ? options.find((opt) => opt.value === attendance)?.label
//                                                 : "Select your attendance..."}
//                                         </span>
//                                         <ChevronDown
//                                             className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""
//                                                 }`}
//                                         />
//                                     </button>

//                                     {/* Dropdown Options */}
//                                     <AnimatePresence>
//                                         {isOpen && (
//                                             <motion.div
//                                                 initial={{ opacity: 0, y: -10 }}
//                                                 animate={{ opacity: 1, y: 0 }}
//                                                 exit={{ opacity: 0, y: -10 }}
//                                                 className="absolute z-10 w-full mt-1 bg-white rounded-xl shadow-lg border border-pink-100 overflow-hidden"
//                                             >
//                                                 {options.map((option) => (
//                                                     <motion.button
//                                                         key={option.value}
//                                                         type="button"
//                                                         onClick={() => {
//                                                             setAttendance(option.value);
//                                                             setIsOpen(false);
//                                                         }}
//                                                         whileHover={{ backgroundColor: "rgb(255, 240, 245)" }}
//                                                         className={`w-full px-4 py-2.5 text-left transition-colors ${attendance === option.value
//                                                             ? "bg-pink-50 text-pink-600"
//                                                             : "text-gray-700 hover:bg-pink-50"
//                                                             }`}
//                                                     >
//                                                         {option.label}
//                                                     </motion.button>
//                                                 ))}
//                                             </motion.div>
//                                         )}
//                                     </AnimatePresence>
//                                 </motion.div>

//                                 {/* Wish Textarea */}
//                                 <div className="space-y-2">
//                                     <div className="flex items-center space-x-2 text-gray-500 text-sm mb-1">
//                                         <MessageCircle className="w-4 h-4" />
//                                         <span>Your Message</span>
//                                     </div>
//                                     <textarea
//                                         placeholder="Write your warm wishes or blessings for the couple..."
//                                         className="w-full h-32 p-4 rounded-xl bg-white/50 border border-pink-100 focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 resize-none transition-all duration-200"
//                                         required
//                                     />
//                                 </div>
//                             </div>

//                             {/* Submit Button */}
//                             <div className="flex items-center justify-between mt-4">
//                                 <div className="flex items-center space-x-2 text-gray-500">
//                                     <Smile className="w-5 h-5" />
//                                     <span className="text-sm">Send your love & blessings</span>
//                                 </div>
//                                 <motion.button
//                                     whileHover={{ scale: 1.02 }}
//                                     whileTap={{ scale: 0.98 }}
//                                     className={`flex items-center space-x-2 px-6 py-2.5 rounded-xl text-white font-medium transition-all duration-200 ${isSubmitting
//                                         ? "bg-gray-300 cursor-not-allowed"
//                                         : "bg-pink-500 hover:bg-pink-600"
//                                         }`}
//                                 >
//                                     <Send className="w-4 h-4" />
//                                     <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
//                                 </motion.button>
//                             </div>
//                         </div>
//                     </form>
//                 </motion.div>

//             </div>
//         </section>
//     </>)
// }

















import { motion, AnimatePresence } from 'framer-motion'
import Confetti from 'react-confetti';
import Marquee from "@/components/ui/marquee";
import {
    Calendar,
    Clock,
    ChevronDown,
    User,
    MessageCircle,
    Send,
    Smile,
    CheckCircle,
    XCircle,
    HelpCircle,
    Heart
} from 'lucide-react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { formatEventDate } from '@/lib/formatEventDate';

export default function Wishes() {
    const { slug } = useParams(); // URL থেকে wedding slug নিচ্ছি
    const [showConfetti, setShowConfetti] = useState(false);
    const [newWish, setNewWish] = useState('');
    const [guestName, setGuestName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [attendance, setAttendance] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [wishes, setWishes] = useState([]);

    const options = [
        { value: 'attending', label: 'Yes, I will attend' },
        { value: 'not-attending', label: "Sorry, I can’t attend" },
        { value: 'maybe', label: 'Maybe, I will confirm later' }
    ];

    // 🧠 Backend থেকে wishes আনবো
    useEffect(() => {
        const fetchWishes = async () => {
            try {
                const res = await axios.get(`https://eventbengla-server-5bku.onrender.com/api/wedding/${slug}`);
                setWishes(res.data.wishes || []);
            } catch (err) {
                console.error(err);
            }
        };
        fetchWishes();
    }, [slug]);

    // 📨 Wish পাঠানো
    const handleSubmitWish = async (e) => {
        e.preventDefault();
        if (!guestName.trim() || !newWish.trim() || !attendance) {
            toast.error("Please fill all fields!");
            return;
        }

        setIsSubmitting(true);

        try {
            const res = await axios.post(`http://localhost:5000/api/wedding/${slug}/wishes`, {
                name: guestName,
                message: newWish,
                attending: attendance,
            });

            setWishes(res.data.wishes);
            setGuestName('');
            setNewWish('');
            setAttendance('');
            setIsSubmitting(false);
            setShowConfetti(true);
            toast.success("Your wish has been sent!");
            setTimeout(() => setShowConfetti(false), 3000);
        } catch (err) {
            console.error(err);
            toast.error("Failed to send wish");
            setIsSubmitting(false);
        }
    };

    const getAttendanceIcon = (status) => {
        switch (status) {
            case 'attending':
                return <CheckCircle className="w-4 h-4 text-emerald-500" />;
            case 'not-attending':
                return <XCircle className="w-4 h-4 text-rose-500" />;
            case 'maybe':
                return <HelpCircle className="w-4 h-4 text-amber-500" />;
            default:
                return null;
        }
    };

    return (
        <section id="wishes" className="min-h-screen relative overflow-hidden">
            {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}
            <div className="container mx-auto px-4 py-20 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-4 mb-16"
                >
                    <span className="inline-block text-pink-500 font-medium tracking-wide">
                        Share Your Love & Warm Wishes
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-800">
                        Messages & Blessings
                    </h2>
                    <div className="flex items-center justify-center gap-4 pt-4">
                        <div className="h-[1px] w-12 bg-rose-200" />
                        <MessageCircle className="w-5 h-5 text-rose-400" />
                        <div className="h-[1px] w-12 bg-rose-200" />
                    </div>
                </motion.div>

                {/* Wishes List */}
                <div className="max-w-2xl mx-auto space-y-6">
                    <AnimatePresence>
                        <Marquee speed={20} gradient={false} className="[--duration:20s] py-2">
                            {wishes.map((wish, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative w-[280px]"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-rose-100/50 to-pink-100/50 rounded-xl transform transition-transform group-hover:scale-[1.02] duration-300" />
                                    <div className="relative backdrop-blur-sm bg-white/80 p-4 rounded-xl border border-rose-100/50 shadow-md">
                                        <div className="flex items-start space-x-3 mb-2">
                                            <div className="flex-shrink-0">
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 flex items-center justify-center text-white text-sm font-medium">
                                                    {wish.name[0].toUpperCase()}
                                                </div>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center space-x-2">
                                                    <h4 className="font-medium text-gray-800 text-sm truncate">
                                                        {wish.name}
                                                    </h4>
                                                    {getAttendanceIcon(wish.attending)}
                                                </div>
                                                <div className="flex items-center space-x-1 text-gray-500 text-xs">
                                                    <Clock className="w-3 h-3" />
                                                    <time className="truncate">
                                                        {formatEventDate(wish.createdAt || wish.timestamp)}
                                                    </time>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-2 line-clamp-3">
                                            {wish.message}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </Marquee>
                    </AnimatePresence>
                </div>

                {/* Wish Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="max-w-2xl mx-auto mt-12"
                >
                    <form onSubmit={handleSubmitWish} className="relative">
                        <div className="backdrop-blur-sm bg-white/80 p-6 rounded-2xl border border-pink-100/50 shadow-lg">
                            <div className="space-y-4">

                                {/* Name */}
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2 text-gray-500 text-sm mb-1">
                                        <User className="w-4 h-4" />
                                        <span>Your Name</span>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Enter your name..."
                                        value={guestName}
                                        onChange={(e) => setGuestName(e.target.value)}
                                        className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-pink-100 focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 transition-all duration-200 text-gray-700 placeholder-gray-400"
                                        required
                                    />
                                </div>

                                {/* Attendance */}
                                <div className="space-y-2 relative">
                                    <div className="flex items-center space-x-2 text-gray-500 text-sm mb-1">
                                        <Calendar className="w-4 h-4" />
                                        <span>Will you be attending?</span>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-pink-100 focus:border-pink-300 focus:ring focus:ring-pink-200 transition-all duration-200 text-left flex items-center justify-between"
                                    >
                                        <span className={attendance ? "text-gray-700" : "text-gray-400"}>
                                            {attendance
                                                ? options.find((opt) => opt.value === attendance)?.label
                                                : "Select your attendance..."}
                                        </span>
                                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                                    </button>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="absolute z-10 w-full mt-1 bg-white rounded-xl shadow-lg border border-pink-100 overflow-hidden"
                                            >
                                                {options.map((option) => (
                                                    <motion.button
                                                        key={option.value}
                                                        type="button"
                                                        onClick={() => {
                                                            setAttendance(option.value);
                                                            setIsOpen(false);
                                                        }}
                                                        whileHover={{ backgroundColor: "rgb(255,240,245)" }}
                                                        className={`w-full px-4 py-2.5 text-left transition-colors ${attendance === option.value
                                                            ? "bg-pink-50 text-pink-600"
                                                            : "text-gray-700 hover:bg-pink-50"
                                                            }`}
                                                    >
                                                        {option.label}
                                                    </motion.button>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Message */}
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2 text-gray-500 text-sm mb-1">
                                        <MessageCircle className="w-4 h-4" />
                                        <span>Your Message</span>
                                    </div>
                                    <textarea
                                        placeholder="Write your warm wishes..."
                                        value={newWish}
                                        onChange={(e) => setNewWish(e.target.value)}
                                        className="w-full h-32 p-4 rounded-xl bg-white/50 border border-pink-100 focus:border-pink-300 focus:ring focus:ring-pink-200 resize-none transition-all duration-200"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center space-x-2 text-gray-500">
                                    <Smile className="w-5 h-5" />
                                    <span className="text-sm">Send your love & blessings</span>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`flex items-center space-x-2 px-6 py-2.5 rounded-xl text-white font-medium ${isSubmitting
                                        ? "bg-gray-300 cursor-not-allowed"
                                        : "bg-pink-500 hover:bg-pink-600"
                                        }`}
                                >
                                    <Send className="w-4 h-4" />
                                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                                </motion.button>
                            </div>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
