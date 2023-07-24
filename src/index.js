const fs = require("fs");

async function main() {

      await sleep(5000);
      try {

         console.log("opening file");
         var iteration=0;
         const max_iteration=1000;
         var json;
         do{
             iteration++;
             console.log("iteration : "+iteration)
         } while ( !fs.existsSync(name ) && iteration<max_iteration)

         if(fs.existsSync(name )){
             json=JSON.parse(fs.readFileSync(name.startsWith("/var") ?
                                    name : fs.readFileSync(name).toString('utf-8').trim()).toString('utf-8'), (key, value) => {
                                                 console.log(key);
                                                 console.log(value);
                                                 dtmetadata[key]=value;
                                                 process.env[key] = value;
                                               }
                                                );

             console.log(JSON.stringify(process.env))
         }
         else {
            console.log("No magic file in the workload")
         }
      } catch(error) {
        console.log(error);
        }

      }

var dtmetadata={}
const name ='dt_metadata_e617c525669e072eebe3d0f08212e8f2.json'

main();

function sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    }
