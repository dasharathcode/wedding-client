// src/config/weddingConfig.js

const config = {
  data: {
    // === 💍 MAIN INVITATION DETAILS ===
    title: "The Wedding of Fulan & Fulana",
    description:
      "With hearts full of love and gratitude, we invite you to join us in celebrating the beginning of our new journey together.",

    // === 👰🤵 COUPLE DETAILS ===
    groomName: "Ankita",
    brideName: "Rahul",
    parentGroom: "Son of Mr. Groom & Mrs. Groom",
    parentBride: "Daughter of Mr. Bride & Mrs. Bride",

    // === 📅 EVENT DETAILS ===
    date: "2026-01-1", // YYYY-MM-DD
    time: "4:16 PM - 5:30 PM",
    location: "Grand Ballroom, Hotel Majesty",
    address: "1, J.L. Sudirman Road, Kolkata, West Bengal, India",

    // === 🗺️ MAP DETAILS ===
    maps_url: "https://goo.gl/maps/abcdef",
    maps_embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0000000000005!2d106.8270733147699!3d-6.175392995514422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4f1b6d7b1e7%3A0x2e69f4f1b6d7b1e7!2sMonumen%20Nasional!5e0!3m2!1sen!2sin!4v1633666820004!5m2!1sen!2sin",

    // === 🌸 META TAGS ===
    ogImage: "/images/og-image.jpg",
    favicon: "/images/favicon.ico",

    // === 📋 AGENDA / SCHEDULE ===
    event: [
      {
        title: "Wedding Ceremony",
        date: "2026-01-1",
        startTime: "4:16 PM",
        endTime: "5:30 PM",
        location: "Grand Ballroom, Hotel Majesty",
        address: "1, J.L. Sudirman Road, Kolkata, West Bengal, India",
      },
      {
        title: "Reception Party",
        date: "2026-01-1",
        startTime: "6:80 PM",
        endTime: "10:00 PM",
        location: "Grand Ballroom, Hotel Majesty",
        address: "1, J.L. Sudirman Road, Kolkata, West Bengal, India",
      },
    ],

    // === 🎵 BACKGROUND MUSIC ===
    audio: {
      src: "/audio/Bengali_Whatsapp_Status_Bolo_Priya_Bolo_Lyrics_Whatsapp_Status_Bengali.mp3",
      title: "Welcome",
      autoplay: true,
      loop: true,
    },

    // === 💝 BANK DETAILS (DIGITAL GIFT) ===
    banks: [
      {
        bank: "State Bank of India (SBI)",
        accountNumber: "1234567890",
        accountName: "FULAN",
      },
      {
        bank: "HDFC Bank",
        accountNumber: "0987654321",
        accountName: "FULANA",
      },
    ],
  },
};

export default config;
