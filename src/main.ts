// argon-promisify/src/main.ts

export function promisify(
	fn: Function,
	context: any
): (...args: any[]) => Promise<any> {
	return (...args: any[]) => {
		return new Promise((resolve, reject) => {
			function customCallback(err: any, result: any) {
				if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			}

			args.push(customCallback);
			fn.call(context || this, ...args);
		});
	};
}
