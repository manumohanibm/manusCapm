module.exports = (srv) => {

// adding comment line for git practise 
    srv.on('vendors', (req,res) => {


        var aVendors = [{
            "vendorId": 1,
            "name": "SAP"
        },{
            "vendorId": 2,
            "name": "IBM"
        }];
        console.log("data aaya " + req.data.vendorId);


        for (let i = 0; i < aVendors.length; i++) {
            const element = aVendors[i];
            if(element.vendorId === req.data.vendorId){
                return element.name;
            }
        }       



    });


}