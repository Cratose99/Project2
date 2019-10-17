var express = require("express");
var router = express.Router();

var apiImplementation = require('../routes/apiimplementation')

router.get('/:districtId',function(req,res){
    console.log(req.params.districtId);
    console.log(req.session.user);
    var districtId = req.params.districtId
    
    if(req.session.user) {
        //create a switch statement on districtId to route person to the correct district page
        switch(districtId) {
            case "1":
                Promise.all([apiImplementation.doCouncil(),apiImplementation.doTerms()]).then(councilData => {
                  console.log(councilData[1][0])
                  res.render("1", {
                    district: districtId, 
                    council: councilData[0].filter(member => member.District.includes(districtId))[0],
                    terms: councilData[1][0].Council1
                  })
                })
                //TODO: connect with db, get all info on district 1, create handlebars object with the array that comes back
                
              break;
            case "2":
                Promise.all([apiImplementation.doCouncil(),apiImplementation.doTerms()]).then(councilData => {
                  console.log(councilData[1][0])
                  res.render("1", {
                    district: districtId, 
                    council: councilData[0].filter(member => member.District.includes(districtId))[0],
                    terms: councilData[1][0].Council2
                  })
                })
              break;
              case "3":
                  Promise.all([apiImplementation.doCouncil(),apiImplementation.doTerms()]).then(councilData => {
                    console.log(councilData[1][0])
                    res.render("1", {
                      district: districtId, 
                      council: councilData[0].filter(member => member.District.includes(districtId))[0],
                      terms: councilData[1][0].Council3
                    })
                  })
              break;
              case "4":
                  Promise.all([apiImplementation.doCouncil(),apiImplementation.doTerms()]).then(councilData => {
                    console.log(councilData[1][0])
                    res.render("1", {
                      district: districtId, 
                      council: councilData[0].filter(member => member.District.includes(districtId))[0],
                      terms: councilData[1][0].Council4
                    })
                  })
              break;
              case "5":
                  Promise.all([apiImplementation.doCouncil(),apiImplementation.doTerms()]).then(councilData => {
                    console.log(councilData[1][0])
                    res.render("1", {
                      district: districtId, 
                      council: councilData[0].filter(member => member.District.includes(districtId))[0],
                      terms: councilData[1][0].Council5
                    })
                  })
              break;
              case "6":
                  Promise.all([apiImplementation.doCouncil(),apiImplementation.doTerms()]).then(councilData => {
                    console.log(councilData[1][0])
                    res.render("1", {
                      district: districtId, 
                      council: councilData[0].filter(member => member.District.includes(districtId))[0],
                      terms: councilData[1][0].Council6
                    })
                  })
              break;
              case "7":
                  Promise.all([apiImplementation.doCouncil(),apiImplementation.doTerms()]).then(councilData => {
                    console.log(councilData[1][0])
                    res.render("1", {
                      district: districtId, 
                      council: councilData[0].filter(member => member.District.includes(districtId))[0],
                      terms: councilData[1][0].Council7
                    })
                  })
              break;
            default:
              console.log("default")
              res.render("login")
          }
    }else {
        // TODO: handle return to login page
        console.log("else")
        res.render('login')
    }
})

module.exports = router;