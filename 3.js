const sortArray = (arr) => {
    const evenArr = arr.filter(item => item % 2 === 0);
    const oddArr = arr.filter(item => item % 2 !== 0);
    const sortedArr = arr.sort(function(a, b){return a - b});


    console.log(`Array: ${sortedArr.join(",")}\nGanjil: ${oddArr.join(",")}\nGenap: ${evenArr.join(",")}`);
};

sortArray([2, 24, 32, 22, 31]);