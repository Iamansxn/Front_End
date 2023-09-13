let data = [{
    company: "samsung",
    model: "galaxy",
    price: 50000,
    memory: 64,
},
{
    company: "iphone",
    model: "apple",
    price: 25000,
    memory: 12,
},
{
    company: "iphone 11",
    model: "apple",
    price: 45000,
    memory: 128,
},
{
    company: "iphone 12",
    model: "apple",
    price: 50000,
    memory: 128,
},
{
    company: "iphone 13",
    model: "apple",
    price: 75000,
    memory: 256,
},
{
    company: "iphone 14",
    model: "apple",
    price: 100000,
    memory: 128,
},
];
let str = "<table><tr><th>Company</th><th>Model</th><th>Price</th><th>memory</th></tr>";
data.forEach((el) => {
    str += "<tr><td>"+ 
           el.company  +
           "</td><td>" +
           el.model   +
           "</td><td>" +
           el.price    +
           "</td><td>" +
           el.memory   +
           "</td></tr>";
           str += "</table>";
           document.querySelector("#table").innerHTML = str;
});
function display(data){
    let str = "<table><tr><th>Company</th><th>Model</th><th>Price</th><th>memory</th></tr>";
data.forEach((el) => {
    str += "<tr><td>"+ 
           el.company  +
           "</td><td>" +
           el.model   +
           "</td><td>" +
           el.price    +
           "</td><td>" +
           el.memory   +
           "</td></tr>";
           str += "</table>";
           document.querySelector("#table").innerHTML = str;
});
}
function search(){
    let order = document.getElementById("Asc-Des").value;
    let val = document.getElementById("dropdown").value;
    if (order == 'Asc') {
        if(val == 'company'){
            function compare(a,b) {
                if (a.company<b.company) {
                    return -1;
                } else if(a.company>b.company){
                    return 1;
                }
                return 0; 
            }
            data.sort(compare)
            display(data);
        }  
        else if(val == 'model'){
            function compare(a,b) {
                if (a.model<b.model) {
                    return -1;
                } else if(a.model>b.model){
                    return 1;
                }
                return 0; 
            }
            data.sort(compare)
            display(data);
        }  
        else if(val == 'price'){
            function compare(a,b) {
                if (a.price<b.price) {
                    return -1;
                } else if(a.price>b.price){
                    return 1;
                }
                return 0; 
            }
            data.sort(compare)
            display(data);
        } 
        else if(val == 'memory'){
            function compare(a,b) {
                if (a.memory<b.memory) {
                    return -1;
                } else if(a.memory>b.memory){
                    return 1;
                }
                return 0; 
            }
            data.sort(compare)
            display(data);
        }  
    } else if (order == 'Des') {
        if(val == 'company'){
            function compare(a,b) {
                if (a.company>b.company) {
                    return -1;
                } else if(a.company<b.company){
                    return 1;
                }
                return 0; 
            }
            data.sort(compare)
            display(data);
        }  
        else if(val == 'model'){
            function compare(a,b) {
                if (a.model>b.model) {
                    return -1;
                } else if(a.model<b.model){
                    return 1;
                }
                return 0; 
            }
            data.sort(compare)
            display(data);
        }  
        else if(val == 'price'){
            function compare(a,b) {
                if (a.price>b.price) {
                    return -1;
                } else if(a.price<b.price){
                    return 1;
                }
                return 0; 
            }
            data.sort(compare)
            display(data);
        } 
        else if(val == 'memory'){
            function compare(a,b) {
                if (a.memory>b.memory) {
                    return -1;
                } else if(a.memory<b.memory){
                    return 1;
                }
                return 0; 
            }
            data.sort(compare)
            display(data);
        } 
    }
}