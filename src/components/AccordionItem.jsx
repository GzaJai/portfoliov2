const AccordionItem = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="relative">
      <button
        type="button"
        onClick={onToggle}
        className="flex items-center justify-between w-full p-5 font-medium text-body text-lg hover:text-heading hover:bg-neutral-secondary-medium gap-3"
      >
        <span>{title}</span>

        <svg
          className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m5 15 7-7 7 7"
          />
        </svg>
      </button>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 pb-6 md:p-5 text-body">
          {children}
        </div>
      </div>

      {/* Divider recortado */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-border-default bg-white/20" />
    </div>
  )
}

export default AccordionItem
