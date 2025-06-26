import { css } from "../../../../styled-system/css";

export const Navbar = () => {
    return (
        <div
            className={css({
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "1.5rem",
                width: "100%",
            })}
        >
            {navbarItems.map((item) => (
                <div
                    key={item.id}
                    className={css({
                        fontSize: {
                            base: "24px",
                            md: "32px",
                            lg: "36px",
                        },
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "normal",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        _hover: {
                            opacity: 0.7,
                            transform: "scale(1.05)",
                        },
                    })}
                >
                    {item.label}
                </div>
            ))}
        </div>
    );
};

const navbarItems = [
    { id: "talks", label: "Talks" },
    { id: "works", label: "Works" },
    { id: "about", label: "About me" },
];
