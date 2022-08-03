const hitungVoucher = (name,total) => {
    const printer = (inp,dis) => {
         console.log(
            `Output:   - Uang yang harus dibayar : ${inp}
          - Diskon : ${dis}
          - Kembalian : ${dis}`
         )
    };

    // Tidak sampai batas minimal
      if(name === "DumbWaysJos" && total < 50000){
        return printer(total,0)
      };

      if(name === "DumbWaysMantap" && total < 80000){
        return printer(total,0)
      }

    // Sampai batas minimal
    if(name === "DumbWaysJos"){
        let discount = total * 21.1 / 100;

        if(discount > 20000){
            discount = 20000;
        };

        return printer(total - discount,discount)
    };

    if(name === "DumbWaysMantap"){
        let discount = total * 30 / 100;

        if(discount > 40000){
            discount = 40000;
        };

        return printer(total - discount,discount)
    };


};

hitungVoucher("DumbWaysMantap",160000);