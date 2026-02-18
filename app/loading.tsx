export default function Loading() {
    return (
        <div className="flex h-[50vh] w-full items-center justify-center">
            <div className="flex flex-col items-center gap-4 relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-150" />

                {/* Spinner */}
                <div className="relative h-14 w-14">
                    <div className="absolute inset-0 animate-spin rounded-full border-4 border-primary/20 border-t-primary"></div>
                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/5 to-amber-50/50"></div>
                </div>

                <p className="font-serif text-lg text-stone-600 animate-pulse relative">
                    Chargement<span className="text-primary">...</span>
                </p>
            </div>
        </div>
    );
}
