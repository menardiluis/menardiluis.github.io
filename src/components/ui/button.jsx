import React, { useState } from 'react';
import './button.css';

export default function Button({ 
  children, 
  onClick, 
  disabled, 
  variant = 'primary',
  type = 'button',
  className = '',
  href = null,
  target = null,
  rel = null,
  fullWidth = false
}) {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  const handleMouseLeave = () => {
    setIsPressed(false);
  };

  const buttonClasses = [
    'button',
    `button--${variant}`,
    isPressed && 'button--pressed',
    disabled && 'button--disabled',
    fullWidth && 'button--full-width',
    className
  ]
    .filter(Boolean)
    .join(' ');

  const commonProps = {
    className: buttonClasses,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    onMouseLeave: handleMouseLeave,
  };

  // Se href é fornecido, renderiza como <a>
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        {...commonProps}
      >
        {children}
      </a>
    );
  }

  // Caso contrário, renderiza como <button>
  return (
    <button
      {...commonProps}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}

