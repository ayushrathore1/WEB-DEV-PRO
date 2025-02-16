setInterval(() => {
    let d = new Date();
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();
    let hrotation = (30 * htime ) + (mtime/2);
    let mrotation = (6 * mtime);
    let srotation = (6 * stime);

    let hour = document.getElementById("hour");

    hour.style.transform = `rotate(${hrotation}deg)`;

      hour.style.transformOrigin = "bottom";

    let minute = document.getElementById("minute"); 
   minute.style.transform = `rotate(${mrotation}deg)`;
   minute.style.transformOrigin = "bottom"

   let second = document.getElementById("second") 

    second.style.transform = `rotate(${srotation}deg)`;

      second.style.transformOrigin = "bottom";

}, 1000);