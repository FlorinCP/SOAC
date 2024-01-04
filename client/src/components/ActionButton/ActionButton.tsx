
import React, {useState} from "react";

interface ActionButtonProps {
    text: string;
    onClick: () => void;
    disabled?: boolean;
    active: boolean;
    type?: "button" | "submit" | "reset";
    size?: "small" | "medium" | "large";
    color: string;
    backgroundColor: string;
    children?: React.ReactNode;
}

const ActionButton:React.FC<ActionButtonProps> = ({text, onClick, disabled,active, type, size, color, backgroundColor ,children}) => {

    const [isHovered, setIsHovered] = useState(false);

    const defaultStyle = {
        padding: '10px',
        width: size === 'medium' ? '200px' : '250px',
        height: '45px',
        borderRadius: '5px',
        border: active ?  'none' : `1px solid ${backgroundColor}` ,
        color: active ? color : backgroundColor,
        backgroundColor: active ? backgroundColor : color,
        cursor: 'pointer',
        letterSpacing: '1px',
        fontSize: '17px',
        fontWeight: 'bold',
        transition: '0.3s all ease-in-out',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap : '10px'
    };

    const hoverStyle = {
        backgroundColor: color,
        color: backgroundColor,
        border: `1px solid ${backgroundColor}`,
        transition: '0.3s all ease-in-out'
    }

    const combinedStyle = isHovered ? { ...defaultStyle, ...hoverStyle } : defaultStyle;


    return (
        <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={combinedStyle}
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            {children}
            {text}
        </button>
    );
};


export default ActionButton;
