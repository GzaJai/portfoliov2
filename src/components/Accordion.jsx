import { Children, cloneElement, useState } from "react"

const Accordion = ({ children, allowMultiple = false }) => {
  const [openIndexes, setOpenIndexes] = useState([])

  const toggleItem = (index) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      )
    } else {
      setOpenIndexes((prev) => (prev[0] === index ? [] : [index]))
    }
  }

  return (
    <div className="rounded-base bg-white/5 overflow-hidden shadow-xs rounded-lg">
      {Children.map(children, (child, index) =>
        cloneElement(child, {
          isOpen: openIndexes.includes(index),
          onToggle: () => toggleItem(index),
        })
      )}
    </div>
  )
}

export default Accordion
