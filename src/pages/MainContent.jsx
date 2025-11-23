import Hero from '@/pages/Hero'
import Events from '@/pages/Events'
import Location from '@/pages/Location';
import Wishes from '@/pages/Wishes';
import Gifts from '@/pages/Gifts';
 import PreWeddingGallery from '@/pages/PreWeddingGallery';

// // Main Invitation Content
// export default function MainContent() {
//     return (
//         <>
//             <Hero />

//             <Events />

//             <Location />
//             <Gifts />
//             <Wishes />
//         </>
//     )
// }





// Main Invitation Content
export default function MainContent({ config }) {
    return (
        <>
            <Hero config={config} />
            <Events config={config} />
            <Location config={config} />
           
            <PreWeddingGallery config={config} />
            <Gifts config={config} />
            <Wishes config={config} />
        </>
    );
}

