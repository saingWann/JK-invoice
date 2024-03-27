export const  printDiv = (divName) => {
    const printContents = document.getElementById(divName).innerHTML;
    console.log(printContents)
    // w=window.open();
    window.print(printContents)
    // w.document.write(printContents);
    // w.print();
    // w.close();
}