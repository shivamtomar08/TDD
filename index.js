function add(numbers) {

    if (numbers === "") {
        return 0;
    }

    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
        const delimiterEndIndex = numbers.indexOf("\n");
        delimiter = new RegExp(numbers.substring(2, delimiterEndIndex));
        numbers = numbers.substring(delimiterEndIndex + 1);
    }

    const numArray = numbers.split(delimiter).map(Number);
    const negatives = numArray.filter(num => num < 0);

    if (negatives.length > 0) {
        console.log(`Negative numbers not allowed: ${negatives.join(", ")}`);
        return;
    }

    return numArray.reduce((sum, num) => sum + num, 0);
}

console.log(add(""));
console.log(add("1"));
console.log(add("1,5"));
console.log(add("1\n2,3"));
console.log(add("//;\n1;2"));