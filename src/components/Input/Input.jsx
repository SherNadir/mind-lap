export const Input = ({
  placeholder,
  buttonText = "text-xl",
  noBorder,
  buttonSize,
  fontSize = "text-xl",
  padding = "p-7 ",
  ...props
}) => {
  return (
    <div className={`w-full bg-white rounded-full ${padding}`} {...props}>
      <div className="flex items-center justify-between">
        <input
          type="email"
          placeholder={placeholder}
          className={`text-grey-400 w-3/5 focus:outline-none ${fontSize}`}
        />
        {noBorder ? <></> : <div className="bg-grey-200 h-10 w-1"></div>}
        <button
          className={`transition duration-200 ease-out hover:bg-primary-200 bg-primary text-white rounded-full font-bold	${buttonSize}`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};
