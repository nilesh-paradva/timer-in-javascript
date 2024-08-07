let milli = 0, sec = 0, min = 0, hr = 0;
let timer = false;

const start = () => {
    timer = true;
    myFun();
};

const stop = () => {
    timer = false;
    myFun();
};

const reset = () => {
    timer = false;
    milli = 0;
    sec = 0;
    min = 0;
    hr = 0;
    timeUpdate();
};

const myFun = () => {
    if (timer) {
        milli++;
        if (milli >= 100) milli = 0, sec++;
        if (sec >= 60) sec = 0, min++;
        if (min >= 60) min = 0, hr++;
        timeUpdate();
        setTimeout(myFun, 10);
    }
};

const timeUpdate = () => {
    document.getElementById("milli").innerHTML = formatNumber(milli);
    document.getElementById("sec").innerHTML = formatNumber(sec);
    document.getElementById("min").innerHTML = formatNumber(min);
    document.getElementById("hr").innerHTML = formatNumber(hr);
};

const formatNumber = num => num < 10 ? '0' + num : num;
