function isIsomorphic(s, t) {
    //character indexing
    let indexS = {};
    let indexT = {};

    const len = s.length;

    if (len !== t.length) { //if longer, isometric not possible
        return false;
    }

    for (let i = 0; i < len; i++) {
        //if count for char at same index does not match, strings are not isometric
        //return false
        if (indexS[s.charAt(i)] !== indexT[t.charAt(i)]) {
            return false;
        }
        //increment count for both chars
        indexS[s.charAt(i)] = i + 1;
        indexT[t.charAt(i)] = i + 1;
    }

    return true;
}

const s = "apple";
const t = "nllqw";

console.log(isIsomorphic(s, t));