
function sendNotification(email){
      if(email.includes('@') === false){
            return 'Invalid Input'
      }
      const parts = email.split('@');
      const userName = parts[0]
      const domainName = parts[1];
      const result = userName + ' sent an email ' + domainName;
      return result;

}

console.log(sendNotification("zihad@gmail.com"));
console.log(sendNotification("farhan34@yahoo.com"));
console.log(sendNotification("nadim.naem5@outlook.com"));
console.log(sendNotification("fahim234.hotmail.com"));
console.log(sendNotification("sadia8icloud.com"));












