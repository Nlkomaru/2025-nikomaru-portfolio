import Scene from "../../components/scene";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
            {/* <Footer /> */}
        </>
    );
}
