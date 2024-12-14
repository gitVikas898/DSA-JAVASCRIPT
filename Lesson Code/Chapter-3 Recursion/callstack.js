function shower() {
    return "Showering"
}

function cook() {
    const food = ["Eggs","Protein","Cheese Bread","Oatmeal"];
    return food[Math.floor(Math.random()*food.length)];
}

function eatBreakFast(){
    const meal = cook();
    return `Eating ${meal}`;
}

function wakeup() {
    shower();
    eatBreakFast();
    console.log("Okay Ready to goto work");
}

wakeup()
