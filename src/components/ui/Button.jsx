const Button = ({ children }) => {
  return (
    <button className="h-24 w-96 bg-gold text-4xl font-headings shadow-base cursor-pointer">
        {children}
    </button>
  )
}

export default Button