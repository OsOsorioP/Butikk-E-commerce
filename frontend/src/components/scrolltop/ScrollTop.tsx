import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { IconButton } from '@mui/material';
import { useEffect, useState } from "react";

export default function ScrollToUp() {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div>
            {isVisible &&
                (
                    <IconButton
                        onClick={scrollToTop}
                        sx={{
                            position: 'fixed',
                            bottom: 30,
                            right: 30,
                            borderRadius: '100%',
                            padding: '10px',
                            background: '#f9a2a2',
                            "&:hover": {background: 'gray'},
                        }}
                    >
                        <ExpandLessIcon sx={{color:'black'}} fontSize='medium' />
                    </IconButton>
                )
            }
        </div>
    );
}