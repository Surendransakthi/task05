//  Add height and weight to Fluffy
//  Fluffy name is spelled wrongly. Update it to Fluffyy
//  List all the activities of Fluffyy’s catFriends.
//  Print the catFriends names.
//  Print the total weight of catFriends
//  Print the total activities of all cats (op:6)
//  Add 2 more activities to bar & foo cats
//  Update the fur color of bar
var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [
    {
    name: 'bar',
    activities: ['be grumpy', 'eat bread omblet'],      
    weight: 8,
    furcolor: 'white'
    }, 
    {
    name: 'foo',
    activities: ['sleep', 'pre-sleep naps'],
    weight: 3
    }
    ]
   } 
   cat.name='Fluffyy';
   cat.height=6;
   cat.weight=40;
   console.log(cat);
 let activities = [];
 let friends = [];
 let totalweight = 0;
 for (let i in cat.catFriends)
 {
   activities = activities.concat(cat.catFriends[i].activities);      
   friends+= cat.catFriends[i].name+" ";                             
   totalweight += cat.catFriends[i].weight;  
 }                         
console.log(activities.join(","));                                
console.log(friends);                                        
console.log(totalweight);
cat.catFriends[0].activities.push("walk","trouble making");
cat.catFriends[1].activities.push("killing rat","meow meow sounding");
cat.catFriends[1].furcolor="black with white";

