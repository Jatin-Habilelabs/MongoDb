const middleware = (req, res, next) => {
const request=req.body;
const emailRegex=/^[\w\.]+@([\w]+\.)+[\w]{2,4}$/;
const phoneRegex=/^[6-9]\d+\d{10}$/

  if(!req.body.name){
     res.json("invalid input")
  }
  if(!(phoneRegex).test(request.phone)){
   console.log("Please enter Valid phone no");
   return false;
  }
  if(!request.email.match(emailRegex)){
    console.log("Not proper mail");
    return false;
  }
next();

};
module.exports = { middleware };