import { RoutineList } from "@/widgets/routine-list"

export function HomePage() {
	return (
		<main className="mx-auto max-w-lg px-4 py-10">
			<h1 className="mb-6 text-2xl font-bold">오늘의 루틴</h1>
			<RoutineList />
		</main>
	)
}