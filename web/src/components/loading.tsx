export function LoadingComp() {
  return (
    <div className="flex-col h-screen flex-1 gap-4 w-full flex items-center justify-center">
      <div className="w-20 h-20 border-4 border-transparent text-zinc-100 text-4xl animate-spin flex items-center justify-center  rounded-full">
        <div className="w-16 h-16 border-4 border-transparent text-purple-400 text-2xl animate-spin flex items-center justify-center border-t-purple-400 rounded-full"></div>
      </div>
    </div>
  );
}
