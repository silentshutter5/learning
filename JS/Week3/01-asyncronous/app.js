function step1(init){
    return init +1;
}

function step2(init){
    return init +2;
}

function step3(init){
    return init +3;
}

function doOperation(){
    let results =0;
    results = step1(results);
    results = step2(results);
    results = step3(results);

    console.log(`results: ${results}`)
}

doOperation();