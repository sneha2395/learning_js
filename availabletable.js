// Find table at 19:30

const availableTimings = [
    {
        time: "10:00",
        available: true
    },
    {
        time: "19:30",
        available: true
    },
    {
        time: "20:30",
        available: false
    },
    {
        time: "21:30",
        available: true
    },

];

const result = availableTimings.filter((element) => {
    if (element.time === "19:30") {
        if (element.available === true){
            return true;
        } else {
            return false;
        } 
    }else {
        return false;
    }


})
 console.log(result)
