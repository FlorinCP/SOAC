import style from "./CustomDropdown.module.css";
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
      <div className={style.select}>
        <div className={style.trigger} onClick={toggleDropdown}>
          {value ? options.find((option) => option.value === value)?.label : (selectedOption ? selectedOption.label : placeholder)} &nbsp;
          <span className="material-symbols-outlined">expand_more</span>
        </div>
        {isOpen && (
            <div className={style.options} ref={dropdownRef}>
              {options.map((option) => (
                  <div
                      key={option.value}
                      className={style.option}
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
