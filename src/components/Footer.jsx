const Footer = () => {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-8 w-48 bg-gray-200" />
          <div className="h-8 w-48 bg-gray-200" />
          <div className="h-8 w-48 bg-gray-200" />
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="h-24 bg-gray-200" />
          <div className="h-24 bg-gray-200" />
          <div className="h-24 bg-gray-200" />
        </div>
        <div className="mt-6 space-y-2">
          <div className="h-4 w-64 bg-gray-200" />
          <div className="h-4 w-64 bg-gray-200" />
          <div className="h-4 w-64 bg-gray-200" />
          <div className="h-4 w-64 bg-gray-200" />
          <div className="h-4 w-64 bg-gray-200" />
        </div>
      </div>
    </footer>
  )
}

export default Footer


