function calculateVolumeAndArea(num) {  
    let area = [6 * (num * num)];
    let extent = [num * num * num];
    if (typeof num !== "number" || num < 0 || !Number.isInteger(num)) {
        console.log('При обрахунку відбулась помилка!');
    } else {
        console.log(`Об'єм куба: ${extent}, площа: ${area}`);
    }
   
}

calculateVolumeAndArea(5.5);


function getCoupeNumber(seatMumber) {
    if (typeof (seatMumber) !== 'number' || seatMumber < 0 || !Number.isInteger(seatMumber)) {
        console.log('Помилка');
    }

    if (seatMumber === 0 || seatMumber > 36) {
        console.log('Таких місць немає');
    }
    else {
        console.log(Math.ceil(seatMumber /4));
    }
} 

getCoupeNumber(30);
