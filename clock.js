function digitalClock() {
    let date = new Date();

    //getting hours from date
    let hr=date.getHours();
    let am_pm=null;

    //Formating to 12 hrs format
    if(hr>12){
        hr-=12;
        hr="0"+hr;
        am_pm= "PM";
    }
    else if(hr==0){
        hr=12;
        am_pm="AM";
    }
    else if(hr==12){
        am_pm="PM"
    }
    
    //Minutes
    let mins=date.getMinutes();
    if(mins<10){
        mins="0"+mins
    }
    
    //Seconds
    let secs=date.getSeconds();
    if(secs<10){
        secs="0"+secs;
    }


    //Time in 12 hrs format
    let time=hr+":"+mins+":"+secs+" "+am_pm;

    //Date formatting
    let dd = date.getDate();
    if(dd<10){
        dd="0"+dd;
    }
    let mm = date.getMonth() + 1; // getMonth() returns a zero-based value
    if(mm<10){
        mm="0"+mm;
    }
    let yyyy = date.getFullYear();

    //Day 
    let day=date.getDay() //returns day of the week (0 to 6)
    const days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

    let fullDate = dd + "-" + mm + "-" + yyyy+","+days[day];

    let timeAndDate=time+"\n"+fullDate;

    //Appending to div in html page
    let digiDiv = document.getElementById("clock");
    digiDiv.textContent = timeAndDate;
}
setInterval(digitalClock,1000);


// Call the function to see the current date and time
digitalClock();
