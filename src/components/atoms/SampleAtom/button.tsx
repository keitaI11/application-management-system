import React, {ReactNode, FC} from "react";

interface ButtonProps {
    onClick: () => void;
    children: ReactNode;
}

const Button: FC<ButtonProps> = ({onClick, children: childlen}) => {
    return (
        <button onClick={onClick}>{childlen}</button>
    );
}

export default Button
