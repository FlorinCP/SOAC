import "./CustomDropdown.css";
import { useRef, useState } from "react";

type Option = {
  value: string;
  label: string;
};

type CustomDropdownProps = {
  options: Option[];
  placeholder: string;
  value?: string;
  sendSelectedOption: (option: Option) => void;
};

function CustomDropdown({ options, placeholder, value, sendSelectedOption }: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(prevState => !prevState);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    sendSelectedOption(option);
  };

  return (
      <div className="select">
        <div className="trigger" onClick={toggleDropdown}>
          {value ? options.find((option) => option.value === value)?.label : (selectedOption ? selectedOption.label : placeholder)} &nbsp;
          <span className="material-symbols-outlined">expand_more</span>
        </div>
        {isOpen && (
            <div className="options" ref={dropdownRef}>
              {options.map((option) => (
                  <div
                      key={option.value}
                      className="option"
                      onClick={() => handleOptionClick(option)}
                  >
                    {option.label}
                  </div>
              ))}
            </div>
        )}
      </div>
  );
}

export default CustomDropdown;
