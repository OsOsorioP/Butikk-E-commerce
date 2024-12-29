import { IconButton as Button } from '@mui/material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

export interface IconButtonProps {
    size?: 'small' | 'medium' | 'large';
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
    icon?: JSX.Element;
    sx?: {};
    onClick?: () => void;
}

export const IconButton = ({
    size = "small",
    color = "inherit",
    icon = <InsertEmoticonIcon />,
    sx,
    onClick
}: IconButtonProps) => {
    return (
        <Button
            size={size}
            color={color}
            onClick={onClick}
            sx={sx}
        >
            {icon}
        </Button>
    )
}
