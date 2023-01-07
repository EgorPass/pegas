
/**
 * Компонент отрисовывает степень загрузки загружаемого файла
 * 
 * Компонент отрисовывается в случае если fileId есть в uploadFile
 * По uploadFile[fileId] заполняется ширина для уровня загрузки
 * 
 * @param {object} param0
 * @param {string } param0.name 
 * @param {string | number} param0.fileId
 * @param {string | number} param0.id 
 * @param {object | null} param0.uploadFile
 * @param {function} param0.clickAtCancelLoad 
 * 
 * @param name название файла в хранилище для clickAtRemoveFile
 * @param fileId индификатор который присуждается при файлу при его создании
 * @param id индификатор задачи (обекта из массива taskState), использутся для обработка clickAtCancelLoad
 * @param uploadFile содержит информацию о файле для отгрузке (fileId и progress-уровень загрузки),
 * @param clickAtCancelLoad обработчик для отмены загрузки файла к задаче компонента FileLoaderCancel 
 * @returns 
 * 
 */
export const FileLoader =	({ progress, children }) => {

	console.log("//file loader render ...")

	return (
			<div className = "pegas-body__file-loader file-loader">
				<div
					style = { { width: `${progress}%` } }
					className = "file-loader__progress"
				>
				</div>
					{ children }
			</div>
	)
}