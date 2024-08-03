const Logo = () => {
    const name = import.meta.env.VITE_APP_NAME || 'ZApp';

    return <span className="topbar">{name}</span>;
};

export default Logo;
