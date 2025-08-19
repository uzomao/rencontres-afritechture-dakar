const InfoSection = () => {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Headline and paragraph blocks */}
        <div className="space-y-6">
          <div className="h-16 w-full bg-gray-200" />
          <div className="h-28 w-full bg-gray-200" />
        </div>

        {/* Schedule grid approximation */}
        <div className="mt-12">
          <div className="h-8 w-40 bg-gray-200" />
          <div className="mt-4 grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-4 space-y-2">
              <div className="h-10 w-full bg-gray-200" />
              <div className="h-10 w-full bg-gray-200" />
              <div className="h-10 w-full bg-gray-200" />
              <div className="h-10 w-full bg-gray-200" />
              <div className="h-10 w-full bg-gray-200" />
            </div>
            <div className="col-span-12 md:col-span-8 space-y-4">
              <div className="h-24 w-full bg-gray-200" />
              <div className="h-24 w-full bg-gray-200" />
              <div className="h-24 w-full bg-gray-200" />
              <div className="h-24 w-full bg-gray-200" />
            </div>
          </div>
        </div>

        {/* Pavilions thumbnails row */}
        <div className="mt-16">
          <div className="h-8 w-40 bg-gray-200" />
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="h-36 bg-gray-200" />
            <div className="h-36 bg-gray-200" />
            <div className="h-36 bg-gray-200" />
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="h-36 bg-gray-200" />
            <div className="h-36 bg-gray-200" />
            <div className="h-36 bg-gray-200" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoSection


