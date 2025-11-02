

const Button = ({ children, className }) => {
  return (
    <button
      className={`cursor-pointer rounded-full w-full px-8 py-2 text-white font-semibold transition-transform 
        duration-300 flex justify-center items-center gap-2  hover:scale-105 ${className}`}
      style={{
        background: "linear-gradient(to bottom, #FF9C01, #FF6F01)",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
