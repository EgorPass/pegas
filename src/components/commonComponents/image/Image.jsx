import { memo } from "react";

import placeholder from "../../../images/placeholder.svg";
import noFoto from "../../../images/no-foto.png"

export const Image = memo(
													({		
														classNameForImage,
														classNameForContainer,
														addImage = false,
														url = "",
														status = "pending",
														clickAtAddImage = (e) => { },
														clickAtRemoveImage = (e) => { }
													}) => (
		
	<div className = { classNameForContainer } >
			
		{
			addImage && status !== "pending" && ( status === "" || status === "rejected" ) &&
				<label>
					<div	className = { `${ classNameForImage }-add` } >
						<span>
						+
						</span>
						<input
							name="files"
							type="file"
							onChange = { clickAtAddImage } />
					</div>
				</label>
		}
		
		{
			addImage && ( status === "fulfilled" ) && status !== "pending" &&
				<div 
					className={`${classNameForImage}-remove`}
					onClick = { clickAtRemoveImage }
				>
					x
				</div>
		}
		
		<img
			alt = "contact"
			className = { classNameForImage }		
			src = { status === "fulfilled" ? url : status === "pending" ? placeholder: noFoto }
		/>
			
	</div>
))