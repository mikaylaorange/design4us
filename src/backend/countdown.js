const countDown = () => {
  const finalDate = new Date("Mar 29, 2021 19:00:00").getTime();

  var now = new Date().getTime();
  var timeleft = finalDate - now;

  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
  var obj = {
    daysLeft: days,
    hoursLeft: hours,
    minutesLeft: minutes,
    secondsLeft: seconds,
  };
  return obj;
};
export default countDown;
