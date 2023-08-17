const processSameFlavors = (
	sameFlavor,
	flavor,
	totalOrder
) => {
	if (!sameFlavor) {
		flavor.orderCount = 1;
		totalOrder.push(flavor);
	} else {
		sameFlavor.orderCount++;
	}
	return totalOrder;
};

const printOrder = (totalOrder) => {
	for (const order of totalOrder) {
		if (order.orderCount === 1) {
			console.log(
				`You ordered ${order.flavor} ${order.orderCount} time`
			);
			continue;
		}
		console.log(
			`You ordered ${order.flavor} ${order.orderCount} times`
		);
	}
};

const greeting = () => {
	alert(`Welcome to Froyo Shop!`);
	const userInput = prompt(
		"Enter a list of comma seperated froyo flavors"
	);
	const arrayOfFlavors = userInput.split(",");
	let totalOrder = [];

	for (const userInput of arrayOfFlavors) {
		const flavor = { flavor: userInput, orderCount: 0 };
		const sameFlavor = totalOrder.find(
			(flavor) => flavor.flavor === userInput
		);

		totalOrder = processSameFlavors(
			sameFlavor,
			flavor,
			totalOrder
		);
	}
	printOrder(totalOrder);
};

greeting();
