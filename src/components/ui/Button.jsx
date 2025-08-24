const Button = ({ children, onClick }) => {
  return (
    <button 
        className="h-16 w-64 bg-gold text-lg p-6 font-headings shadow-base cursor-pointer uppercase font-bold hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hover"
        onClick={onClick}
    >
        {children}
    </button>
  )
}

export default Button