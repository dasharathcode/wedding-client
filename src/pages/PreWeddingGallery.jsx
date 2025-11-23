import { motion } from 'framer-motion'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const PreWeddingGallery = ({ config }) => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageIndex, setImageIndex] = useState(0)
  
  // Limit to 10 images maximum
  const images = config.preWedding ? config.preWedding.slice(0, 10) : []
  
  const openLightbox = (index) => {
    setImageIndex(index)
    setSelectedImage(images[index])
  }
  
  const closeLightbox = () => {
    setSelectedImage(null)
  }
  
  const navigateImage = (direction) => {
    if (direction === 'next') {
      const newIndex = (imageIndex + 1) % images.length
      setImageIndex(newIndex)
      setSelectedImage(images[newIndex])
    } else {
      const newIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1
      setImageIndex(newIndex)
      setSelectedImage(images[newIndex])
    }
  }
  
  // Container variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  // Item variants for individual images
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="gallery" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-serif text-gray-800 mb-4">
            Our <span className="text-rose-500">Pre-Wedding</span> Moments
          </h2>
          <div className="w-24 h-1 bg-rose-200 mx-auto rounded-full"></div>
        </motion.div>
        
        {images.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative overflow-hidden rounded-lg shadow-md cursor-pointer group ${
                  index === 0 || index === 6 ? 'col-span-2 row-span-2' : ''
                }`}
                onClick={() => openLightbox(index)}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-square w-full h-full">
                  <img
                    src={image}
                    alt={`Pre-wedding photo ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                  <span className="text-white text-sm font-medium">View</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No pre-wedding photos available.</p>
          </div>
        )}
      </div>
      
      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
            <button
              className="absolute top-4 right-4 text-white bg-black/30 rounded-full p-2 hover:bg-black/50 transition-colors z-10"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>
            
            <button
              className="absolute left-4 text-white bg-black/30 rounded-full p-2 hover:bg-black/50 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation()
                navigateImage('prev')
              }}
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              className="absolute right-4 text-white bg-black/30 rounded-full p-2 hover:bg-black/50 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation()
                navigateImage('next')
              }}
            >
              <ChevronRight size={24} />
            </button>
            
            <motion.img
              key={imageIndex}
              src={selectedImage}
              alt={`Pre-wedding photo ${imageIndex + 1}`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <p className="text-white text-sm">
                {imageIndex + 1} / {images.length}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  )
}

export default PreWeddingGallery