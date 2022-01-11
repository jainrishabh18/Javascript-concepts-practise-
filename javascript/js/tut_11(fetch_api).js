console.log(" Fetch Api Tutorial");


// fetch api is basically fetching data from some other page,website,link etc and showing on our page 


// url from where we want to fetch data;
url="https://jsonplaceholder.typicode.com/users";

fetch(url)
// .json is used for converting object into array time parsable format
.then(response => response.json())
.then(json => {
    // here we made a list and gave them head = name emali city
    let lisT = `<tr> <th> Name </th> <th> Email </th> <th> City </th> </tr>`;

    json.forEach(user =>
        {
            // dynamically giving data to the table by ${} format
            lisT += `<tr>
            
                <td>${user.name} </td>
                
                <td>${user.email}</td>
                <td>${user.address.city}</td>

            </tr>`
        });
    // displaying the data on our page
    document.getElementById('users').innerHTML =lisT;

});



// url="https://data.covid19india.org/state_district_wise.json";

// fetch(url)
// // .json is used for converting object into array time parsable format
// .then(response => response.json())
// .then(json => {
//     // here we made a list and gave them head = name emali city
//     let lisT = `<tr> <th> Confirmed </th> <th> Active </th> <th> Deceased </th> <th> Recovered </th> </tr>`;

//     Array(json).forEach(user =>
//         {
//             // dynamically giving data to the table by ${} format
//             lisT += `<tr>

//                 <td>${user.confirmed}</td>
//                 <td>${user.active} </td>
//                 <td>${user.deceased}</td>
//                 <td>${user.recovered}</td>

//             </tr>`
//         });
//     // displaying the data on our page
//     document.getElementById('users').innerHTML =lisT;

// });