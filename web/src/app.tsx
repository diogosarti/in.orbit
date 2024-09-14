import { Dialog } from "./components/ui/dialog";
import { CreateGal } from "./components/create-goal";
import { Summary } from "./components/summary";
import { EmptyGoals } from "./components/empty-goals";
import { useQuery } from "@tanstack/react-query";
import { LoadingComp } from "./components/loading";
import { getSummary } from "./http/get-summary";

export function App() {
  const { data, isLoading } = useQuery({
    queryKey: ["summary"],
    queryFn: getSummary,
    staleTime: 1000 * 60,
  });

  return (
    <Dialog>
      {isLoading ? (
        <LoadingComp />
      ) : data?.total && data.total > 0 ? (
        <Summary />
      ) : (
        <EmptyGoals />
      )}

      <CreateGal />
    </Dialog>
  );
}
