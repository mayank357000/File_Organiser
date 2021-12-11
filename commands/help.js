function helpFn()
{
 console.log(`       List of all commands is as follows :
              node main.js tree "directoryPath"
              node main.js organise "directoryPath"
              node main.js help 
 `); 
 //bcktick se multilien string ban jaegi ,jaise yha likha waisa hi show
}

module.exports={
    helpKey:helpFn
}