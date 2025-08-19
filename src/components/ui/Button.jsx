const Button = ({ children }) => {
  return (
    <button className="h-16 w-64 bg-gold text-lg p-6 font-headings shadow-base cursor-pointer uppercase font-bold">
        {children}
    </button>
  )
}

export default Button