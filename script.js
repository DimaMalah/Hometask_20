// Вам нужно написать функции indexOf, lastIndexOf, find, findIndex, includes, every и some, которые работают так же, как одноименные методы массивов.
// Алгоритм выполнения:
// Читаете документацию по методу над которым работаете
// разбираетесь как он работает и что возвращает
// пишете функцию которая полностью имитирует работу метода


//indexOf-----------------------------------
{
	const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	const indeXof = ((arr, item, from = 0) => {
		for (let i = from; i < arr.length; i++) {
			if (arr[i] === item) return i
		}
		return -1
	})
	console.log("-------indexOf--------");
	console.log(indeXof(a, 5));
}

//lastIndexOf--------------------------------
{
	const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	const lastindexOf = ((arr, item, from = (arr.length - 1)) => {
		if (from >= 0) {
			for (let i = from; i >= 0; i--) {
				if (arr[i] === item) return i
			}
		} else {
			for (let i = arr.length + from; i >= 0; i--) {
				if (arr[i] === item) return i
			}
		}
		return -1
	})
	console.log("-----lastIndexOf-----");
	console.log(lastindexOf(a, 5, -6));
}
//includes----------------------------------------
{
	const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	const inclUdes = ((arr, item, from = 0) => {
		for (let i = from; i < arr.length; i++) {
			if (arr[i] === item) return true
		}
		return false
	})
	console.log("-------includes--------");
	console.log(inclUdes(a, 5));
}
//find-------------------------------------------
{
	const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const findFunc = ((arr, item) => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === item) return arr[i]
		}
	})
	console.log("--------find---------");
	console.log(findFunc(a, 77));
}
//findIndex--------------------------------------
{
	const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const findindeX = ((arr, item) => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === item) return i
		}
	})
	console.log("-------findIndex-------");
	console.log(findindeX(a, 7));
}
//every------------------------------------------
{
	const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const everyFunc = ((arr, callback) => {
		for (let i = 0; i < arr.length; i++) {
			if (Boolean(callback(arr[i])) === false) return false
		}
		return true
	})
	const callb = ((x) => x > 0)
	console.log("---------every---------");
	console.log(everyFunc(a, callb));
}
//some-----------------------------------------
{
	const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const someFunc = ((arr, callback) => {
		for (let i = 0; i < arr.length; i++) {
			if (Boolean(callback(arr[i])) === true) return true
		}
		return false
	})
	const callb = ((x) => x = 1)
	console.log("---------some---------");
	console.log(someFunc(a, callb));
}
