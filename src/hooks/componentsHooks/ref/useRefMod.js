import { useRef } from "react"

export function useRefMod() {

	const errorModAndTitle = useRef({
			title: "",
			loginClassMod: "",
			titleClassMod: "",
			passClassMod: "",
			confClassMod: "",
	})

	return {
		errorModAndTitle
	}
}