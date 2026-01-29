export default function Loading() {
    return (
        <div className="flex h-[50vh] w-full items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-stone-200 border-t-primary"></div>
                <p className="font-serif text-lg text-stone-500 animate-pulse">Chargement...</p>
            </div>
        </div>
    );
}
