export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Home" className="flex items-center gap-3 group">
      <img 
        src="/logo.png"
        alt="Neural Coffee Co Logo"
        className="h-10 w-10 object-contain transition-transform group-hover:scale-110" 
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
      <div className="flex flex-col">
        <span className="text-lg font-playfair font-bold text-foreground">Neural Coffee</span>
        <span className="text-xs text-muted-foreground tracking-wider">ADAPTOGENIC BLENDS</span>
      </div>
    </a>
  )
}