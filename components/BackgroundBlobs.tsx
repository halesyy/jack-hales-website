function BackgroundBlobs() {
   return (
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
         {/* Keep the visible top-left blob */}
         <div className="absolute -top-8 -left-8 h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 rounded-full bg-pink-300 opacity-20 sm:opacity-30 md:opacity-40 lg:opacity-50 blur-3xl" />

         {/* Additional blobs within header bounds */}
         <div className="absolute top-4 right-8 h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 rounded-full bg-blue-300 opacity-20 sm:opacity-30 md:opacity-40 lg:opacity-45 blur-3xl" />
         <div className="absolute top-24 left-20 h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40 rounded-full bg-purple-300 opacity-15 sm:opacity-25 md:opacity-35 blur-3xl" />
         <div className="absolute top-28 right-28 h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 rounded-full bg-green-300 opacity-15 sm:opacity-25 md:opacity-35 blur-3xl" />
      </div>
   )
}

export default BackgroundBlobs


