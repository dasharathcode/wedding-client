
// import { useState } from 'react';
// import { AnimatePresence } from 'framer-motion';
// import Layout from '@/components/Layout';
// import MainContent from '@/pages/MainContent';
// import LandingPage from '@/pages/LandingPage';
// import { Helmet, HelmetProvider } from 'react-helmet-async';
// import config from '@/config/config';


// function App() {
//   const [isInvitationOpen, setIsInvitationOpen] = useState(false);
//   return (
//     <HelmetProvider>
//       <Helmet>
//         {/* Primary Meta Tags */}
//         <title>{config.data.title}</title>
//         <meta name="title" content={config.data.title} />
//         <meta name="description" content={config.data.description} />

//         {/* Open Graph / Facebook */}
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content={window.location.href} />
//         <meta property="og:title" content={config.data.title} />
//         <meta property="og:description" content={config.data.description} />
//         <meta property="og:image" content={config.data.ogImage} />

//         {/* Twitter */}
//         <meta property="twitter:card" content="summary_large_image" />
//         <meta property="twitter:url" content={window.location.href} />
//         <meta property="twitter:title" content={config.data.title} />
//         <meta property="twitter:description" content={config.data.description} />
//         <meta property="twitter:image" content={config.data.ogImage} />

//         {/* Favicon */}
//         <link rel="icon" type="image/x-icon" href={config.data.favicon} />

//         {/* Additional Meta Tags */}
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta name="theme-color" content="#FDA4AF" /> {/* Rose-300 color */}
//       </Helmet>

//       <AnimatePresence mode='wait'>
//         {!isInvitationOpen ? (
//           <LandingPage onOpenInvitation={() => setIsInvitationOpen(true)} />
//         ) : (
//           <Layout>
//             <MainContent />
//           </Layout>
//         )}
//       </AnimatePresence>
//     </HelmetProvider>
//   );
// }

// export default App;












import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import MainContent from "@/pages/MainContent";
import LandingPage from "@/pages/LandingPage";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useParams } from "react-router-dom"; // we will use react-router-dom to get slug
import defaultConfig from "@/config/config"; // fallback config

function App() {
  const { slug } = useParams(); // URL slug (like rahul-weds-ankita)
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [config, setConfig] = useState(defaultConfig.data); // default fallback data
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch data from backend using slug
    if (slug) {
      fetch(`https://wedding-server-09vt.onrender.com/api/wedding/${slug}`)
        .then((res) => res.json())
        .then((data) => {
          // map backend data to config format
          const dynamicData = {
            title: `The Wedding of ${data.groomName} & ${data.brideName}`,
            description: data.story || defaultConfig.data.description,
            groomName: data.groomName,
            brideName: data.brideName,
            date: data.weddingDate,


            time:data.time,
            maps_embed: data.maps_embed,
            location: data.location || "Venue to be announced",
            address: data.address || "",
            event: data.agenda || [],
            images: data.images || [],
            ogImage: data.images?.[0] || defaultConfig.data.ogImage,
            favicon: defaultConfig.data.favicon,
            audio: defaultConfig.data.audio,
            brideImage: data.brideImage,
            groomImage: data.groomImage,
            preWedding: data.preWedding,



          };
          setConfig(dynamicData);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [slug]);

  if (loading) return <p className="text-center mt-20">Loading wedding details...</p>;

  return (
    <HelmetProvider>
      <Helmet>
        <title>{config.title}</title>
        <meta name="title" content={config.title} />
        <meta name="description" content={config.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content={config.title} />
        <meta property="og:description" content={config.description} />
        <meta property="og:image" content={config.ogImage} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={window.location.href} />
        <meta property="twitter:title" content={config.title} />
        <meta property="twitter:description" content={config.description} />
        <meta property="twitter:image" content={config.ogImage} />
        <link rel="icon" type="image/x-icon" href={config.favicon} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#FDA4AF" />
      </Helmet>

      <AnimatePresence mode="wait">
        {!isInvitationOpen ? (
          <LandingPage
            config={config}
            onOpenInvitation={() => setIsInvitationOpen(true)}
          />
        ) : (
          <Layout config={config}>
            <MainContent config={config} />
          </Layout>
        )}
      </AnimatePresence>
    </HelmetProvider>
  );
}

export default App;

