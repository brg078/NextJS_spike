"use client";

import { useActionState } from "react";

async function increment(
	previousState: number,
	formData: any
): Promise<number> {
    console.log(`in increment function, previousState: ${previousState}, formData: ${JSON.stringify(formData)}`);
	return previousState + 1;
}

//interface StatefulFormProps {} {}: StatefulFormProps

export default function StatefulForm() {
	const [state, formAction] = useActionState(increment, 1);
    console.log(`in StatefulForm Render: state: ${state}`);

	return (
		<form>
			<div>{state}</div>
			<button
				className="rounded p-2 bg-green-600 border-2 border-double border-black hover:bg-purple-700 inline"
				type="submit"
				formAction={formAction}
			>
				Increment
			</button>
		</form>
	);
}