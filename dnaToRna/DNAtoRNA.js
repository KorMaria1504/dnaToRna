let result = "";

const DNAtoRNA = (str) => {
    if (str.length === 0) {
        result = '';
    }
    else {
        for (let i = 0; i < str.length; i += 1) {
            if (str[i] === "G") {
                result += "C";
            }
            else if (str[i] === "C") {
                result += "G";
            }
            else if (str[i] === "T") {
                result += "A";
            }
            else if (str[i] === "A") {
                result += "U";
            }
            else {result = null;}
        }
        return result;
    }
};

DNAtoRNA("AACGTA");
console.log(result); // UUGCAU