function logData(data, isVerbose) {
    if (isVerbose) {
        console.log("Verbose data " + data);
    }
    else {
        console.log(data);
    }
}
logData("Data logging");
logData("Data logging", true);
