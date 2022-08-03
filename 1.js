// 6(1) – 1 = 5

// 6(1) + 1 = 7

// 6(2) – 1 = 11

// 6(2) + 1 = 13

// 6(3) – 1 = 17

// 6(3) + 1 = 19…..so on


const drawSikuSiku = (baris) => {

    // Deret
    const deretAritmetika = (n) => {
        if(n === 0) return 0;

       const result = n/2 * (2 + (n-1));

       return result;
    }

    // Prime num
    const primeNum = (n) => {
        const isEven = n % 2 === 0 ? true : false ;
        const number = n / 2;

        if(isEven){
            return 6 * Math.round(number) + 1
        } else {
            return 6 * Math.round(number) - 1
        }
    }

    // producerrow
    const produceRow = (length) => {
          let row = "";

          for(let i = 1; i < length + 1;i++){
             const urutan = deretAritmetika(length - 1) + i;

             if(urutan === 1) row += 2 + " "
             if(urutan === 2) row += 3 + " "

             row += primeNum(urutan) + " "
          }

          console.log(row)
    }

    for(let i = 1;i < baris + 1; i++){
        produceRow(i)
    }
};

drawSikuSiku(5);

