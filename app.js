function myFunction() {
    //that the movies data
    const data = [{
        monday: [
            {   
                id: 1,
                start: 10,
                end: 20,
                title: 'ურჩხული და ლამაზმანი',
                cover: 'https://tkt-static.lemon.do/img/5161dbdb-0050-48f4-b7f2-4c21c8a7ba36.jpeg',
            },
            {
                id: 2,
                start: 10,
                end: 20,
                title: 'მერე რა რომ, სველია სველი იასამანი',
                cover: 'https://tkt-static.lemon.do/img/0f40afe7-396d-4158-8526-0b56b0c6b255.jpeg',
            },
            {
                id: 3,
                start: 10,
                end: 20,
                title: 'შეყრა',
                cover: 'https://tkt-static.lemon.do/img/68eaefd8-2a61-48bc-a0ce-7261aab14bc8.jpeg',
            }
        ],
        tuesday: [
            {
                id: 4,
                start: 10,
                end: 20,
                title: 'მე, ბებია, ბაბუა და ჭინკები',
                cover: 'https://tkt-static.lemon.do/img/410c4b0e-d63a-46c3-bb74-d3a03f753853.jpeg',
            },
            {
                id: 5,
                start: 10,
                end: 20,
                title: 'ყვავილები ელჯერნონისთვის',
                cover: 'https://tkt-static.lemon.do/img/053b9bdf-604e-4080-9b31-07d56e830f6d.jpeg',
            },
            {
                id: 6,
                start: 10,
                end: 20,
                title: 'ფრთხილად ადამსები!',
                cover: 'https://tkt-static.lemon.do/img/1db992f5-1d32-4dd7-a6a0-3bc668910b21.jpeg',
            }
        ],
        wednesday: [
            {
                id: 7,
                start: 10,
                end: 20,
                title: 'სხვების ცხოვრება',
                cover: 'https://tkt-static.lemon.do/img/01596ec6-7ef8-41dc-84a6-3adb84545d60.jpeg',
            },
            {
                id: 8,
                start: 10,
                end: 20,
                title: 'რამონა',
                cover: 'https://tkt-static.lemon.do/img/52247154-7cb1-495f-979c-013e2730e59c.jpeg',
            },
            {
                id: 9,
                start: 10,
                end: 20,
                title: 'კომედიანტები',
                cover: 'https://tkt-static.lemon.do/img/c0e68ee5-b119-476e-81f1-1bb33589e776.jpeg',
            }
        ],
        thursday: [
            {
                id: 10,
                start: 10,
                end: 20,
                title: 'ჩემი გაზაფხულის შემოდგომა',
                cover: 'https://tkt-static.lemon.do/img/94b6b77e-ca60-4b1a-b24a-3eb26092403d.jpeg',
            },
            {
                id: 11,
                start: 10,
                end: 20,
                title: 'ანუ მე შენ მიყვარხარ',
                cover: 'https://tkt-static.lemon.do/img/c19054cd-fa85-4924-9895-0ff6597dbfb5.jpeg',
            },
            {
                id: 12,
                start: 10,
                end: 20,
                title: 'მოხუცი და ზღვა',
                cover: 'https://tkt-static.lemon.do/img/2b4be8eb-c6be-4ef7-b4fb-c3933a45f123.jpeg',
            }
        ],
        friday: [
            {
                id: 13,
                start: 10,
                end: 20,
                title: 'ყველაზე მაგარი გოგოები',
                cover: 'https://tkt-static.lemon.do/img/a81df611-4dbd-4a91-8002-83abaeadd65d.jpeg',
            },
            {
                id: 14,
                start: 10,
                end: 20,
                title: 'ალადინი',
                cover: 'https://tkt-static.lemon.do/img/0d97441c-8656-49cf-bc49-f0c951a9e39b.jpeg',
            },
            {
                id: 15,
                start: 10,
                end: 20,
                title: 'ურჩხული და ლამაზმანი',
                cover: 'https://tkt-static.lemon.do/img/5161dbdb-0050-48f4-b7f2-4c21c8a7ba36.jpeg',
            }
        ],
        saturday: [
            {
                id: 16,
                start: 12,
                end: 22,
                title: 'წითელქუდა',
                cover: 'https://tkt-static.lemon.do/img/9a0ced6e-329b-4b6b-951e-1748c8621ee2.jpeg',
            },
            {
                id: 17,
                start: 12,
                end: 22,
                title: 'გაყრა',
                cover: 'https://tkt-static.lemon.do/img/b6e3f2c1-9cce-4fd4-8d42-4e71ffafb1a1.jpeg',
            },
            {
                id: 18,
                start: 12,
                end: 22,
                title: 'ზღაპარი იგი მათრობს და მხიბლავს',
                cover: 'https://tkt-static.lemon.do/img/f35816df-43b2-43ce-a844-3c89f82c439f.jpeg',
            }
        ],
        sunday: [
            {
                id: 19,
                start: 12,
                end: 22,
                title: 'ცილინდრი',
                cover: 'https://tkt-static.lemon.do/img/82c2e9e4-4ef7-4fe5-a8c9-008425babdf9.jpeg',
            },
            {
                id: 20,
                start: 12,
                end: 22,
                title: 'შვლის ნუკრის ნაამბობი',
                cover: 'https://tkt-static.lemon.do/img/f7ea467f-b4b4-42f8-9a0a-9fd0e9f7618f.jpeg',
            },
            {
                id: 21,
                start: 12,
                end: 22,
                title: 'წითელი ფეხსაცმელები',
                cover: 'https://tkt-static.lemon.do/img/228702ef-7486-4160-8b3e-d1dd60e50993.jpeg',
            }
        ],
    }];

    //retrieving user's input of day and hour
    var day_sel = document.getElementById("days");
    var day = day_sel.options[day_sel.selectedIndex].value;
    var hour_sel = document.getElementById("hours");
    var hour = hour_sel.options[hour_sel.selectedIndex].text;

    //then storing the days value in an array
    let days_arr = [];

    const days = (Object.keys(data[0]));
    for (let each in days) {
        if(days[each] === day) {
            days_arr.push(days[each]);
        }
    }

    //i keep info about all the movies that will play on the chosen day
    let infoForThatDay = data[0][days_arr[0]];
    let html = '';
    
    //then for each movie 
    for(let each in infoForThatDay) {
        if(infoForThatDay[each]['start'] == hour.substring(0, 2)) { //if the starting hours match
            //I have a html renderer, that renders div with info about each of the movies
            //and generates unique id based on the primary data
            let id= infoForThatDay[each]['id'];
            // console.log(id);
            let htmlRender = `
                 <div class='flex-boxes' id=${id}>
                 <h1>${infoForThatDay[each]['title']}</h1>
                 <button id="button${id}" onclick="myBooking(${id})">დაჯავშნე ახლა</button>
                 </div>
             `;
             html += htmlRender;
        }
    };
    let wrapper = document.querySelector('.users');
    wrapper.innerHTML = html;

}

//When you press the booking button, 
//i want stateObject to update the corresponding id to true(booked) 
//and store the object in local storage, so when i refresh the page, 
//the booked movies, will stay booked 
function myBooking(id) {
    let stateObject = {
        1: 'false',
        2: 'false',
        3: 'false',
        4: 'false',
        5: 'false',
        6: 'false',
        7: 'false',
        8: 'false',
        9: 'false',
        10: 'false',
        11: 'false',
        12: 'false',
        13: 'false',
        14: 'false',
        15: 'false',
        16: 'false',
        17: 'false',
        18: 'false',
        19: 'false',
        20: 'false',
        21: 'false'
    };

    //the styling is just random way to test if thing work
    document.getElementById(id).style.backgroundColor = 'red';
    document.getElementById(id).style.color = 'blue';
    if (stateObject[id] == 'false') {
        document.getElementById(id).style.color = 'green';
        document.getElementById(`button${id}`).style.visibility = "hidden";
        //so i think that if i stored the stateobject correctly,
        //then the div i preesed the button on, would stay styled
        //even after i refresh the page
        stateObject[id] = true;
    }
    console.log('at least აქამდე მაინც მუშაობს');
    localStorage.setItem("stateObject", JSON.stringify(stateObject));
    // var retrieved = localStorage.getItem('stateObject');
    // console.log(retrieved);
}

