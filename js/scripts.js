// Guardar el estado (columna activa)
let columnActive = 1;

// Seleccionar columnas
const columns = document.querySelectorAll('.column');

// Escuchar clicks en cada columna
columns.forEach((column, index) => {
	column.addEventListener('click', () => {
		// console.log(column, index);
		switchColumn(index);
	});
});

// Cambiar el estado de las columnas

function switchColumn(index) {
	columns[columnActive].classList.remove('column--active');
	columns[index].classList.add('column--active');
	columnActive = index;
}
