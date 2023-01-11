import { AuthToDescription } from "./AuthToDescription";
import { AutoSaveToDescription } from "./AutoSaveToDescription";
import { LinksToDescription } from "./LinksToDescritpion";
import { UploadToDescription } from "./UploadToDescription";

export const Description = () => (
	<div className = "home__description">
		<h2>Описание</h2>

		<p>
			Данный проект состоит из следующих разделов:
		</p>

		<LinksToDescription />
		
		<AuthToDescription />

		<AutoSaveToDescription />
		
		<UploadToDescription />

		<p>
			Для сохранения информации введенной от пользователя используется Realtime Database сервиса firebase от Google, а для сохранения файлов, прикрепленных к задаче и изображений контактов, используется Storage сервиса firebase от Google.
		</p>

	</div>
)