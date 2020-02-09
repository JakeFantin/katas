let talkingCalendar = function(date) {
  let message = "";
  let month = [null, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let words = date.split("/");

  monthNumber = parseInt(words[1]);
  message += `${ month[monthNumber] } `;


  //getting suffix for the day
  if(words[2][0] === '1'){
    message += `${parseInt(words[2])}th, `;
  } else if(words[2][1] === '1'){
    message += `${parseInt(words[2])}st, `;
  } else if( words[2][1] === '2'){
    message += `${parseInt(words[2])}nd, `;
  } else {
    message += `${parseInt(words[2])}th, `;
  }
  //adding the year
  message += words[0];


  return message;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));