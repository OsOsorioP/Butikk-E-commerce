import { Button as MuiButton } from '@mui/material';

interface ButtonProps {
    label: string;
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary' | 'inherit';
    component: React.ElementType;
    to: string;
    onClick?: () => void;
}

export const Button = ({ label, size = "small", color = "primary", to, component="div", onClick }: ButtonProps) => {
    return (
        <MuiButton
            variant="contained"
            size={size}
            color={color}
            onClick={onClick}
            component={component}
            to={to}
        >
            {label}
        </MuiButton>
    )
};
