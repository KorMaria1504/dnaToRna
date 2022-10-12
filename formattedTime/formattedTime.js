const formattedTime= (minsCount) => {
    let hours = 0;
    let minutes = 0;
    let strHours = "";
    let strMin = "";
    let resultTime = "";

    if (minsCount >= 1440) {
        while (minsCount >= 1440) {
            minsCount = minsCount - 1440;
        }
    }
   
    hours = Math.floor(minsCount / 60);
    minutes = minsCount - hours * 60;

    if (hours < 10) {
        strHours = `0${hours}`;
    }
    else {
        strHours = `${hours}`;
    }

    if (minutes < 10) {
         strMin = `0${minutes}`;
    }
    else {
        strMin = `${minutes}`;
    }

    resultTime = `${strHours}:${strMin}`;

    return resultTime;
};

export default formattedTime;

console.log(formattedTime(24)); // 00:24
console.log(formattedTime(1440)); // 00:00
console.log(formattedTime(1504)); // 01:04
