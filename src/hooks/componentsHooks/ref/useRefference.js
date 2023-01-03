import { useRef } from "react";

export function useRefference() {
	
	const headerNavRef = useRef(null).current
	const navListRef = useRef(null).current
	const uploadFileRef = useRef({}).current
	const tooltipRef = useRef( null )

	return {
		uploadFileRef,
		tooltipRef
	}
}
