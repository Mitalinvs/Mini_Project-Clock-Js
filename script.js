setInterval(() => {
    //Call constructer one time only
    let date = new Date()

    // let hours = date.getHours()
    // let minutes = date.getMinutes()
    // let seconds = date.getSeconds()
    // console.log(hours, minutes, seconds)

    let time= `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    console.log(time)

    let element = document.getElementById('time')
    element.innerHTML = time

}, 1000
)
//1000 micro ses = 1 sec as its unit is ms

//Alternate way
// let interval;
// function Clock() {
//     const date = new Date();
//     document.getElementById("time").innerHTML = date.toLocaleTimeString();
// }
// const start = () => {
//     interval = setInterval(Clock, 1000);
// }
// start();